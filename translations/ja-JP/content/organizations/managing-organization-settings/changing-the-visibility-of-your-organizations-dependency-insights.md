---
title: Organization dependency insights の可視性を変更する
intro: Organization のメンバーが、Organization dependency insights を表示できるように設定できます。また、Organization のオーナーにのみ表示できるようにも設定できます。
product: '{% data reusables.gated-features.org-insights %}'
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: インサイトの可視性の変更
---

Organization のオーナーは、organization dependency insights の表示制限を設定できます。 デフォルトでは、Organization のメンバー全員が Organization dependency insight を表示できます。

Enterprise のオーナーは、Enterprise アカウントにあるすべての Organization dependency insights について、表示制限を設定できます。 For more information, see "[Enforcing policies for dependency insights in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Member organization permissions] で、[**Allow members to view dependency insights**] を選択または選択解除します。 ![insights の表示をメンバーに許可するチェックボックス](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. [**Save**] をクリックします。
