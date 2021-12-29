#!/usr/bin/env node
import Heroku from 'heroku-client'
import createStagingAppName from './create-staging-app-name.js'

export default async function undeployFromStaging({
  octokit,
  pullRequest,
  // These parameters will only be set by Actions
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
    head: { ref: branch },
    merged: wasMerged,
  } = pullRequest

  const workflowRunLog = runId ? `https://github.com/${owner}/${repo}/actions/runs/${runId}` : null
  const logUrl = workflowRunLog

  const appName = createStagingAppName({ repo, pullNumber, branch })

  try {
    const title = `from the 'staging' environment as '${appName}'`

    console.log(`About to undeploy ${title}...`)

    // Time to talk to Heroku...
    const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

    // Is there already a Heroku App for this PR?
    let appExists = true
    try {
      await heroku.get(`/apps/${appName}`)
    } catch (error) {
      announceIfHerokuIsDown(error)
      appExists = false
    }

    // If there is an existing app, delete it
    if (appExists) {
      try {
        await heroku.delete(`/apps/${appName}`)

        console.log(`Heroku app '${appName}' deleted`)
      } catch (error) {
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to delete Heroku app '${appName}'. Error: ${error}`)
      }
    }

    // If not merged, we'll leave it to be cleaned up later by the workflow
    // that checks for stale PRs. This way, we aren't doing more cleaning than
    // necessary if someone intends to reopen the PR momentarily.
    if (wasMerged) {
      // Get all of the Deployments to signal this environment's complete deactivation
      for await (const response of octokit.paginate.iterator(octokit.repos.listDeployments, {
        owner,
        repo,

        // In the GitHub API, there can only be one active deployment per environment.
        // For our many staging apps, we must use the unique appName as the environment.
        environment: appName,
      })) {
        const { data: deployments } = response

        console.log(
          `Found ${deployments.length} GitHub Deployments for Environment ${appName}`,
          deployments
        )

        // Deactivate ALL of the deployments
        for (const deployment of deployments) {
          // Deactivate this Deployment with an 'inactive' DeploymentStatus
          const { data: deploymentStatus } = await octokit.repos.createDeploymentStatus({
            owner,
            repo,
            deployment_id: deployment.id,
            state: 'inactive',
            description: 'The app was undeployed',
            ...(logUrl && { log_url: logUrl }),
            // The 'ant-man' preview is required for `state` values of 'inactive', as well as
            // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
            // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
            mediaType: {
              previews: ['ant-man', 'flash'],
            },
          })
          console.log(
            `🚀 Deployment status (ID: ${deployment.id}): ${deploymentStatus.state} - ${deploymentStatus.description}`
          )

          // Delete this Deployment
          await octokit.repos.deleteDeployment({
            owner,
            repo,
            deployment_id: deployment.id,
          })
          console.log(`🚀 Deployment (ID: ${deployment.id}): deleted`)
        }
      }

      // IMPORTANT:
      // We will leave the Deployment Environment to be cleaned up later by the
      // workflow that checks for stale PRs. This way, we are not doing more
      // cleaning than necessary if someone intends to reopen the PR momentarily,
      // and we do not need to use an admin PAT to run this script.
      console.log(`🚀 Environment (${appName}) is ready to be removed (later...)`)
    }

    console.log(`Finished undeploying after ${Math.round((Date.now() - startTime) / 1000)} seconds`)
  } catch (error) {
    // Report failure!
    const failureMessage = `Undeployment failed after ${Math.round(
      (Date.now() - startTime) / 1000
    )} seconds. See logs for more information.`
    console.error(failureMessage)

    // Re-throw the error to bubble up
    throw error
  }
}

function announceIfHerokuIsDown(error) {
  if (error && error.statusCode === 503) {
    console.error('💀 Heroku may be down! Please check its Status page: https://status.heroku.com/')
  }
}
