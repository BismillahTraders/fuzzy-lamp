import languages from '../lib/languages.js'
import enterpriseServerReleases from '../lib/enterprise-server-releases.js'
import { allVersions } from '../lib/all-versions.js'
import { productMap, productGroups } from '../lib/all-products.js'
import pathUtils from '../lib/path-utils.js'
import productNames from '../lib/product-names.js'
import warmServer from '../lib/warm-server.js'
import readJsonFile from '../lib/read-json-file.js'
import searchVersions from '../lib/search/versions.js'
import nonEnterpriseDefaultVersion from '../lib/non-enterprise-default-version.js'
const activeProducts = Object.values(productMap).filter(
  (product) => !product.wip && !product.hidden
)
const {
  getVersionStringFromPath,
  getProductStringFromPath,
  getCategoryStringFromPath,
  getPathWithoutLanguage,
} = pathUtils
const featureFlags = Object.keys(readJsonFile('./feature-flags.json'))

// This doesn't change just because the request changes, so compute it once.
const enterpriseServerVersions = Object.keys(allVersions).filter((version) =>
  version.startsWith('enterprise-server@')
)

const featureFlagsObject = Object.fromEntries(
  featureFlags.map((featureFlagName) => [featureFlagName, process.env[featureFlagName]])
)

// Supply all route handlers with a baseline `req.context` object
// Note that additional middleware in middleware/index.js adds to this context object
export default async function contextualize(req, res, next) {
  // Ensure that we load some data only once on first request
  const { site, redirects, siteTree, pages: pageMap } = await warmServer()

  req.context = Object.assign({}, featureFlagsObject)

  // make feature flag environment variables accessible in layouts
  req.context.process = { env: {} }

  // define each context property explicitly for code-search friendliness
  // e.g. searches for "req.context.page" will include results from this file
  req.context.currentLanguage = req.language
  req.context.userLanguage = req.userLanguage
  req.context.currentVersion = getVersionStringFromPath(req.pagePath)
  req.context.currentProduct = getProductStringFromPath(req.pagePath)
  req.context.currentCategory = getCategoryStringFromPath(req.pagePath)
  req.context.productMap = productMap
  req.context.productGroups = productGroups
  req.context.activeProducts = activeProducts
  req.context.allVersions = allVersions
  req.context.currentPathWithoutLanguage = getPathWithoutLanguage(req.pagePath)
  req.context.currentPath = req.pagePath
  req.context.query = req.query
  req.context.languages = languages
  req.context.productNames = productNames
  req.context.enterpriseServerReleases = enterpriseServerReleases
  req.context.enterpriseServerVersions = enterpriseServerVersions
  req.context.redirects = redirects
  req.context.site = site[req.language].site
  req.context.siteTree = siteTree
  req.context.pages = pageMap

  if (process.env.AIRGAP || req.cookies.AIRGAP) req.context.AIRGAP = true
  req.context.searchVersions = searchVersions
  req.context.nonEnterpriseDefaultVersion = nonEnterpriseDefaultVersion

  return next()
}
