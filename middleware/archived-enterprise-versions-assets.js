import path from 'path'

import got from 'got'

import patterns from '../lib/patterns.js'
import isArchivedVersion from '../lib/is-archived-version.js'
import { cacheControlFactory } from './cache-control.js'

const cacheControl = cacheControlFactory(60 * 60 * 24)

// This module handles requests for the CSS and JS assets for
// deprecated GitHub Enterprise versions by routing them to static content in
// help-docs-archived-enterprise-versions
//
// See also ./archived-enterprise-versions.js for non-CSS/JS paths

export default async function archivedEnterpriseVersionsAssets(req, res, next) {
  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived) return next()

  // Only match asset paths
  if (!patterns.assetPaths.test(req.path)) return next()

  const assetPath = req.path.replace(`/enterprise/${requestedVersion}`, '')
  const proxyPath = path.join('/', requestedVersion, assetPath)

  try {
    const r = await got(
      `https://github.github.com/help-docs-archived-enterprise-versions${proxyPath}`
    )
    res.set('accept-ranges', 'bytes')
    res.set('content-type', r.headers['content-type'])
    res.set('content-length', r.headers['content-length'])
    res.set('x-is-archived', 'true')
    res.set('x-robots-tag', 'noindex')
    // Allow the browser and Fastly to cache these
    cacheControl(res)
    return res.send(r.body)
  } catch (err) {
    return next(404)
  }
}
