import fs from 'fs/promises'
import path from 'path'

import nock from 'nock'

import { getChangelogItems } from '../../lib/changelog.js'

describe('getChangelogItems module', () => {
  let changelog

  beforeAll(async () => {
    const rssFeedContent = await fs.readFile(
      path.join(process.cwd(), 'tests/fixtures/rss-feed.xml'),
      'utf8'
    )

    nock('https://github.blog').get('/changelog/label/packages/feed').reply(200, rssFeedContent)

    changelog = await getChangelogItems(
      'GitHub Actions:',
      'https://github.blog/changelog/label/packages'
    )
  })

  afterAll(() => nock.cleanAll())

  it('changelog contains 3 items', async () => {
    expect(changelog.length).toEqual(3)
  })

  it('each changelog item has expected title, date, and href', async () => {
    const expectedChangelogValues = [
      {
        title: 'Authentication token format updates are generally available',
        date: '2021-03-31T22:22:03.000Z',
        href: 'https://github.blog/changelog/2021-03-31-authentication-token-format-updates-are-generally-available',
      },
      {
        title: 'Compare REST API now supports pagination',
        date: '2021-03-23T02:49:54.000Z',
        href: 'https://github.blog/changelog/2021-03-22-compare-rest-api-now-supports-pagination',
      },
      {
        title: 'GitHub Discussions GraphQL API public beta',
        date: '2021-02-23T18:21:40.000Z',
        href: 'https://github.blog/changelog/2021-02-23-github-discussions-graphql-api-public-beta',
      },
    ]

    for (let i = 0; i < 3; i++) {
      const changeLogEntry = changelog[i]
      const expectedEntry = expectedChangelogValues[i]
      expect(changeLogEntry.title).toBe(expectedEntry.title)
      expect(changeLogEntry.date).toBe(expectedEntry.date)
      expect(changeLogEntry.href).toBe(expectedEntry.href)
    }
  })
})
