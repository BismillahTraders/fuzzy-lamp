---
title: 管理用户帐户的安全和分析设置
intro: '您可以控制功能以保护 {% data variables.product.prodname_dotcom %} 上项目的安全并分析其中的代码。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: 管理安全和分析
---

## 关于安全性和分析设置的管理

{% data variables.product.prodname_dotcom %} 可保护您的仓库。 本主题介绍如何管理所有现有或新仓库的安全和分析功能。

您仍然可以管理单个仓库的安全和分析功能。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

You can also review the security log for all activity on your user account. 更多信息请参阅“[查看安全日志](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)”。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

关于仓库级别安全的概述，请参阅“[保护您的仓库](/code-security/getting-started/securing-your-repository)”。

## 启用或禁用现有仓库的功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. 在“Configure security and analysis features（配置安全性和分析功能）”下，单击功能右侧的 **Disable all（全部禁用）**或 **Enable all（全部启用）**。
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Optionally, enable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. 单击 **Disable FEATURE（禁用功能）**或 **Enable FEATURE（启用功能）**以禁用或启用您拥有的所有仓库的功能。
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## 对新仓库启用或禁用功能

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## 延伸阅读

- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[管理项目依赖项中的漏洞](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
- "[自动更新依赖项](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
