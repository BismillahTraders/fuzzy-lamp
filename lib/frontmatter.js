import fs from 'fs'
import path from 'path'
import parse from './read-frontmatter.js'
import semver from 'semver'
import { allVersions } from './all-versions.js'

const layoutNames = [
  'default',
  'dev-toc',
  'graphql-explorer',
  'product-landing',
  'product-guides',
  'release-notes',
  false,
]
const semverValidRange = semver.validRange
const semverRange = {
  type: 'string',
  conform: semverValidRange,
  message: 'Must be a valid SemVer range',
}
const versionObjs = Object.values(allVersions)
const guideTypes = ['overview', 'quick_start', 'tutorial', 'how_to', 'reference']
const featureVersions = fs
  .readdirSync(path.posix.join(process.cwd(), 'data/features'))
  .map((file) => path.basename(file, '.yml'))

export const schema = {
  properties: {
    title: {
      type: 'string',
      required: true,
      translatable: true,
    },
    shortTitle: {
      type: 'string',
      translatable: true,
    },
    intro: {
      type: 'string',
      translatable: true,
    },
    product: {
      type: 'string',
      translatable: true,
    },
    permissions: {
      type: 'string',
    },
    // true by default on articles, false on all other content
    showMiniToc: {
      type: 'boolean',
    },
    miniTocMaxHeadingLevel: {
      type: 'number',
      default: 2,
      minimum: 2,
      maximum: 4,
    },
    mapTopic: {
      type: 'boolean',
    },
    // allow hidden articles under `early-access`
    hidden: {
      type: 'boolean',
    },
    layout: {
      type: ['string', 'boolean'],
      enum: layoutNames,
      message: 'must be the filename of an existing layout file, or `false` for no layout',
    },
    redirect_from: {
      type: ['array', 'string'],
    },
    allowTitleToDifferFromFilename: {
      type: 'boolean',
    },
    introLinks: {
      type: 'object',
      properties: {
        quickstart: { type: 'string' },
        reference: { type: 'string' },
        overview: { type: 'string' },
      },
    },
    authors: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    examples_source: {
      type: 'string',
    },
    effectiveDate: {
      type: 'string',
    },
    featuredLinks: {
      type: 'object',
      properties: {
        gettingStarted: {
          type: 'array',
          items: { type: 'string' },
        },
        guides: {
          type: 'array',
          items: { type: 'string' },
        },
        guideCards: {
          type: 'array',
          items: { type: 'string' },
        },
        popular: {
          type: 'array',
          items: { type: 'string' },
        },
        // allows you to use an alternate heading for the popular column
        popularHeading: {
          type: 'string',
        },
        videos: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: 'string',
              href: 'string',
            },
          },
        },
        // allows you to use an alternate heading for the videos column
        videosHeading: {
          type: 'string',
        },
      },
    },
    // Shown in `product-landing.html` "What's new" section
    changelog: {
      type: 'object',
      properties: {
        label: { type: 'string' },
        prefix: { type: 'string' },
      },
    },
    type: {
      type: 'string',
      enum: guideTypes,
    },
    topics: {
      type: 'array',
    },
    includeGuides: {
      type: 'array',
    },
    learningTracks: {
      type: 'array',
    },
    // Used in `product-landing.html`
    beta_product: {
      type: 'boolean',
    },
    // Show in `product-landing.html`
    product_video: {
      type: 'string',
    },
    interactive: {
      type: 'boolean',
    },
    communityRedirect: {
      type: 'object',
      properties: {
        name: 'string',
        href: 'string',
      },
    },
    // Platform-specific content preference
    defaultPlatform: {
      type: 'string',
      enum: ['mac', 'windows', 'linux'],
    },
    // Tool-specific content preference
    defaultTool: {
      type: 'string',
      enum: ['webui', 'cli', 'desktop', 'curl', 'codespaces', 'vscode'],
    },
    // Documentation contributed by a third party, such as a GitHub Partner
    contributor: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        URL: { type: 'string' },
      },
    },
    // Child groups specified on top-level TOC
    childGroups: {
      type: 'array',
    },
    // Child links specified on any TOC page
    children: {
      type: 'array',
    },
    // External products specified on the homepage
    externalProducts: {
      type: 'object',
      properties: {
        atom: {
          type: 'object',
          required: true,
          properties: {
            id: { type: 'string', required: true },
            name: { type: 'string', required: true },
            href: { type: 'string', format: 'url', required: true },
            external: { type: 'boolean', required: true },
          },
        },
        electron: {
          type: 'object',
          required: true,
          properties: {
            id: { type: 'string', required: true },
            name: { type: 'string', required: true },
            href: { type: 'string', format: 'url', required: true },
            external: { type: 'boolean', required: true },
          },
        },
      },
    },
    // whether or not the page is mirrored by an experimental page
    hasExperimentalAlternative: {
      type: 'boolean',
    },
  },
}

const featureVersionsProp = {
  feature: {
    type: ['string', 'array'],
    enum: featureVersions,
    items: {
      type: 'string',
    },
    message:
      'must be the name (or names) of a feature that matches "filename" in data/features/_filename_.yml',
  },
}

schema.properties.versions = {
  type: ['object', 'string'], // allow a '*' string to indicate all versions
  required: true,
  properties: versionObjs.reduce((acc, versionObj) => {
    acc[versionObj.plan] = semverRange
    acc[versionObj.shortName] = semverRange
    return acc
  }, featureVersionsProp),
}

// Support 'github-ae': next
schema.properties.versions.properties['github-ae'] = 'next'
schema.properties.versions.properties.ghae = 'next'

function frontmatter(markdown, opts = {}) {
  const defaults = {
    schema,
    validateKeyNames: true,
    validateKeyOrder: false, // TODO: enable this once we've sorted all the keys. See issue 9658
  }

  return parse(markdown, Object.assign({}, defaults, opts))
}

// attach the schema object so it can be `require`d elsewhere.
frontmatter.schema = schema

export default frontmatter
