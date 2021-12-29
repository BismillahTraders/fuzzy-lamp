---
title: 为组织添加 GitHub 应用程序管理员
intro: '组织所有者可授权用户管理组织拥有的某些或所有 {% data variables.product.prodname_github_apps %}。'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 添加 GitHub 应用程序管理器
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## 授权某人管理组织拥有的所有 {% data variables.product.prodname_github_apps %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在“Management（管理）”下，输入您要指定为组织中 {% data variables.product.prodname_github_app %} 管理员的人员，然后单击 **Grant（授权）**。 ![添加 {% data variables.product.prodname_github_app %} 管理员](/assets/images/help/organizations/add-github-app-manager.png)

## 授权某人管理个别 {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. 在 "{% data variables.product.prodname_github_apps %}" 下，单击要为其添加 {% data variables.product.prodname_github_app %} 管理员的应用程序的头像。 ![选择 {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. 在“App managers（应用程序管理员）”下，输入要指定为应用程序 GitHub App 管理员的人员，然后单击 **Grant（授权）**。 ![添加特定应用程序的 {% data variables.product.prodname_github_app %} 管理员](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## 延伸阅读

- "[关于 {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)"
{% endif %}
