import { get } from 'lodash-es'
import QuickLRU from 'quick-lru'

import patterns from '../lib/patterns.js'
import getMiniTocItems from '../lib/get-mini-toc-items.js'
import Page from '../lib/page.js'
import statsd from '../lib/statsd.js'
import { isConnectionDropped } from './halt-on-dropped-connection.js'
import { nextApp, nextHandleRequest } from './next.js'

function cacheOnReq(fn, minSize = 1024, lruMaxSize = 1000) {
  const cache = new QuickLRU({ maxSize: lruMaxSize })

  return async function (req) {
    const path = req.pagePath || req.path

    // Is the request for the GraphQL Explorer page?
    const isGraphQLExplorer =
      req.context.currentPathWithoutLanguage === '/graphql/overview/explorer'

    // Serve from the cache if possible
    const isCacheable =
      // Skip for HTTP methods other than GET
      req.method === 'GET' &&
      // Skip for JSON debugging info requests
      !('json' in req.query) &&
      // Skip for the GraphQL Explorer page
      !isGraphQLExplorer

    if (isCacheable && cache.has(path)) {
      return cache.get(path)
    }
    const result = await fn(req)

    if (result && isCacheable && result.length > minSize) {
      cache.set(path, result)
    }
    return result
  }
}

async function buildRenderedPage(req) {
  const { context } = req
  const { page } = context
  const path = req.pagePath || req.path

  const pageRenderTimed = statsd.asyncTimer(page.render, 'middleware.render_page', [`path:${path}`])

  const renderedPage = await pageRenderTimed(context)

  // handle special-case prerendered GraphQL objects page
  if (path.endsWith('graphql/reference/objects')) {
    return renderedPage + context.graphql.prerenderedObjectsForCurrentVersion.html
  }

  // handle special-case prerendered GraphQL input objects page
  if (path.endsWith('graphql/reference/input-objects')) {
    return renderedPage + context.graphql.prerenderedInputObjectsForCurrentVersion.html
  }

  // handle special-case prerendered GraphQL mutations page
  if (path.endsWith('graphql/reference/mutations')) {
    return renderedPage + context.graphql.prerenderedMutationsForCurrentVersion.html
  }

  return renderedPage
}

async function buildMiniTocItems(req) {
  const { context } = req
  const { page } = context
  const path = req.pagePath || req.path

  // get mini TOC items on articles
  if (!page.showMiniToc) {
    return
  }

  const miniTocItems = getMiniTocItems(context.renderedPage, page.miniTocMaxHeadingLevel)

  // handle special-case prerendered GraphQL objects page
  if (path.endsWith('graphql/reference/objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    return miniTocItems.concat(context.graphql.prerenderedObjectsForCurrentVersion.miniToc)
  }

  // handle special-case prerendered GraphQL input objects page
  if (path.endsWith('graphql/reference/input-objects')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    return miniTocItems.concat(context.graphql.prerenderedInputObjectsForCurrentVersion.miniToc)
  }

  // handle special-case prerendered GraphQL mutations page
  if (path.endsWith('graphql/reference/mutations')) {
    // concat the markdown source miniToc items and the prerendered miniToc items
    return miniTocItems.concat(context.graphql.prerenderedMutationsForCurrentVersion.miniToc)
  }

  return miniTocItems
}

// The avergage size of buildRenderedPage() is about 22KB.
// The median in 7KB. By only caching those larger than 10KB we avoid
// putting too much into the cache.
const wrapRenderedPage = cacheOnReq(buildRenderedPage, 10 * 1024)
// const wrapMiniTocItems = cacheOnReq(buildMiniTocItems)

export default async function renderPage(req, res, next) {
  const { context } = req
  const { page } = context
  const path = req.pagePath || req.path

  if (path.startsWith('/storybook')) {
    return nextHandleRequest(req, res)
  }

  // render a 404 page
  if (!page) {
    if (process.env.NODE_ENV !== 'test' && context.redirectNotFound) {
      console.error(
        `\nTried to redirect to ${context.redirectNotFound}, but that page was not found.\n`
      )
    }
    return nextApp.render404(req, res)
  }

  // Just finish fast without all the details like Content-Length
  if (req.method === 'HEAD') {
    return res.status(200).end()
  }

  // Updating the Last-Modified header for substantive changes on a page for engineering
  // Docs Engineering Issue #945
  if (page.effectiveDate) {
    // Note that if a page has an invalidate `effectiveDate` string value,
    // it would be caught prior to this usage and ultimately lead to
    // 500 error.
    res.setHeader('Last-Modified', new Date(page.effectiveDate).toUTCString())
  }

  // collect URLs for variants of this page in all languages
  page.languageVariants = Page.getLanguageVariants(path)

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  req.context.renderedPage = await wrapRenderedPage(req)
  req.context.miniTocItems = await buildMiniTocItems(req)

  // Stop processing if the connection was already dropped
  if (isConnectionDropped(req, res)) return

  // Create string for <title> tag
  page.fullTitle = page.titlePlainText

  // add localized ` - GitHub Docs` suffix to <title> tag (except for the homepage)
  if (!patterns.homepagePath.test(path)) {
    page.fullTitle = page.fullTitle + ' - ' + context.site.data.ui.header.github_docs
  }

  // Is the request for JSON debugging info?
  const isRequestingJsonForDebugging = 'json' in req.query && process.env.NODE_ENV !== 'production'

  // `?json` query param for debugging request context
  if (isRequestingJsonForDebugging) {
    if (req.query.json.length > 1) {
      // deep reference: ?json=page.permalinks
      return res.json(get(context, req.query.json))
    } else {
      // dump all the keys: ?json
      return res.json({
        message:
          'The full context object is too big to display! Try one of the individual keys below, e.g. ?json=page. You can also access nested props like ?json=site.data.reusables',
        keys: Object.keys(context),
      })
    }
  }

  return nextHandleRequest(req, res)
}
