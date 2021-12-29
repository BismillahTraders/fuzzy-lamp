import { getDOM } from '../helpers/supertest.js'
import { oldestSupported } from '../../lib/enterprise-server-releases.js'
import { jest } from '@jest/globals'

describe('header', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('includes localized meta tags', async () => {
    const $ = await getDOM('/en')
    expect($('link[rel="alternate"]').length).toBeGreaterThan(2)
  })

  test("includes a link to the homepage (in the current page's language)", async () => {
    let $ = await getDOM('/en')
    expect($('#github-logo a[href="/en"]').length).toBe(2)

    $ = await getDOM('/ja')
    expect($('#github-logo a[href="/ja"]').length).toBe(2)
    expect($('#github-logo a[href="/en"]').length).toBe(0)
  })

  describe('language links', () => {
    test('lead to the same page in a different language', async () => {
      const $ = await getDOM(
        '/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule'
      )
      expect(
        $(
          '[data-testid=desktop-header] [data-testid=language-picker] a[href="/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"]'
        ).length
      ).toBe(1)
    })

    test('display the native name and the English name for each translated language', async () => {
      const $ = await getDOM('/en')

      expect(
        $('[data-testid=desktop-header] [data-testid=language-picker] a[href="/en"]').text().trim()
      ).toBe('English')
      expect(
        $('[data-testid=desktop-header] [data-testid=language-picker] a[href="/cn"]').text().trim()
      ).toBe('简体中文 (Simplified Chinese)')
      expect(
        $('[data-testid=desktop-header] [data-testid=language-picker] a[href="/ja"]').text().trim()
      ).toBe('日本語 (Japanese)')
    })

    test('emphasize the current language', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=desktop-header] [data-testid=language-picker] summary').text()).toBe(
        'English'
      )
    })
  })

  describe('notices', () => {
    // Docs engineering issue: 1055
    test.skip('displays a "localization in progress" notice for WIP languages', async () => {
      const $ = await getDOM('/de')
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href="/en"]').length).toBe(1)
    })

    test('displays "complete" notice for non-WIP non-English languages', async () => {
      const $ = await getDOM('/ja')
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href="/en"]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="github.com/contact"]').length).toBe(1)
    })

    // Docs Engineering issue: 966
    test.skip('does not display any notices for English', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=header-notification]').length).toBe(0)
    })

    test('displays translation disclaimer notice on localized site-policy pages', async () => {
      const $ = await getDOM('/ja/github/site-policy/github-logo-policy')
      expect(
        $(
          '[data-testid=header-notification][data-type=TRANSLATION] a[href="https://github.com/github/site-policy/issues"]'
        ).length
      ).toBe(1)
    })

    test("renders a link to the same page in user's preferred language, if available", async () => {
      const headers = { 'accept-language': 'ja' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the same page if user's preferred language is Chinese - PRC", async () => {
      const headers = { 'accept-language': 'zh-CN' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="/cn"]').length).toBe(1)
    })

    test("does not render a link when user's preferred language is Chinese - Taiwan", async () => {
      const headers = { 'accept-language': 'zh-TW' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification]').length).toBe(0)
    })

    test("does not render a link when user's preferred language is English", async () => {
      const headers = { 'accept-language': 'en' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification]').length).toBe(0)
    })

    test("renders a link to the same page in user's preferred language from multiple, if available", async () => {
      const headers = { 'accept-language': 'ja, *;q=0.9' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the same page in user's preferred language with weights, if available", async () => {
      const headers = { 'accept-language': 'ja;q=1.0, *;q=0.9' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the user's 2nd preferred language if 1st is not available", async () => {
      const headers = { 'accept-language': 'zh-TW,zh;q=0.9,ja *;q=0.8' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="/ja"]').length).toBe(1)
    })

    test('renders no notices if no language preference is available', async () => {
      const headers = { 'accept-language': 'zh-TW,zh;q=0.9,zh-SG *;q=0.8' }
      const $ = await getDOM('/en', headers)
      expect($('[data-testid=header-notification]').length).toBe(0)
    })
  })

  describe('mobile-only product dropdown links', () => {
    test('include github and admin, and emphasize the current product', async () => {
      const $ = await getDOM(
        '/en/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer'
      )
      const github = $('[data-testid=product-picker][data-current-product-path="/github"] summary')
      expect(github.length).toBe(1)
      expect(github.text().trim()).toBe('GitHub')

      const ghec = $(`[data-testid=product-picker] a[href="/en/enterprise-cloud@latest/admin"]`)
      expect(ghec.length).toBe(1)
      expect(ghec.text().trim()).toBe('Enterprise administrators')
    })

    // Skipped. Docs Engineering issue: 923
    test.skip("point to homepages in the current page's language", async () => {
      const $ = await getDOM(
        '/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests'
      )
      expect(
        $('[data-testid=product-picker][data-current-product-path="/repositories"]').length
      ).toBe(1)
      expect($(`[data-testid=product-picker] a[href="/ja/enterprise-cloud/admin"]`).length).toBe(1)
    })

    test('emphasizes the product that corresponds to the current page', async () => {
      const $ = await getDOM(
        `/en/enterprise-server@${oldestSupported}/github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line`
      )

      expect($('[data-testid=product-picker] summary').text()).toBe('GitHub')
    })
  })
})
