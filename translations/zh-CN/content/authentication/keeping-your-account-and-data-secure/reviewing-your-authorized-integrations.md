---
title: 审查授权的集成
intro: 您可以查看授权的集成，以审核每个集成对您的帐户和数据的访问权限。
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 授权集成
---

## 审查授权的 {% data variables.product.prodname_oauth_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
{% data reusables.user_settings.access_authorized_oauth_apps %}
{% data reusables.user_settings.review-oauth-apps %}

## 审查授权的 {% data variables.product.prodname_github_apps %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.access_applications %}
3. 单击 **Authorized {% data variables.product.prodname_github_apps %}s（授权的 GitHub 应用程序）**选项卡。 ![授权的 {% data variables.product.prodname_github_apps %}选项卡](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. 审查有您帐户访问权限的 {% data variables.product.prodname_github_apps %}。 对于您无法识别或已过期的应用程序，请单击 **Revoke（撤销）**。 要撤销所有 {% data variables.product.prodname_github_apps %}，请单击 **Revoke all（全部撤销）**。 ![授权的 {% data variables.product.prodname_github_app %}列表](/assets/images/help/settings/revoke-github-app.png)

## 延伸阅读
{% ifversion fpt or ghec %}
- “[关于集成](/articles/about-integrations)”{% endif %}
- “[审查您的授权应用程序 (OAuth)](/articles/reviewing-your-authorized-applications-oauth)”
