#!/usr/bin/env node
import got from 'got'
import Heroku from 'heroku-client'
import { setOutput } from '@actions/core'
import createStagingAppName from './create-staging-app-name.js'

// Equivalent of the 'await-sleep' module without the install
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const SLEEP_INTERVAL = 5000
const HEROKU_LOG_LINES_TO_SHOW = 25

// Allow for a few 404 (Not Found), 429 (Too Many Requests), etc. responses from
// the semi-unreliable Heroku API when we're polling for status updates
const ALLOWED_MISSING_RESPONSE_COUNT =
  parseInt(process.env.ALLOWED_POLLING_FAILURES_PER_PHASE, 10) || 10
const ALLOWABLE_ERROR_CODES = [404, 429, 500, 503]

export default async function deployToStaging({
  octokit,
  pullRequest,
  forceRebuild = false,
  // These parameters will only be set by Actions
  sourceBlobUrl = null,
  runId = null,
}) {
  // Start a timer so we can report how long the deployment takes
  const startTime = Date.now()

  // Extract some important properties from the PR
  const {
    number: pullNumber,
    base: {
      repo: {
        name: repo,
        owner: { login: owner },
      },
    },
    state,
    head: { ref: branch, sha },
    user: author,
  } = pullRequest

  // Verify the PR is still open
  if (state !== 'open') {
    throw new Error(`This pull request is not open. State is: '${state}'`)
  }

  // Put together application configuration variables
  const isPrivateRepo = owner === 'github' && repo === 'docs-internal'
  const isPrebuilt = !!sourceBlobUrl
  const { DOCUBOT_REPO_PAT, HYDRO_ENDPOINT, HYDRO_SECRET } = process.env
  const appConfigVars = {
    // Track the git branch
    GIT_BRANCH: branch,
    // If prebuilt: prevent the Heroku Node.js buildpack from installing devDependencies
    NPM_CONFIG_PRODUCTION: isPrebuilt.toString(),
    // If prebuilt: prevent the Heroku Node.js buildpack from using `npm ci` as it would
    // delete all of the vendored "node_modules/" directory.
    USE_NPM_INSTALL: isPrebuilt.toString(),
    // IMPORTANT: This secret should only be set in the private repo!
    // If not prebuilt, include the PAT required for cloning the `docs-early-access` repo.
    // Otherwise, set it to `null` to unset it from the environment for security.
    DOCUBOT_REPO_PAT: (isPrivateRepo && !isPrebuilt && DOCUBOT_REPO_PAT) || null,
    // IMPORTANT: These secrets should only be set in the private repo!
    // These are required for Hydro event tracking
    ...(isPrivateRepo && HYDRO_ENDPOINT && HYDRO_SECRET && { HYDRO_ENDPOINT, HYDRO_SECRET }),
  }

  const workflowRunLog = runId ? `https://github.com/${owner}/${repo}/actions/runs/${runId}` : null
  let deploymentId = null
  let logUrl = workflowRunLog
  let appIsNewlyCreated = false

  const appName = createStagingAppName({ repo, pullNumber, branch })
  const environment = appName
  const homepageUrl = `https://${appName}.herokuapp.com/`

  try {
    const title = `branch '${branch}' at commit '${sha}' in the '${environment}' staging environment`

    console.log(`About to deploy ${title}...`)

    // Kick off a pending GitHub Deployment right away, so the PR author
    // will have instant feedback that their work is being deployed.
    const { data: deployment } = await octokit.repos.createDeployment({
      owner,
      repo,

      description: `Deploying ${title}`,

      // Use a commit SHA instead of a branch name as the ref for more precise
      // feedback, and also because the branch may have already been deleted.
      ref: sha,

      // In the GitHub API, there can only be one active deployment per environment.
      // For our many staging apps, we must use the unique appName as the environment.
      environment,

      // The status contexts to verify against commit status checks. If you omit
      // this parameter, GitHub verifies all unique contexts before creating a
      // deployment. To bypass checking entirely, pass an empty array. Defaults
      // to all unique contexts.
      required_contexts: [],

      // Do not try to merge the base branch into the feature branch
      auto_merge: false,
    })
    console.log('GitHub Deployment created', deployment)

    // Store this ID for later updating
    deploymentId = deployment.id

    // Set some output variables for workflow steps that run after this script
    if (process.env.GITHUB_ACTIONS) {
      setOutput('deploymentId', deploymentId)
      setOutput('logUrl', logUrl)
    }

    await octokit.repos.createDeploymentStatus({
      owner,
      repo,
      deployment_id: deploymentId,
      state: 'in_progress',
      description: 'Deploying the app...',
      // The 'ant-man' preview is required for `state` values of 'inactive', as well as
      // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
      // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
      mediaType: {
        previews: ['ant-man', 'flash'],
      },
    })
    console.log('🚀 Deployment status: in_progress - Preparing to deploy the app...')

    // Time to talk to Heroku...
    const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })
    let appSetup = null
    let build = null

    // Is there already a Heroku App for this PR?
    let appExists = true
    try {
      await heroku.get(`/apps/${appName}`)
    } catch (error) {
      announceIfHerokuIsDown(error)
      appExists = false
    }

    // If there is an existing app but we want to forcibly rebuild, delete the app first
    if (appExists && forceRebuild) {
      console.log('🚀 Deployment status: in_progress - Destroying existing Heroku app...')

      try {
        await heroku.delete(`/apps/${appName}`)
        appExists = false

        console.log(`Heroku app '${appName}' deleted for forced rebuild`)
      } catch (error) {
        announceIfHerokuIsDown(error)
        throw new Error(
          `Failed to delete Heroku app '${appName}' for forced rebuild. Error: ${error}`
        )
      }
    }

    if (!sourceBlobUrl) {
      try {
        sourceBlobUrl = await getTarballUrl({
          octokit,
          owner,
          repo,
          sha,
        })
      } catch (error) {
        throw new Error(`Failed to generate source blob URL. Error: ${error}`)
      }
    }

    // If an app does not exist, create one!
    // This action will also trigger a build as a by-product.
    if (!appExists) {
      appIsNewlyCreated = true

      console.log(`Heroku app '${appName}' does not exist. Creating a new AppSetup...`)

      console.log('🚀 Deployment status: in_progress - Creating a new Heroku app...')

      const appSetupStartTime = Date.now()
      try {
        appSetup = await heroku.post('/app-setups', {
          body: {
            app: {
              name: appName,
            },
            source_blob: {
              url: sourceBlobUrl,
            },

            // Pass some environment variables to staging apps via Heroku
            // config variables.
            overrides: {
              // AppSetup API cannot handle `null` values for config vars
              env: removeEmptyProperties(appConfigVars),
            },
          },
        })
        console.log('Heroku AppSetup created', appSetup)

        // This probably will not be available yet
        build = appSetup.build
      } catch (error) {
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to create Heroku app '${appName}'. Error: ${error}`)
      }

      // Add PR author (if staff) as a collaborator on the new staging app
      try {
        if (author.site_admin === true) {
          await heroku.post(`/apps/${appName}/collaborators`, {
            body: {
              user: `${author.login}@github.com`,
              // We don't want an email invitation for every new staging app
              silent: true,
            },
          })
          console.log(`Added PR author @${author.login} as a Heroku app collaborator`)
        }
      } catch (error) {
        announceIfHerokuIsDown(error)
        // It's fine if this fails, it shouldn't block the app from deploying!
        console.warn(
          `Warning: failed to add PR author as a Heroku app collaborator. Error: ${error}`
        )
      }

      // A new Build is created as a by-product of creating an AppSetup.
      // Poll until there is a Build object attached to the AppSetup.
      let setupAcceptableErrorCount = 0
      while (!appSetup || !build || !build.id) {
        await sleep(SLEEP_INTERVAL)
        try {
          appSetup = await heroku.get(`/app-setups/${appSetup.id}`)
          build = appSetup.build
        } catch (error) {
          // Allow for a few bad responses from the Heroku API
          if (isAllowableHerokuError(error)) {
            setupAcceptableErrorCount += 1
            if (setupAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
              console.warn(
                `Ignoring allowable Heroku error #${setupAcceptableErrorCount}: ${error.statusCode}`
              )
              continue
            }
          }
          announceIfHerokuIsDown(error)
          throw new Error(`Failed to get AppSetup status. Error: ${error}`)
        }

        if (appSetup && appSetup.status === 'failed') {
          const manifestErrors = appSetup.manifest_errors || []
          const hasManifestErrors = Array.isArray(manifestErrors) && manifestErrors.length > 0
          const manifestErrorMessage = hasManifestErrors
            ? `\nManifest errors:\n - ${manifestErrors.join('\n - ')}`
            : ''
          throw new Error(
            `Failed to setup app after ${Math.round(
              (Date.now() - appSetupStartTime) / 1000
            )} seconds.
Reason: ${appSetup.failure_message}${manifestErrorMessage}
See Heroku logs for more information:\n${logUrl}`
          )
        }

        console.log(
          `AppSetup status: ${appSetup.status} (after ${Math.round(
            (Date.now() - appSetupStartTime) / 1000
          )} seconds)`
        )
      }

      console.log('Heroku AppSetup finished', appSetup)
      console.log('Heroku build detected', build)
    } else {
      // If the app does exist, just manually trigger a new build
      console.log(`Heroku app '${appName}' already exists.`)

      console.log('Updating Heroku app configuration variables...')

      // Reconfigure environment variables
      // https://devcenter.heroku.com/articles/platform-api-reference#config-vars-update
      try {
        await heroku.patch(`/apps/${appName}/config-vars`, {
          body: appConfigVars,
        })
      } catch (error) {
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to update Heroku app configuration variables. Error: ${error}`)
      }

      console.log('Reconfigured')
      console.log('Building Heroku app...')

      try {
        build = await heroku.post(`/apps/${appName}/builds`, {
          body: {
            source_blob: {
              url: sourceBlobUrl,
            },
          },
        })
      } catch (error) {
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to create Heroku build. Error: ${error}`)
      }

      console.log('Heroku build created', build)
    }

    const buildStartTime = Date.now() // Close enough...
    const buildId = build.id
    logUrl = build.output_stream_url

    console.log('🚀 Deployment status: in_progress - Building a new Heroku slug...')

    // Poll until the Build's status changes from "pending" to "succeeded" or "failed".
    let buildAcceptableErrorCount = 0
    while (!build || !build.release || !build.release.id) {
      await sleep(SLEEP_INTERVAL)
      try {
        build = await heroku.get(`/apps/${appName}/builds/${buildId}`)
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          buildAcceptableErrorCount += 1
          if (buildAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${buildAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to get build status. Error: ${error}`)
      }

      if (build && build.status === 'failed') {
        throw new Error(
          `Failed to build after ${Math.round(
            (Date.now() - buildStartTime) / 1000
          )} seconds. See Heroku logs for more information:\n${logUrl}`
        )
      }

      console.log(
        `Heroku build status: ${(build || {}).status} (after ${Math.round(
          (Date.now() - buildStartTime) / 1000
        )} seconds)`
      )
    }

    console.log(
      `Finished Heroku build after ${Math.round((Date.now() - buildStartTime) / 1000)} seconds.`,
      build
    )
    console.log('Heroku release detected', build.release)

    const releaseStartTime = Date.now() // Close enough...
    let releaseId = build.release.id
    let release = null

    // Poll until the associated Release's status changes from "pending" to "succeeded" or "failed".
    let releaseAcceptableErrorCount = 0
    while (!release || release.status === 'pending') {
      await sleep(SLEEP_INTERVAL)
      try {
        const result = await heroku.get(`/apps/${appName}/releases/${releaseId}`)

        // Update the deployment status but only on the first retrieval
        if (!release) {
          logUrl = result.output_stream_url

          console.log('Heroku Release created', result)

          console.log('🚀 Deployment status: in_progress - Releasing the built Heroku slug...')
        }

        release = result
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          releaseAcceptableErrorCount += 1
          if (releaseAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${releaseAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to get release status. Error: ${error}`)
      }

      if (release && release.status === 'failed') {
        throw new Error(
          `Failed to release after ${Math.round(
            (Date.now() - releaseStartTime) / 1000
          )} seconds. See Heroku logs for more information:\n${logUrl}`
        )
      }

      console.log(
        `Release status: ${(release || {}).status} (after ${Math.round(
          (Date.now() - releaseStartTime) / 1000
        )} seconds)`
      )
    }

    console.log(
      `Finished Heroku release after ${Math.round(
        (Date.now() - releaseStartTime) / 1000
      )} seconds.`,
      release
    )

    // Monitor dyno state for this release to ensure it reaches "up" rather than crashing.
    // This will help us catch issues with faulty startup code and/or the package manifest.
    const dynoBootStartTime = Date.now()
    console.log('Checking Heroku dynos...')
    logUrl = workflowRunLog

    console.log('🚀 Deployment status: in_progress - Monitoring the Heroku dyno start-up...')

    // Keep checking while there are still dynos in non-terminal states
    let newDynos = []
    let dynoAcceptableErrorCount = 0
    while (newDynos.length === 0 || newDynos.some((dyno) => dyno.state === 'starting')) {
      await sleep(SLEEP_INTERVAL)
      try {
        const dynoList = await heroku.get(`/apps/${appName}/dynos`)
        const dynosForThisRelease = dynoList.filter((dyno) => dyno.release.id === releaseId)

        // To track them afterward
        newDynos = dynosForThisRelease

        // Dynos for this release OR a newer release
        const relevantDynos = dynoList.filter((dyno) => dyno.release.version >= release.version)

        // If this Heroku app was just newly created, often a secondary release
        // is requested to enable automatically managed SSL certificates. The
        // release description will read:
        //   "Enable allow-multiple-sni-endpoints feature"
        //
        // If that is the case, we need to update to monitor that secondary
        // release instead.
        if (relevantDynos.length > 0 && dynosForThisRelease.length === 0) {
          // If the app is NOT newly created, fail fast!
          if (!appIsNewlyCreated) {
            throw new Error('The dynos for this release disappeared unexpectedly')
          }

          // Check for the secondary release
          let nextRelease = null
          try {
            nextRelease = await heroku.get(`/apps/${appName}/releases/${release.version + 1}`)
          } catch (error) {
            announceIfHerokuIsDown(error)
            throw new Error(
              `Could not find a secondary release to explain the disappearing dynos. Error: ${error}`
            )
          }

          if (nextRelease) {
            if (nextRelease.description === 'Enable allow-multiple-sni-endpoints feature') {
              // Track dynos for the next release instead
              release = nextRelease
              releaseId = nextRelease.id

              console.warn('Switching to monitor secondary release...')

              // Allow the loop to repeat to fetch the dynos for the secondary release
            } else {
              // Otherwise, assume another release replaced this one but it
              // PROBABLY would've succeeded...?
              newDynos.forEach((dyno) => {
                dyno.state = 'up'
              })
            }
          }
          // else just keep monitoring and hope for the best
        }

        console.log(
          `Dyno states: ${JSON.stringify(newDynos.map((dyno) => dyno.state))} (after ${Math.round(
            (Date.now() - dynoBootStartTime) / 1000
          )} seconds)`
        )
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          dynoAcceptableErrorCount += 1
          if (dynoAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${dynoAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to find dynos for this release. Error: ${error}`)
      }
    }

    const crashedDynos = newDynos.filter((dyno) => ['crashed', 'restarting'].includes(dyno.state))
    const runningDynos = newDynos.filter((dyno) => dyno.state === 'up')

    // If any dynos crashed on start-up, fail the deployment
    if (crashedDynos.length > 0) {
      const errorMessage = `At least ${crashedDynos.length} Heroku dyno(s) crashed on start-up!`

      console.error(errorMessage)

      // Attempt to dump some of the Heroku log here for debugging
      try {
        const logSession = await heroku.post(`/apps/${appName}/log-sessions`, {
          body: {
            dyno: crashedDynos[0].name,
            lines: HEROKU_LOG_LINES_TO_SHOW,
            tail: false,
          },
        })

        logUrl = logSession.logplex_url

        const logText = await got(logUrl).text()
        console.error(
          `Here are the last ${HEROKU_LOG_LINES_TO_SHOW} lines of the Heroku log:\n\n${logText}`
        )
      } catch (error) {
        announceIfHerokuIsDown(error)
        // Don't fail because of this error
        console.error(`Failed to retrieve the Heroku logs for the crashed dynos. Error: ${error}`)
      }

      throw new Error(errorMessage)
    }

    console.log(
      `At least ${runningDynos.length} Heroku dyno(s) are ready after ${Math.round(
        (Date.now() - dynoBootStartTime) / 1000
      )} seconds.`
    )

    // Send a series of requests to trigger the server warmup routines
    console.log('🚀 Deployment status: in_progress - Triggering server warmup routines...')

    const warmupStartTime = Date.now()
    console.log(`Making warmup requests to: ${homepageUrl}`)
    try {
      await got(homepageUrl, {
        timeout: 10000, // Maximum 10 second timeout per request
        retry: {
          limit: 7, // About 2 minutes 7 seconds of delay, plus active request time for 8 requests
          statusCodes: [404, 421].concat(got.defaults.options.retry.statusCodes), // prepend extras
        },
        hooks: {
          beforeRetry: [
            (options, error = {}, retryCount = '?') => {
              const statusCode = error.statusCode || (error.response || {}).statusCode || -1
              console.log(
                `Retrying after warmup request attempt #${retryCount} (${statusCode}) after ${Math.round(
                  (Date.now() - warmupStartTime) / 1000
                )} seconds...`
              )
            },
          ],
        },
      })
      console.log(
        `Warmup requests passed after ${Math.round((Date.now() - warmupStartTime) / 1000)} seconds`
      )
    } catch (error) {
      throw new Error(
        `Warmup requests failed after ${Math.round(
          (Date.now() - warmupStartTime) / 1000
        )} seconds. Error: ${error}`
      )
    }

    // Report success!
    const successMessage = `Deployment succeeded after ${Math.round(
      (Date.now() - startTime) / 1000
    )} seconds.`
    console.log(successMessage)

    await octokit.repos.createDeploymentStatus({
      owner,
      repo,
      deployment_id: deploymentId,
      state: 'success',
      description: successMessage,
      ...(logUrl && { log_url: logUrl }),
      environment_url: homepageUrl,
      // The 'ant-man' preview is required for `state` values of 'inactive', as well as
      // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
      // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
      mediaType: {
        previews: ['ant-man', 'flash'],
      },
    })

    console.log(`🚀 Deployment status: success - ${successMessage}`)
    console.log(`Visit the newly deployed app at: ${homepageUrl}`)
  } catch (error) {
    // Report failure!
    const failureMessage = `Deployment failed after ${Math.round(
      (Date.now() - startTime) / 1000
    )} seconds. See logs for more information.`
    console.error(failureMessage)

    try {
      if (deploymentId) {
        await octokit.repos.createDeploymentStatus({
          owner,
          repo,
          deployment_id: deploymentId,
          state: 'error',
          description: failureMessage,
          ...(logUrl && { log_url: logUrl }),
          environment_url: homepageUrl,
          // The 'ant-man' preview is required for `state` values of 'inactive', as well as
          // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
          // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
          mediaType: {
            previews: ['ant-man', 'flash'],
          },
        })

        console.log(
          `🚀 Deployment status: error - ${failureMessage}` + (logUrl ? ` Logs: ${logUrl}` : '')
        )
      }
    } catch (error) {
      console.error(`Failed to finalize GitHub DeploymentStatus as a failure. Error: ${error}`)
    }

    // Re-throw the error to bubble up
    throw error
  }
}

async function getTarballUrl({ octokit, owner, repo, sha }) {
  // Get a URL for the tarballed source code bundle
  const {
    headers: { location: tarballUrl },
  } = await octokit.repos.downloadTarballArchive({
    owner,
    repo,
    ref: sha,
    // Override the underlying `node-fetch` module's `redirect` option
    // configuration to prevent automatically following redirects.
    request: {
      redirect: 'manual',
    },
  })
  return tarballUrl
}

function isAllowableHerokuError(error) {
  return error && ALLOWABLE_ERROR_CODES.includes(error.statusCode)
}

function announceIfHerokuIsDown(error) {
  if (error && error.statusCode === 503) {
    console.error('💀 Heroku may be down! Please check its Status page: https://status.heroku.com/')
  }
}

function removeEmptyProperties(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val != null))
}
