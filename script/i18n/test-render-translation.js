#!/usr/bin/env node

// [start-readme]
//
// Run this script to test-render all the translation files that have been changed (when compared to the `main` branch).
//
// [end-readme]

import renderContent from '../../lib/render-content/index.js'
import loadSiteData from '../../lib/site-data.js'
import { loadPages } from '../../lib/page-data.js'
import languages from '../../lib/languages.js'
import { promisify } from 'util'
import ChildProcess, { execSync } from 'child_process'
import fs from 'fs'
import frontmatter from '../../lib/frontmatter.js'
import chalk from 'chalk'
import { YAMLException } from 'js-yaml'

const fmSchemaProperties = frontmatter.schema.properties
const exec = promisify(ChildProcess.exec)

main()

async function main() {
  const siteData = await loadAndPatchSiteData()
  const pages = await loadPages()
  const contextByLanguage = {}
  for (const lang in languages) {
    const langObj = languages[lang]
    const [crowdinLangCode] = langObj.dir === '' ? 'en' : langObj.dir.split('/').slice(1)
    if (!crowdinLangCode) continue
    contextByLanguage[crowdinLangCode] = {
      site: siteData[langObj.code].site,
      currentLanguage: langObj.code,
      currentVersion: 'free-pro-team@latest',
    }
  }

  const changedFilesRelPaths = execSync(
    'git -c diff.renameLimit=10000 diff --name-only origin/main | egrep "^translations/.*/.+.md$"',
    { maxBuffer: 1024 * 1024 * 100 }
  )
    .toString()
    .split('\n')
    .filter((path) => path !== '' && !path.endsWith('README.md'))
    .sort()

  console.log(`Found ${changedFilesRelPaths.length} translated files.`)

  for (const relPath of changedFilesRelPaths) {
    const lang = relPath.split('/')[1]
    const context = {
      ...contextByLanguage[lang],
      pages,
      page: pages.find((page) => {
        const pageRelPath = `${languages[page.languageCode].dir}/content/${page.relativePath}`
        return pageRelPath === relPath
      }),
      redirects: {},
    }
    if (!context.page && !relPath.includes('data/reusables')) continue
    const fileContents = await fs.promises.readFile(relPath, 'utf8')
    const { data, content } = frontmatter(fileContents)
    const translatableFm = Object.keys(data).filter((key) => fmSchemaProperties[key].translatable)
    try {
      // test the content
      await renderContent.liquid.parseAndRender(content, context)
      // test each translatable frontmatter property
      for (const key in translatableFm) {
        await renderContent.liquid.parseAndRender(data[key], context)
      }
    } catch (err) {
      console.log(chalk.bold(relPath))
      console.log(chalk.red(`  error message: ${err.message}`))
    }
  }
}

async function loadAndPatchSiteData(filesWithKnownIssues = {}) {
  try {
    const siteData = loadSiteData()
    return siteData
  } catch (error) {
    if (error instanceof YAMLException && error.mark) {
      const relPath = error.mark.name
      if (!filesWithKnownIssues[relPath]) {
        // Note the file as problematic
        filesWithKnownIssues[relPath] = true

        // This log is important as it will get ${relPath} written to a logfile
        console.log(chalk.bold(relPath))
        console.log(chalk.red(`  error message: ${error.toString()}`))

        // Reset the file
        console.warn(`resetting file "${relPath}" due to loadSiteData error: ${error.toString()}`)
        await exec(
          `script/i18n/reset-translated-file.js --prefer-main ${relPath} --reason="loadSiteData error"`
        )

        // Try to load the site data again
        return loadAndPatchSiteData(filesWithKnownIssues)
      } else {
        console.error(`FATAL: Tried to reset file "${relPath}" but still had errors`)
      }
    }

    throw error
  }
}
