import cheerio from 'cheerio'
import supertest from 'supertest'
import createApp from '../../lib/app.js'
// This file makes an object with utility functions for re-use in
// multiple test files

const app = createApp()

const helpers = {}

const request = (method, route) => supertest(app)[method](route)

export const get = (helpers.get = async function (
  route,
  opts = { followRedirects: false, followAllRedirects: false, headers: {} }
) {
  let res = opts.headers
    ? await request('get', route).set(opts.headers)
    : await request('get', route)
  // follow all redirects, or just follow one
  if (opts.followAllRedirects && [301, 302].includes(res.status)) {
    res = await helpers.get(res.headers.location, opts)
  } else if (opts.followRedirects && [301, 302].includes(res.status)) {
    res = await helpers.get(res.headers.location)
  }

  return res
})

export const head = (helpers.head = async function (route, opts = { followRedirects: false }) {
  const res = await request('head', route).redirects(opts.followRedirects ? 10 : 0)
  return res
})

export const post = (helpers.post = (route) => request('post', route))

export const getDOM = (helpers.getDOM = async function (route, headers, allow500s = false) {
  const res = await helpers.get(route, { followRedirects: true, headers })
  if (!allow500s && res.status >= 500) {
    throw new Error(`Server error (${res.status}) on ${route}`)
  }
  const $ = cheerio.load(res.text || '', { xmlMode: true })
  $.res = Object.assign({}, res)
  return $
})

// For use with the ?json query param
// e.g. await getJSON('/en?json=breadcrumbs')
export const getJSON = (helpers.getJSON = async function (route) {
  const res = await helpers.get(route, { followRedirects: true })
  if (res.status >= 500) {
    throw new Error(`Server error (${res.status}) on ${route}`)
  }
  return JSON.parse(res.text)
})
