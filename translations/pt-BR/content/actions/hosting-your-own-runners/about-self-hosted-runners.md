---
title: About self-hosted runners
intro: 'You can host your own runners and customize the environment used to run jobs in your {% data variables.product.prodname_actions %} workflows.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About self-hosted runners

{% data reusables.github-actions.self-hosted-runner-description %} Self-hosted runners can be physical, virtual, in a container, on-premises, or in a cloud.

You can add self-hosted runners at various levels in the management hierarchy:
- Repository-level runners are dedicated to a single repository.
- Organization-level runners can process jobs for multiple repositories in an organization.
- Enterprise-level runners can be assigned to multiple organizations in an enterprise account.

Your runner machine connects to {% data variables.product.product_name %} using the {% data variables.product.prodname_actions %} self-hosted runner application. {% data reusables.github-actions.runner-app-open-source %} When a new version is released, the runner application automatically updates itself when a job is assigned to the runner, or within a week of release if the runner hasn't been assigned any jobs.

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

For more information about installing and using self-hosted runners, see "[Adding self-hosted runners](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

## {% ifversion fpt or ghes %}Differences between {% data variables.product.prodname_dotcom %}-hosted and {% elsif ghae %}Characteristics of {% endif %}self-hosted runners

{% ifversion fpt or ghes %}
{% data variables.product.prodname_dotcom %}-hosted runners offer a quicker, simpler way to run your workflows, while self-hosted{% elsif ghae %}Self-hosted{% endif %} runners are a highly configurable way to run workflows in your own custom environment. {% ifversion ghae %}Self-hosted runners:{% endif %}

{% ifversion fpt or ghes %}
**{% data variables.product.prodname_dotcom %}-hosted runners:**
- Receive automatic updates for the operating system, preinstalled packages and tools, and the self-hosted runner application.
- Are managed and maintained by {% data variables.product.prodname_dotcom %}.
- Provide a clean instance for every job execution.
- Use free minutes on your {% data variables.product.prodname_dotcom %} plan, with per-minute rates applied after surpassing the free minutes.

**Self-hosted runners:**{% endif %}
- Receive automatic updates for the self-hosted runner application only. You are responsible for updating the operating system and all other software. 
- Can use cloud services or local machines that you already pay for.
- Are customizable to your hardware, operating system, software, and security requirements.
- Don't need to have a clean instance for every job execution.
- Are free to use with {% data variables.product.prodname_actions %}, but you are responsible for the cost of maintaining your runner machines.

## Requirements for self-hosted runner machines

You can use any machine as a self-hosted runner as long at it meets these requirements:

* You can install and run the self-hosted runner application on the machine. For more information, see "[Supported architectures and operating systems for self-hosted runners](#supported-architectures-and-operating-systems-for-self-hosted-runners)."
* The machine can communicate with {% data variables.product.prodname_actions %}. For more information, see "[Communication between self-hosted runners and {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)."
* The machine has enough hardware resources for the type of workflows you plan to run. The self-hosted runner application itself only requires minimal resources.
* If you want to run workflows that use Docker container actions or service containers, you must use a Linux machine and Docker must be installed.

{% ifversion fpt or ghes > 3.2 or ghec %}
## Autoscaling your self-hosted runners

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive. For more information, see "[Autoscaling with self-hosted runners](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)."

{% endif %}

## Usage limits

There are some limits on {% data variables.product.prodname_actions %} usage when using self-hosted runners. These limits are subject to change.

{% data reusables.github-actions.usage-workflow-run-time %}
- **Job queue time** - Each job for self-hosted runners can be queued for a maximum of 24 hours. If a self-hosted runner does not start executing the job within this limit, the job is terminated and fails to complete.
{% data reusables.github-actions.usage-api-requests %}
- **Job matrix** - {% data reusables.github-actions.usage-matrix-limits %}
{% data reusables.github-actions.usage-workflow-queue-limits %}

## Workflow continuity for self-hosted runners

{% data reusables.github-actions.runner-workflow-continuity %}

## Supported architectures and operating systems for self-hosted runners

The following operating systems are supported for the self-hosted runner application.

### Linux

- Red Hat Enterprise Linux 7 or later
- CentOS 7 or later
- Oracle Linux 7
- Fedora 29 or later
- Debian 9 or later
- Ubuntu 16.04 or later
- Linux Mint 18 or later
- openSUSE 15 or later
- SUSE Enterprise Linux (SLES) 12 SP2 or later

### Windows

- Windows 7 64-bit
- Windows 8.1 64-bit
- Windows 10 64-bit
- Windows Server 2012 R2 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit

### macOS

- macOS 10.13 (High Sierra) or later

### Architectures

The following processor architectures are supported for the self-hosted runner application.

- `x64` - Linux, macOS, Windows.
- `ARM64` - Linux only.
- `ARM32` - Linux only.

{% ifversion ghes %}

## Supported actions on self-hosted runners

Some extra configuration might be required to use actions from {% data variables.product.prodname_dotcom_the_website %} with {% data variables.product.prodname_ghe_server %}, or to use the `actions/setup-LANGUAGE` actions with self-hosted runners that do not have internet access. For more information, see "[Managing access to actions from {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)" and contact your {% data variables.product.prodname_enterprise %} site administrator.

{% endif %}

## Communication between self-hosted runners and {% data variables.product.product_name %}

The self-hosted runner polls {% data variables.product.product_name %} to retrieve application updates and to check if any jobs are queued for processing. The self-hosted runner uses a HTTPS _long poll_ that opens a connection to {% data variables.product.product_name %} for 50 seconds, and if no response is received, it then times out and creates a new long poll. The application must be running on the machine to accept and run {% data variables.product.prodname_actions %} jobs.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion ghae %}
You must ensure that the self-hosted runner has appropriate network access to communicate with the {% data variables.product.prodname_ghe_managed %} URL and its subdomains.
For example, if your instance name is `octoghae`, then you will need to allow the self-hosted runner to access `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com`, and `codeload.octoghae.githubenterprise.com`.

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. For more information, see "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)."
{% endif %}

{% ifversion fpt or ghec %}

Since the self-hosted runner opens a connection to {% data variables.product.prodname_dotcom %}, you do not need to allow {% data variables.product.prodname_dotcom %} to make inbound connections to your self-hosted runner.

You must ensure that the machine has the appropriate network access to communicate with the {% data variables.product.prodname_dotcom %} hosts listed below. Some hosts are required for essential runner operations, while other hosts are only required for certain functionality.

{% note %}

**Note:** Some of the domains listed below are configured using `CNAME` records. Some firewalls might require you to add rules recursively for all `CNAME` records. Note that the `CNAME` records might change in the future, and that only the domains listed below will remain constant.

{% endnote %}

**Needed for essential operations:**

```
github.com
api.github.com
```

**Needed for downloading actions:**

```
codeload.github.com
```

**Needed for runner version updates:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Needed for uploading/downloading caches and workflow artifacts:**    

```
*.blob.core.windows.net
```

**Needed for retrieving OIDC tokens:**

```
*.actions.githubusercontent.com
```

In addition, your workflow may require access to other network resources. For example, if your workflow installs packages or publishes containers to {% data variables.product.prodname_dotcom %} Packages, then the runner will also require access to those network endpoints.

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. For more information, see "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" or "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".

{% else %}

You must ensure that the machine has the appropriate network access to communicate with {% data variables.product.product_location %}.{% ifversion ghes %} Self-hosted runners connect directly to {% data variables.product.product_location %} and do not require any external internet access in order to function. As a result, you can use network routing to direct communication between the self-hosted runner and {% data variables.product.product_location %}. For example, you can assign a private IP address to your self-hosted runner and configure routing to send traffic to {% data variables.product.product_location %}, with no need for traffic to traverse a public network.{% endif %}

{% endif %}

You can also use self-hosted runners with a proxy server. For more information, see "[Using a proxy server with self-hosted runners](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)."

{% ifversion ghes %}

## Communication between self-hosted runners and {% data variables.product.prodname_dotcom_the_website %}

Self-hosted runners do not need to connect to {% data variables.product.prodname_dotcom_the_website %} unless you have [enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).

If you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}, then the self-hosted runner will connect directly to {% data variables.product.prodname_dotcom_the_website %} to download actions.  You must ensure that the machine has the appropriate network access to communicate with the {% data variables.product.prodname_dotcom %} URLs listed below.

{% note %}

**Note:** Some of the domains listed below are configured using `CNAME` records. Some firewalls might require you to add rules recursively for all `CNAME` records. Note that the `CNAME` records might change in the future, and that only the domains listed below will remain constant.

{% endnote %}

```
github.com
api.github.com
codeload.github.com
```

{% endif %}

## Self-hosted runner security

{% ifversion fpt or ghec %}

{% data reusables.github-actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

This is not an issue with {% data variables.product.prodname_dotcom %}-hosted runners because each {% data variables.product.prodname_dotcom %}-hosted runner is always a clean isolated virtual machine, and it is destroyed at the end of the job execution.

{% endif %}

Untrusted workflows running on your self-hosted runner pose significant security risks for your machine and network environment, especially if your machine persists its environment between jobs. Some of the risks include:

* Malicious programs running on the machine.
* Escaping the machine's runner sandbox.
* Exposing access to the machine's network environment.
* Persisting unwanted or dangerous data on the machine.

For more information about security hardening for self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."
