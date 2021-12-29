import createApp from '../../lib/app.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import { get, getDOM } from '../helpers/supertest.js'
import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import supertest from 'supertest'
import { jest } from '@jest/globals'

jest.useFakeTimers('legacy')

const app = createApp()

describe('enterprise deprecation', () => {
  jest.setTimeout(60 * 1000)

  test('redirects language-prefixed requests for deprecated enterprise content', async () => {
    const res = await get('/en/enterprise/2.12')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/enterprise/2.12')
  })

  test('redirects language-prefixed requests for deprecated version 11.10.340', async () => {
    const res = await get('/en/enterprise/11.10.340')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/enterprise/11.10.340')
  })

  test('redirects non-language-prefixed requests for deprecated enterprise content >=2.13', async () => {
    const res = await get('/enterprise/2.13')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise/2.13')
  })

  test('workaround for lost frontmatter redirects works in deprecated enterprise content >=2.13', async () => {
    const res = await get(
      '/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile-page'
    )
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe(
      '/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile'
    )
  })

  test('can access redirects from redirects.json in deprecated enterprise content >2.17', async () => {
    const res = await get('/enterprise/2.19/admin/categories/time')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-server@2.19/admin/configuration/configuring-time-synchronization'
    )
  })

  test('handles requests for deprecated Enterprise pages ( >=2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.13')).toBe(true)
    const $ = await getDOM('/en/enterprise/2.13/user/articles/about-branches')
    expect($.res.statusCode).toBe(200)
    expect($('h1').text()).toBe('About branches')
  })

  test('sets the expected headers for deprecated Enterprise pages', async () => {
    const res = await get('/en/enterprise/2.13/user/articles/about-branches')
    expect(res.statusCode).toBe(200)
    expect(res.get('x-robots-tag')).toBe('noindex')
    expect(res.get('surrogate-key')).toBe(SURROGATE_ENUMS.MANUAL)
    expect(res.get('set-cookie')).toBeUndefined()
  })

  test('handles requests for deprecated Enterprise pages ( <2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.12')).toBe(true)
    const $ = await getDOM('/enterprise/2.12/user/articles/about-branches')
    expect($.res.statusCode).toBe(200)
    expect($('h2').text()).toBe('About branches')
  })

  test('handles requests for deprecated Enterprise version 11.10.340', async () => {
    expect(enterpriseServerReleases.deprecated.includes('11.10.340')).toBe(true)
    const $ = await getDOM('/enterprise/11.10.340/admin/articles/adding-teams')
    expect($.res.statusCode).toBe(200)
    expect($('h2').text()).toBe('Adding teams')
  })

  test('has working admin guide links ( <2.13 )', async () => {
    const guidesPath = '/enterprise/2.12/admin'
    let $ = await getDOM(`${guidesPath}/guides`)
    const firstLink = $('[class="guide-section"]').children('a').attr('href')

    $ = await getDOM(`${guidesPath}/${firstLink}`)
    expect($.res.statusCode).toBe(200)
    // this test assumes the Installation guide is the first link on the guides page
    expect($('h2').text()).toBe('Installing and configuring GitHub Enterprise')
  })
})

describe('deprecation banner', () => {
  test('renders a deprecation warning banner on oldest supported Enterprise version', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(1)
  })

  test('does not render a deprecation warning banner on other Enterprise versions', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(0)
  })

  test('deprecation warning banner includes a date', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner] b').text().endsWith('discontinued on .')).toBe(false)
  })

  test('deprecation warning banner includes the right text depending on the date', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    const expectedString = enterpriseServerReleases.isOldestReleaseDeprecated
      ? 'was discontinued'
      : 'will be discontinued'
    expect($('[data-testid=deprecation-banner] b').text().includes(expectedString)).toBe(true)
  })
})

describe('does not render survey prompt or contribution button', () => {
  test('does not render survey prompt', async () => {
    let $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`)
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($('[data-testid="survey-form"]').length).toBe(0)
    } else {
      expect($('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    }
  })

  test('does not render contribution button', async () => {
    let $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($('.contribution').length).toBeGreaterThan(0)
    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`)
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($('.contribution').length).toBe(0)
    } else {
      expect($('[data-testid=survey-form]').length).toBeGreaterThan(0)
    }
  })
})

describe('JS and CSS assets', () => {
  it('returns the expected CSS file > 2.18', async () => {
    const result = await supertest(app)
      .get('/enterprise/2.18/dist/index.css')
      .set('Referrer', '/en/enterprise/2.18')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('text/css; charset=utf-8')
  })

  it('returns the expected CSS file', async () => {
    const result = await supertest(app)
      .get('/stylesheets/index.css')
      .set('Referrer', '/en/enterprise/2.13')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('text/css; charset=utf-8')
  })

  it('returns the expected JS file > 2.18', async () => {
    const result = await supertest(app)
      .get('/enterprise/2.18/dist/index.js')
      .set('Referrer', '/en/enterprise/2.18')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('application/javascript; charset=utf-8')
  })

  it('returns the expected JS file', async () => {
    const result = await supertest(app)
      .get('/javascripts/index.js')
      .set('Referrer', '/en/enterprise/2.13')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('application/javascript; charset=utf-8')
  })

  it('returns the expected image', async () => {
    const result = await supertest(app)
      .get('/assets/images/octicons/hamburger.svg')
      .set('Referrer', '/en/enterprise/2.17')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('image/svg+xml; charset=utf-8')
  })

  it('returns the expected node_modules', async () => {
    const result = await supertest(app)
      .get('/node_modules/instantsearch.js/dist/instantsearch.production.min.js')
      .set('Referrer', '/en/enterprise/2.17')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('application/javascript; charset=utf-8')
  })

  it('returns the expected favicon', async () => {
    const result = await supertest(app)
      .get('/assets/images/site/favicon.svg')
      .set('Referrer', '/en/enterprise/2.18')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('image/svg+xml; charset=utf-8')
  })

  it('returns the expected CSS file ( <2.13 )', async () => {
    const result = await supertest(app)
      .get('/assets/stylesheets/application.css')
      .set('Referrer', '/en/enterprise/2.12')

    expect(result.statusCode).toBe(200)
    expect(result.get('x-is-archived')).toBe('true')
    expect(result.get('Content-Type')).toBe('text/css; charset=utf-8')
  })

  it('ignores invalid paths', async () => {
    const result = await supertest(app)
      .get('/pizza/index.css')
      .set('Referrer', '/en/enterprise/2.13')

    expect(result.statusCode).toBe(404)
    expect(result.get('x-is-archived')).toBeUndefined()
  })
})
