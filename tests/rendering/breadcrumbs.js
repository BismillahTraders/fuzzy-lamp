import { getDOM, getJSON } from '../helpers/supertest.js'
import { jest } from '@jest/globals'

const describeInternalOnly =
  process.env.GITHUB_REPOSITORY === 'github/docs-internal' ? describe : describe.skip
// Breadcrumbs were moved to the Header and in the Menu for mobile, so there are now double the Breadcrumbs
describe('breadcrumbs', () => {
  jest.setTimeout(300 * 1000)

  describe('rendering', () => {
    test('top-level product pages have breadcrumbs', async () => {
      const $ = await getDOM('/github')
      expect($('[data-testid=breadcrumbs]')).toHaveLength(2)
    })

    test('article pages have breadcrumbs with product, category, maptopic, and article', async () => {
      const $ = await getDOM(
        '/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account'
      )
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')

      expect($breadcrumbs).toHaveLength(8)
      expect($breadcrumbs[0].attribs.title).toBe('Account and profile')
      expect($breadcrumbs[1].attribs.title).toBe('User accounts')
      expect($breadcrumbs[2].attribs.title).toBe('Manage email preferences')
      expect($breadcrumbs[3].attribs.title).toBe('Add an email address')
    })

    test('maptopic pages include their own grayed-out breadcrumb', async () => {
      const $ = await getDOM(
        '/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences'
      )
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')

      expect($breadcrumbs).toHaveLength(6)
      expect($breadcrumbs[0].attribs.title).toBe('Account and profile')
      expect($breadcrumbs[1].attribs.title).toBe('User accounts')
      expect($breadcrumbs[2].attribs.title).toBe('Manage email preferences')
      expect($breadcrumbs[2].attribs.class.includes('color-fg-muted')).toBe(true)
    })

    test('works for enterprise user pages', async () => {
      const $ = await getDOM(
        '/en/enterprise-server/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account'
      )
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs).toHaveLength(8)
      expect($breadcrumbs[0].attribs.title).toBe('Account and profile')
    })

    test('works for ghec billing page', async () => {
      const $ = await getDOM(
        '/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise'
      )
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs).toHaveLength(6)
      expect($breadcrumbs[0].attribs.title).toBe('Billing and payments')
    })

    test('works for pages that have overlapping product names', async () => {
      const $ = await getDOM(
        // article path has overlap with `/en/github`
        '/en/github-cli/github-cli/about-github-cli'
      )
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs).toHaveLength(6)
      expect($breadcrumbs[0].attribs.title).toBe('GitHub CLI')
      expect($breadcrumbs[1].attribs.title).toBe('GitHub CLI')
      expect($breadcrumbs[2].attribs.title).toBe('About GitHub CLI')
    })

    test('parses Liquid variables inside titles', async () => {
      const $ = await getDOM('/en/enterprise/admin/enterprise-support')
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs).toHaveLength(4)
      expect($breadcrumbs[1].attribs.title).toBe('Working with support')
    })

    test('English breadcrumbs link to English pages', async () => {
      const $ = await getDOM('/en/github/importing-your-projects-to-github')
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs[0].attribs.href).toBe('/en/github')
    })

    test('localized breadcrumbs link to localize pages', async () => {
      const $ = await getDOM('/ja/github/importing-your-projects-to-github')
      const $breadcrumbs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbs[0].attribs.href).toBe('/ja/github')
    })
  })

  describeInternalOnly('early access rendering', () => {
    test('top-level product pages have breadcrumbs', async () => {
      const $ = await getDOM('/early-access/github/articles/using-gist-playground')
      expect($('[data-testid=breadcrumbs]')).toHaveLength(2)
    })

    test('early access article pages have breadcrumbs with product, category, and article', async () => {
      const $ = await getDOM(
        '/early-access/github/enforcing-best-practices-with-github-policies/about-github-policies'
      )
      const $breadcrumbTitles = $('[data-testid=breadcrumbs] [data-testid=breadcrumb-title]')
      const $breadcrumbLinks = $('[data-testid=breadcrumbs] a')

      expect($breadcrumbTitles).toHaveLength(4)
      expect($breadcrumbLinks).toHaveLength(4)
      expect($breadcrumbTitles[0].children[0].data).toBe('Early Access documentation')
      expect($breadcrumbTitles[1].children[0].data).toBe('GitHub')
      expect($breadcrumbLinks[0].attribs.title).toBe(
        'Enforcing best practices with GitHub Policies'
      )
      expect($breadcrumbLinks[1].attribs.title).toBe('About GitHub Policies')
      expect($breadcrumbLinks[1].attribs.class.includes('color-fg-muted')).toBe(true)
    })
  })

  describe('breadcrumbs object', () => {
    test('works on product index pages', async () => {
      const breadcrumbs = await getJSON('/en/github?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub',
        },
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on category index pages', async () => {
      const breadcrumbs = await getJSON(
        '/en/issues/tracking-your-work-with-issues/quickstart?json=breadcrumbs'
      )
      const expected = [
        {
          documentType: 'product',
          href: '/en/issues',
          title: 'GitHub Issues',
        },
        {
          documentType: 'category',
          href: '/en/issues/tracking-your-work-with-issues',
          title: 'Issues',
        },
        {
          documentType: 'article',
          href: '/en/issues/tracking-your-work-with-issues/quickstart',
          title: 'Quickstart for GitHub Issues',
        },
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on maptopic pages', async () => {
      const breadcrumbs = await getJSON(
        '/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings?json=breadcrumbs'
      )
      const expected = [
        {
          documentType: 'product',
          href: '/en/account-and-profile',
          title: 'Account and profile',
        },
        {
          documentType: 'category',
          href: '/en/account-and-profile/setting-up-and-managing-your-github-user-account',
          title: 'User accounts',
        },
        {
          documentType: 'mapTopic',
          href: '/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings',
          title: 'User account settings',
        },
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO have maptopics ', async () => {
      const breadcrumbs = await getJSON(
        '/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard?json=breadcrumbs'
      )
      const expected = [
        {
          documentType: 'product',
          href: '/en/account-and-profile',
          title: 'Account and profile',
        },
        {
          documentType: 'category',
          href: '/en/account-and-profile/setting-up-and-managing-your-github-user-account',
          title: 'User accounts',
        },
        {
          documentType: 'mapTopic',
          href: '/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings',
          title: 'User account settings',
        },
        {
          documentType: 'article',
          href: '/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard',
          title: 'Your personal dashboard',
        },
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO NOT have maptopics ', async () => {
      const breadcrumbs = await getJSON(
        '/github/site-policy/github-privacy-statement?json=breadcrumbs'
      )
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub',
        },
        {
          documentType: 'category',
          href: '/en/github/site-policy',
          title: 'Site policy',
        },
        {
          documentType: 'article',
          href: '/en/github/site-policy/github-privacy-statement',
          title: 'GitHub Privacy Statement',
        },
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('returns an empty array on the landing page', async () => {
      const breadcrumbs = await getJSON('/en?json=breadcrumbs')
      expect(breadcrumbs).toEqual([])
    })
  })
})
