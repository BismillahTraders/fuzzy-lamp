---
title: Viewing deployment activity for your repository
intro: You can view information about deployments for your entire repository or a specific pull request.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
---
{% note %}

**Note:** The deployments dashboard is currently in beta and subject to change.

{% endnote %}

People with read access to a repository can see an overview of all current deployments and a log of past deployment activity, if the repository's deployment workflow is integrated with {% data variables.product.product_name %} through the Deployments API or an app from [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). For more information, see "[Deployments](/rest/reference/repos#deployments)."

You can also see deployment information on the "Conversation" tab of a pull request.

## Viewing the deployments dashboard

{% data reusables.repositories.navigate-to-repo %}
2. To the right of the list of files, click **Environments**.
![Environments on the right of the repository page](/assets/images/help/repository/environments.png)

## Further reading
 - "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
