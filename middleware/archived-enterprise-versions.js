import fs from 'fs'
import path from 'path'
import slash from 'slash'
import statsd from '../lib/statsd.js'
import {
  firstVersionDeprecatedOnNewSite,
  lastVersionWithoutArchivedRedirectsFile,
} from '../lib/enterprise-server-releases.js'
import patterns from '../lib/patterns.js'
import versionSatisfiesRange from '../lib/version-satisfies-range.js'
import isArchivedVersion from '../lib/is-archived-version.js'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from './set-fastly-surrogate-key.js'
import got from 'got'
import { readCompressedJsonFileFallback } from '../lib/read-json-file.js'
import { cacheControlFactory } from './cache-control.js'
import { pathLanguagePrefixed } from '../lib/languages.js'

function readJsonFileLazily(xpath) {
  const cache = new Map()
  // This will throw if the file isn't accessible at all, e.g. ENOENT
  // But, the file might have been replaced by one called `SAMENAME.json.br`
  // because in staging, we ship these files compressed to make the
  // deployment faster. So, in our file-presence check, we need to
  // account for that.
  try {
    fs.accessSync(xpath)
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        fs.accessSync(xpath + '.br')
      } catch (err) {
        if (err.code === 'ENOENT') {
          throw new Error(`Neither ${xpath} nor ${xpath}.br is accessible`)
        }
        throw err
      }
    } else {
      throw err
    }
  }
  return () => {
    if (!cache.has(xpath)) cache.set(xpath, readCompressedJsonFileFallback(xpath))
    return cache.get(xpath)
  }
}

// These files are huge so lazy-load them. But note that the
// `readJsonFileLazily()` function will, at import-time, check that
// the path does exist.
const archivedRedirects = readJsonFileLazily(
  './lib/redirects/static/archived-redirects-from-213-to-217.json'
)
const archivedFrontmatterFallbacks = readJsonFileLazily(
  './lib/redirects/static/archived-frontmatter-fallbacks.json'
)

const cacheControl = cacheControlFactory(60 * 60 * 24 * 365)

// Combine all the things you need to make sure the response is
// aggresively cached.
const cacheAggressively = (res) => {
  cacheControl(res)

  // This sets a custom Fastly surrogate key so that this response
  // won't get updated in every deployment.
  // Essentially, this sets a surrogate key such that Fastly
  // doesn't do soft-purges on these responses on every
  // automated deployment.
  setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

  // Because this middleware has (quite possibly) been executed before
  // the CSRF middleware, that would have set a cookie. Remove that.
  // The reason for removing the 'Set-Cookie' header is because
  // otherwise Fastly won't cache it.
  res.removeHeader('set-cookie')
}

// The way `got` does retries:
//
//   sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
//
// So, it means:
//
//   1. ~1000ms
//   2. ~2000ms
//   3. ~4000ms
//
// ...if the limit we set is 3.
// Our own timeout, in ./middleware/timeout.js defaults to 10 seconds.
// So there's no point in trying more attempts than 3 because it would
// just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
const retryConfiguration = {
  limit: 3,
}
// According to our Datadog metrics, the *average* time for the
// the 'archive_enterprise_proxy' metric is ~70ms (excluding spikes)
// which much less than 500ms.
const timeoutConfiguration = 500

async function getRemoteJSON(url, config) {
  if (_getRemoteJSONCache.has(url)) {
    return _getRemoteJSONCache.get(url)
  }
  const body = await got(url, config).json()
  _getRemoteJSONCache.set(url, body)
  return body
}
const _getRemoteJSONCache = new Map()

// This module handles requests for deprecated GitHub Enterprise versions
// by routing them to static content in help-docs-archived-enterprise-versions

export default async function archivedEnterpriseVersions(req, res, next) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived) return next()

  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  const redirectCode = pathLanguagePrefixed(req.path) ? 301 : 302

  // redirect language-prefixed URLs like /en/enterprise/2.10 -> /enterprise/2.10
  // (this only applies to versions <2.13)
  if (
    req.path.startsWith('/en/') &&
    versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)
  ) {
    cacheControl(res)
    return res.redirect(redirectCode, req.baseUrl + req.path.replace(/^\/en/, ''))
  }

  // find redirects for versions between 2.13 and 2.17
  // starting with 2.18, we updated the archival script to create a redirects.json file
  if (
    versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`) &&
    versionSatisfiesRange(requestedVersion, `<=${lastVersionWithoutArchivedRedirectsFile}`)
  ) {
    // `archivedRedirects` is a callable because it's a lazy function
    // and memoized so calling it is cheap.
    const redirect = archivedRedirects()[req.path]
    if (redirect && redirect !== req.path) {
      cacheAggressively(res)
      return res.redirect(redirectCode, redirect)
    }
  }

  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) {
    const redirectJson = await getRemoteJSON(getProxyPath('redirects.json', requestedVersion), {
      retry: retryConfiguration,
      // This is allowed to be different compared to the other requests
      // we make because downloading the `redirects.json` once is very
      // useful because it caches so well.
      // And, as of 2021 that `redirects.json` is 10MB so it's more likely
      // to time out.
      timeout: 1000,
    })

    // make redirects found via redirects.json redirect with a 301
    if (redirectJson[req.path]) {
      res.set('x-robots-tag', 'noindex')
      cacheAggressively(res)
      return res.redirect(redirectCode, redirectJson[req.path])
    }
  }

  const statsdTags = [`version:${requestedVersion}`]
  const doGet = () =>
    got(getProxyPath(req.path, requestedVersion), {
      throwHttpErrors: false,
      retry: retryConfiguration,
      timeout: timeoutConfiguration,
    })
  const r = await statsd.asyncTimer(doGet, 'archive_enterprise_proxy', [
    ...statsdTags,
    `path:${req.path}`,
  ])()
  if (r.statusCode === 200) {
    res.set('x-robots-tag', 'noindex')

    // make stubbed redirect files (which exist in versions <2.13) redirect with a 301
    const staticRedirect = r.body.match(patterns.staticRedirect)
    if (staticRedirect) {
      cacheAggressively(res)
      return res.redirect(redirectCode, staticRedirect[1])
    }

    res.set('content-type', r.headers['content-type'])

    cacheAggressively(res)

    return res.send(r.body)
  }

  for (const fallbackRedirect of getFallbackRedirects(req, requestedVersion) || []) {
    const doGet = () =>
      got(getProxyPath(fallbackRedirect, requestedVersion), {
        throwHttpErrors: false,
        retry: retryConfiguration,
        timeout: timeoutConfiguration,
      })

    const r = await statsd.asyncTimer(doGet, 'archive_enterprise_proxy_fallback', [
      ...statsdTags,
      `fallback:${fallbackRedirect}`,
    ])()
    if (r.statusCode === 200) {
      cacheAggressively(res)
      return res.redirect(redirectCode, fallbackRedirect)
    }
  }

  return next()
}

// paths are slightly different depending on the version
// for >=2.13: /2.13/en/enterprise/2.13/user/articles/viewing-contributions-on-your-profile
// for <2.13: /2.12/user/articles/viewing-contributions-on-your-profile
function getProxyPath(reqPath, requestedVersion) {
  const proxyPath = versionSatisfiesRange(requestedVersion, `>=${firstVersionDeprecatedOnNewSite}`)
    ? slash(path.join('/', requestedVersion, reqPath))
    : reqPath.replace(/^\/enterprise/, '')

  return `https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`
}

// from 2.13 to 2.17, we lost access to frontmatter redirects during the archival process
// this workaround finds potentially relevant frontmatter redirects in currently supported pages
function getFallbackRedirects(req, requestedVersion) {
  if (versionSatisfiesRange(requestedVersion, `<${firstVersionDeprecatedOnNewSite}`)) return
  if (versionSatisfiesRange(requestedVersion, `>${lastVersionWithoutArchivedRedirectsFile}`)) return

  // `archivedFrontmatterFallbacks` is a callable because it's a lazy function
  // and memoized so calling it is cheap.
  return archivedFrontmatterFallbacks().find((arrayOfFallbacks) =>
    arrayOfFallbacks.includes(req.path)
  )
}
