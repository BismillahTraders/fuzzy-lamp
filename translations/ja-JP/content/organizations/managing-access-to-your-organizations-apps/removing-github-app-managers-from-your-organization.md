---
title: GitHub App マネージャーを Organization から削除する
intro: 'Organization のオーナーは、Organization のメンバーに付与されていた {% data variables.product.prodname_github_app %} マネージャー権限を削除することができます。'
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
shortTitle: GitHub Appマネージャーの削除
---

For more information about {% data variables.product.prodname_github_app %} manager permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)."

## Organization 全体で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. [Management] の下で、{% data variables.product.prodname_github_app %}マネージャー権限を削除する個人のユーザ名を探し、 [**Revoke**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャー権限の削除](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## 個別の {% data variables.product.prodname_github_app %} で {% data variables.product.prodname_github_app %} マネージャーの権限を削除する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from. ![{% data variables.product.prodname_github_app %} を選択](/assets/images/help/organizations/select-github-app.png)
{% data reusables.organizations.app-managers-settings-sidebar %}
1. [App managers] の下で、{% data variables.product.prodname_github_app %} マネージャー権限を削除する個人のユーザ名を探し、 [**Revoke**] をクリックします。 ![{% data variables.product.prodname_github_app %} マネージャー権限の削除](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## 参考リンク

- 「[{% data variables.product.prodname_dotcom %} Marketplaceについて](/articles/about-github-marketplace/)」
{% endif %}
