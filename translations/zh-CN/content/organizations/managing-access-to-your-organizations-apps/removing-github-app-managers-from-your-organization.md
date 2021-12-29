---
title: 从组织中删除 GitHub 应用程序管理员
intro: '组织所有者可以撤销授予组织成员的 {% data variables.product.prodname_github_app %}管理员权限。'
redirect_from:
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 删除 GitHub 应用程序管理器
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## 删除整个组织的 {% data variables.product.prodname_github_app %}管理员权限

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在“Management（管理）”下，找到您要从其删除 {% data variables.product.prodname_github_app %}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {% data variables.product.prodname_github_app %}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## 删除单个 {% data variables.product.prodname_github_app %}的 {% data variables.product.prodname_github_app %}管理员权限

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在 "{% data variables.product.prodname_github_apps %}" 下，单击要从其删除 {% data variables.product.prodname_github_app %}管理员的应用程序的头像。 ![选择 {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. 在“App managers（应用程序管理员）”下，找到您要从其删除 {% data variables.product.prodname_github_app %}管理员权限的人员的用户名，然后单击 **Revoke（撤销）**。 ![撤销 {% data variables.product.prodname_github_app %}管理员权限](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## 延伸阅读

- "[关于 {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
