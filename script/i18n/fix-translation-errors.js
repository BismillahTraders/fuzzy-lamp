#!/usr/bin/env node

// [start-readme]
//
// Run this script to fix known frontmatter errors by copying values from english file
// Currently only fixing errors in: 'type', 'changelog'
// Please double check the changes created by this script before committing.
//
// [end-readme]

import path from 'path'
import { execSync } from 'child_process'
import { get, set } from 'lodash-es'
import fs from 'fs'
import readFileAsync from '../../lib/readfile-async.js'
import fm from '../../lib/frontmatter.js'
import matter from 'gray-matter'
import chalk from 'chalk'
import yaml from 'js-yaml'
import ghesReleaseNotesSchema from '../../tests/helpers/schemas/ghes-release-notes-schema.js'
import revalidator from 'revalidator'

main()

async function main() {
  const fixableFmProps = Object.keys(fm.schema.properties)
    .filter((property) => !fm.schema.properties[property].translatable)
    .sort()
  const fixableYmlProps = ['date']

  const loadAndValidateContent = async (path, schema) => {
    let fileContents
    try {
      fileContents = await readFileAsync(path, 'utf8')
    } catch (e) {
      if (fs.existsSync(path)) {
        console.error(e.message)
      }
      return null
    }

    if (path.endsWith('yml')) {
      let data
      let errors = []
      try {
        data = yaml.load(fileContents)
      } catch {}
      if (data && schema) {
        ;({ errors } = revalidator.validate(data, schema))
      }
      return { data, errors, content: null }
    } else {
      return fm(fileContents)
    }
  }

  const cmd =
    'git -c diff.renameLimit=10000 diff --name-only origin/main | egrep "^translations/.*/(content/.+.md|data/release-notes/.*.yml)$"'

  const maxBuffer = 1024 * 1024 * 2 // twice the default value
  const changedFilesRelPaths = execSync(cmd, { maxBuffer }).toString().split('\n')

  for (const relPath of changedFilesRelPaths) {
    // Skip READMEs
    if (!relPath || relPath.endsWith('README.md')) continue

    // find the corresponding english file by removing the first 2 path segments: /translation/<language code>
    const engAbsPath = relPath.split(path.sep).slice(2).join(path.sep)

    const localisedResult = await loadAndValidateContent(relPath, ghesReleaseNotesSchema)
    if (!localisedResult) continue
    const { data, errors, content } = localisedResult

    const fixableProps = relPath.endsWith('yml') ? fixableYmlProps : fixableFmProps

    const fixableErrors = errors.filter(({ property }) => {
      const prop = property.split('.')
      return fixableProps.includes(prop[0])
    })

    if (!data || fixableErrors.length === 0) continue

    const engResult = await loadAndValidateContent(engAbsPath)
    if (!engResult) continue
    const { data: engData } = engResult

    console.log(chalk.bold(relPath))

    const newData = data

    fixableErrors.forEach(({ property, message }) => {
      const correctValue = get(engData, property)
      console.log(chalk.red(`  error message: [${property}] ${message}`))
      console.log(`  fix property [${property}]: ${get(data, property)} -> ${correctValue}`)
      set(newData, property, correctValue)
    })

    let toWrite
    if (content) {
      toWrite = matter.stringify(content, newData, { lineWidth: 10000, forceQuotes: true })
    } else {
      toWrite = yaml.dump(newData, { lineWidth: 10000, forceQuotes: true })
    }

    fs.writeFileSync(relPath, toWrite)
  }
}
