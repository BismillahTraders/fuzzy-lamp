import path from 'path'
import { jest, beforeAll } from '@jest/globals'

import { loadPages } from '../../lib/page-data.js'
import Permalink from '../../lib/permalink.js'

describe('redirect orphans', () => {
  let pageList

  // Because calling `loadPages` will trigger a warmup, this can potentially
  // be very slow in CI. So we need a timeout.
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // Only doing English because they're the only files we do PRs for.
    pageList = (await loadPages()).filter((page) => page.languageCode === 'en')
  })

  test('no page is a redirect in another file', () => {
    const redirectFroms = new Map()
    for (const page of pageList) {
      for (const redirectFrom of page.redirect_from || []) {
        if (redirectFrom.endsWith('/') && redirectFrom.startsWith('/')) {
          console.warn(
            `In ${path.join(
              'content',
              page.relativePath
            )} redirect entry (${redirectFrom}) has a trailing slash`
          )
        }
        redirectFroms.set(redirectFrom, page.relativePath)
      }
    }

    const errors = []
    for (const page of pageList) {
      const asPath = Permalink.relativePathToSuffix(page.relativePath)
      if (redirectFroms.has(asPath)) {
        errors.push(
          `${asPath} is a redirect_from in ${path.join('content', redirectFroms.get(asPath))}`
        )
      }
    }
    expect(errors.length, errors.join('\n')).toBe(0)
  })
})
