---
title: Enterprise の設定について
intro: 'サイトアドミンのダッシュボード {% ifversion ghes %}、{% data variables.enterprise.management_console %}、および管理シェル(SSH) {% elsif ghae %}と Enterprise 設定を使用するか、サポート{% endif %}に連絡して Enterprise を管理できます。'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
---

{% ifversion ghes %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} 詳しい情報については、「[サイトアドミンのダッシュボード](/admin/configuration/site-admin-dashboard)」を参照してください。

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} 詳しい情報については、「[Management Console にアクセスする](/admin/configuration/accessing-the-management-console)」を参照してください。

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} 詳しい情報については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
{% endif %}

{% ifversion ghae %}
The first time you access your enterprise, you will complete an initial configuration to get {% data variables.product.product_name %} ready to use. 初期設定には、Enterprise とアイデンティティプロバイダ (IdP) の接続、SAML SSO による認証、Enterprise 内のリポジトリと Organization のポリシーの設定、および送信メール用の SMTP の設定が含まれます。 詳しい情報については、「[{% data variables.product.prodname_ghe_managed %} を初期化する](/admin/configuration/initializing-github-ae)」を参照してください。

後で、サイトアドミンのダッシュボードと Enterprise 設定を使用して、さらに Enterprise の設定を行い、ユーザ、Organization、およびリポジトリを管理し、リスクを軽減して品質を向上させるポリシーを設定できます。

すべての Enterprise は、Subdomain Isolation と、暗号化されたトラフィックに対してのみ TLS1.2 以降をサポートするように設定されています。
{% endif %}

## 参考リンク

- 「[ユーザ、Organization、リポジトリを管理する](/admin/user-management)」
- 「[Enterprise のポリシーを設定する](/admin/policies)」
