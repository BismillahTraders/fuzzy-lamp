import assert from 'assert'
import path from 'path'
import cheerio from 'cheerio'
import patterns from './patterns.js'
import getApplicableVersions from './get-applicable-versions.js'
import generateRedirectsForPermalinks from './redirects/permalinks.js'
import getEnglishHeadings from './get-english-headings.js'
import getTocItems from './get-toc-items.js'
import pathUtils from './path-utils.js'
import Permalink from './permalink.js'
import languages from './languages.js'
import renderContent from './render-content/index.js'
import processLearningTracks from './process-learning-tracks.js'
import { productMap } from './all-products.js'
import slash from 'slash'
import readFileContents from './read-file-contents.js'
import getLinkData from './get-link-data.js'
import getDocumentType from './get-document-type.js'
import { union } from 'lodash-es'

class Page {
  static async init(opts) {
    opts = await Page.read(opts)
    if (!opts) return
    return new Page(opts)
  }

  static async read(opts) {
    assert(opts.languageCode, 'languageCode is required')
    assert(opts.relativePath, 'relativePath is required')
    assert(opts.basePath, 'basePath is required')

    const relativePath = slash(opts.relativePath)
    const fullPath = slash(path.join(opts.basePath, relativePath))

    // Per https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
    // its better to read and handle errors than to check access/stats first
    try {
      const { data, content, errors: frontmatterErrors } = await readFileContents(fullPath)

      return {
        ...opts,
        relativePath,
        fullPath,
        ...data,
        markdown: content,
        frontmatterErrors,
      }
    } catch (err) {
      if (err.code === 'ENOENT') return false
      console.error(err)
    }
  }

  constructor(opts) {
    Object.assign(this, { ...opts })

    if (this.frontmatterErrors.length) {
      throw new Error(JSON.stringify(this.frontmatterErrors, null, 2))
    }

    // Store raw data so we can cache parsed versions
    this.rawIntro = this.intro
    this.rawTitle = this.title
    this.rawShortTitle = this.shortTitle
    this.rawProduct = this.product
    this.rawPermissions = this.permissions
    this.rawLearningTracks = this.learningTracks
    this.rawIncludeGuides = this.includeGuides
    this.raw_product_video = this.product_video

    if (this.introLinks) {
      this.introLinks.rawQuickstart = this.introLinks.quickstart
      this.introLinks.rawReference = this.introLinks.reference
      this.introLinks.rawOverview = this.introLinks.overview
    }

    // Is this the Homepage or a Product, Category, Topic, or Article?
    this.documentType = getDocumentType(this.relativePath)

    // Get array of versions that the page is available in for fast lookup
    this.applicableVersions = getApplicableVersions(this.versions, this.fullPath)

    // a page should only be available in versions that its parent product is available in
    const versionsParentProductIsNotAvailableIn = this.applicableVersions
      // only the homepage will not have this.parentProduct
      .filter(
        (availableVersion) =>
          this.parentProduct && !this.parentProduct.versions.includes(availableVersion)
      )

    if (versionsParentProductIsNotAvailableIn.length) {
      throw new Error(
        `\`versions\` frontmatter in ${this.fullPath} contains ${versionsParentProductIsNotAvailableIn}, which ${this.parentProduct.id} product is not available in!`
      )
    }

    // derive array of Permalink objects
    this.permalinks = Permalink.derive(
      this.languageCode,
      this.relativePath,
      this.title,
      this.applicableVersions
    )

    if (this.relativePath.endsWith('index.md')) {
      // get an array of linked items in product and category TOCs
      this.tocItems = getTocItems(this)
    }

    // if this is an article and it doesn't have showMiniToc = false, set mini TOC to true
    if (!this.relativePath.endsWith('index.md')) {
      this.showMiniToc = this.showMiniToc === false ? this.showMiniToc : true
    }

    this.render = this._render.bind(this)

    return this
  }

  buildRedirects() {
    // create backwards-compatible old paths for page permalinks and frontmatter redirects
    this.redirects = generateRedirectsForPermalinks(
      this.permalinks,
      this.redirect_from,
      this.applicableVersions
    )

    return this.redirects
  }

  // Infer the parent product ID from the page's relative file path
  get parentProductId() {
    // Each page's top-level content directory matches its product ID
    const id = this.relativePath.split('/')[0]

    // ignore top-level content/index.md
    if (id === 'index.md') return null

    // make sure the ID is valid
    if (process.env.NODE_ENV !== 'test') {
      assert(
        Object.keys(productMap).includes(id),
        `page ${this.fullPath} has an invalid product ID: ${id}`
      )
    }

    return id
  }

  get parentProduct() {
    return productMap[this.parentProductId]
  }

  async renderTitle(context, opts = { preferShort: true }) {
    return opts.preferShort && this.shortTitle
      ? this.renderProp('shortTitle', context, opts)
      : this.renderProp('title', context, opts)
  }

  async _render(context) {
    // use English IDs/anchors for translated headings, so links don't break (see #8572)
    if (this.languageCode !== 'en') {
      const englishHeadings = getEnglishHeadings(this, context)
      context.englishHeadings = englishHeadings
    }

    this.intro = await renderContent(this.rawIntro, context)
    this.introPlainText = await renderContent(this.rawIntro, context, { textOnly: true })
    this.title = await renderContent(this.rawTitle, context, {
      textOnly: true,
      encodeEntities: true,
    })
    this.titlePlainText = await renderContent(this.rawTitle, context, { textOnly: true })
    this.shortTitle = await renderContent(this.shortTitle, context, {
      textOnly: true,
      encodeEntities: true,
    })
    this.product_video = await renderContent(this.raw_product_video, context, { textOnly: true })

    if (this.introLinks) {
      this.introLinks.quickstart = await renderContent(this.introLinks.rawQuickstart, context, {
        textOnly: true,
      })
      this.introLinks.reference = await renderContent(this.introLinks.rawReference, context, {
        textOnly: true,
      })
      this.introLinks.overview = await renderContent(this.introLinks.rawOverview, context, {
        textOnly: true,
      })
    }

    context.relativePath = this.relativePath
    const html = await renderContent(this.markdown, context)

    // Adding communityRedirect for Discussions, Sponsors, and Codespaces - request from Product
    if (
      this.parentProduct &&
      (this.parentProduct.id === 'discussions' ||
        this.parentProduct.id === 'sponsors' ||
        this.parentProduct.id === 'codespaces')
    ) {
      this.communityRedirect = {
        name: 'Provide GitHub Feedback',
        href: `https://github.com/github/feedback/discussions/categories/${this.parentProduct.id}-feedback`,
      }
    }

    // product frontmatter may contain liquid
    if (this.product) {
      this.product = await renderContent(this.rawProduct, context)
    }

    // permissions frontmatter may contain liquid
    if (this.permissions) {
      this.permissions = await renderContent(this.rawPermissions, context)
    }

    // Learning tracks may contain Liquid and need to have versioning processed.
    if (this.learningTracks) {
      const { featuredTrack, learningTracks } = await processLearningTracks(
        this.rawLearningTracks,
        context
      )
      this.featuredTrack = featuredTrack
      this.learningTracks = learningTracks
    }

    if (this.rawIncludeGuides) {
      this.allTopics = []
      this.includeGuides = await getLinkData(this.rawIncludeGuides, context)
      this.includeGuides.map((guide) => {
        const { page } = guide
        guide.type = page.type
        if (page.topics) {
          this.allTopics = union(this.allTopics, page.topics).sort((a, b) =>
            a.localeCompare(b, page.languageCode)
          )
          guide.topics = page.topics
        }
        delete guide.page
        return guide
      })
    }

    // set a flag so layout knows whether to render a mac/windows/linux switcher element
    this.detectedPlatforms = ['mac', 'windows', 'linux'].filter(
      (platform) =>
        html.includes(`extended-markdown ${platform}`) || html.includes(`platform-${platform}`)
    )
    this.includesPlatformSpecificContent = this.detectedPlatforms.length > 0

    // set flags for webui, cli, etc switcher element
    this.detectedTools = ['cli', 'desktop', 'webui', 'curl', 'codespaces', 'vscode'].filter(
      (tool) => html.includes(`extended-markdown ${tool}`) || html.includes(`tool-${tool}`)
    )
    this.includesToolSpecificContent = this.detectedTools.length > 0

    return html
  }

  // Allow other modules (like custom liquid tags) to make one-off requests
  // for a page's rendered properties like `title` and `intro`
  async renderProp(propName, context, opts = { unwrap: false }) {
    let prop
    if (propName === 'title') {
      prop = this.rawTitle
    } else if (propName === 'shortTitle') {
      prop = this.rawShortTitle || this.rawTitle // fall back to title
    } else if (propName === 'intro') {
      prop = this.rawIntro
    } else {
      prop = this[propName]
    }

    const html = await renderContent(prop, context, opts)

    if (!opts.unwrap) return html

    // The unwrap option removes surrounding tags from a string, preserving any inner HTML
    const $ = cheerio.load(html, { xmlMode: true })
    return $.root().contents().html()
  }

  // infer current page's corresponding homepage
  // /en/articles/foo                          -> /en
  // /en/enterprise/2.14/user/articles/foo     -> /en/enterprise/2.14/user
  static getHomepage(requestPath) {
    return requestPath.replace(/\/articles.*/, '')
  }

  // given a page path, return an array of objects containing hrefs
  // for that page in all languages
  static getLanguageVariants(href) {
    const suffix = pathUtils.getPathWithoutLanguage(href)
    return Object.values(languages).map(({ name, code, hreflang }) => {
      // eslint-disable-line
      return {
        name,
        code,
        hreflang,
        href: `/${code}${suffix}`.replace(patterns.trailingSlash, '$1'),
      }
    })
  }
}

export default Page
