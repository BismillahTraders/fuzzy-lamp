---
title: 关于依赖项审查
intro: 依赖项审查可让您在将有漏洞的依赖项引入您的环境之前找到它们，并提供关于许可证、依赖项和依赖项存在时间的信息。
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: 依赖项审查
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
---

{% data reusables.dependency-review.beta %}

## 关于依赖项审查

{% data reusables.dependency-review.feature-overview %}

如果拉取请求针对仓库的默认分支并且包含对包清单或锁定文件的更改，您可以显示依赖项审查以查看更改的内容。 依赖项审查包括对锁定文件中间接依赖项的更改详情，并告诉您任何已添加或更新的依赖项是否包含已知漏洞。

{% ifversion fpt or ghec %}
依赖项审查适用于：

* 所有公共仓库。
* 由具有 {% data variables.product.prodname_advanced_security %} 许可的组织所拥有并且启用了依赖关系图的私有仓库。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。
{% elsif ghes or ghae %}
为 {% data variables.product.product_location %} 启用依赖关系图并为组织或仓库启用{% data variables.product.prodname_advanced_security %} 时，依赖项审查可用。
{% endif %}

有时，您可能只想更新清单中一个依赖项的版本并生成拉取请求。 但是，如果此直接依赖项的更新版本也更新了依赖项，则拉取请求的更改可能超过您的预期。 每个清单和锁定文件的依赖项审查提供了一种简单的方法来查看更改的内容，以及任何新的依赖项版本是否包含已知的漏洞。

通过检查拉取请求中的依赖项审查并更改被标记为有漏洞的任何依赖项，可以避免将漏洞添加到项目中。 For more information about how dependency review works, see "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)."

{% data variables.product.prodname_dependabot_alerts %} 将会查找依赖项中存在的漏洞，但避免引入潜在问题比在以后修复它们要好得多。 有关 {% data variables.product.prodname_dependabot_alerts %} 的更多信息，请参阅“[关于有漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”。

依赖项审查支持与依赖关系图相同的语言和包管理生态系统。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

## 启用依赖项审查

启用依赖关系图时，依赖项审查功能可用。 {% ifversion fpt or ghec %}更多信息请参阅“[启用依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph)”。{% endif %}{% ifversion ghes or ghae %}更多信息请参阅“[在企业帐户上启用依赖关系图和 Dependabot 警报](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)”。{% endif %}
