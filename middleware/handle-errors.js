import FailBot from '../lib/failbot.js'
import loadSiteData from '../lib/site-data.js'
import { nextApp } from './next.js'

function shouldLogException(error) {
  const IGNORED_ERRORS = [
    // avoid sending CSRF token errors (from bad-actor POST requests)
    'EBADCSRFTOKEN',
    // Client connected aborted
    'ECONNRESET',
  ]

  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }

  // We should log this exception
  return true
}

async function logException(error, req) {
  if (process.env.NODE_ENV !== 'test' && shouldLogException(error)) {
    await FailBot.report(error, {
      path: req.path,
    })
  }
}

export default async function handleError(error, req, res, next) {
  // When you run tests that use things doing get() requests in
  // our supertest handler, if something goes wrong anywhere in the app
  // and its middlewares, you get a 500 but the error is never displayed
  // anywhere. So this is why we log it additionally.
  // Note, not using console.error() because it's arguably handled.
  // Some tests might actually expect a 500 error.
  if (process.env.NODE_ENV === 'test') {
    console.warn('An error occurrred in some middleware handler', error)
  }

  try {
    // If the headers have already been sent or the request was aborted...
    if (res.headersSent || req.aborted) {
      // Report to Failbot
      await logException(error, req)

      // We MUST delegate to the default Express error handler
      return next(error)
    }

    // if the error is thrown before req.context is created (say, in the Page class),
    // set req.context.site here so we can pass data/ui.yml text to the 500 layout
    if (!req.context) {
      const site = await loadSiteData()
      req.context = { site: site[req.language || 'en'].site }
    }
    // display error on the page in development and staging, but not in production
    if (req.context && process.env.HEROKU_PRODUCTION_APP !== 'true') {
      req.context.error = error
    }

    // Special handling for when a middleware calls `next(404)`
    if (error === 404) {
      return nextApp.render404(req, res)
    }

    // If the error contains a status code, just send that back. This is usually
    // from a middleware like `express.json()` or `csrf`.
    if (error.statusCode || error.status) {
      return res.sendStatus(error.statusCode || error.status)
    }

    if (process.env.NODE_ENV !== 'test') {
      console.error('500 error!', req.path)
      console.error(error)
    }

    res.statusCode = 500
    nextApp.renderError(error, req, res, req.path)

    // Report to Failbot AFTER responding to the user
    await logException(error, req)
  } catch (error) {
    console.error('An error occurred in the error handling middleware!', error)
    return next(error)
  }
}
