---
title: Organization
intro: 'The Organizations API gives you access to control and manage all your {% data variables.product.product_name %} organizations.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/orgs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec %}
## ユーザのブロック

Organization に対するブロック呼び出しを実行するには、呼び出しの認証に使用するトークンに `admin:org` が必要です。 それがない場合には、`HTTP 404` が返されます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## メンバー

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 外部コラボレーター

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'outside-collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghes > 3.4  %}
## Custom repository roles

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'custom_roles' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## webhook

Organization webhooks allow you to receive HTTP `POST` payloads whenever certain events happen in an organization. {% data reusables.webhooks.webhooks-rest-api-links %}

サブスクライブできるアクションの詳細は、「[{% data variables.product.prodname_dotcom %} のイベントタイプ](/developers/webhooks-and-events/github-event-types)」を参照してください。

### スコープと制限事項

Organization の webhook に対するすべてのアクションでは、認証ユーザが管理対象の Organization の管理者である必要があります。 また、OAuth トークンには `admin:org_hook` スコープが必要です。 詳しい情報については、「[OAuth App のスコープ](/developers/apps/scopes-for-oauth-apps)」を参照してください。

webhook 設定に存在する可能性がある機密データを保護するために、次のアクセス制御ルールも適用します。

- OAuth アプリケーションが、それによって作成されたのではない webhook をリスト、表示、編集することはできません。
- OAuth アプリケーションによって作成された webhook をユーザがリスト、表示、編集することはできません。

### webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

その他のベストプラクティスについては、[ガイド](/guides/best-practices-for-integrators/)を参照してください。

#### webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 詳細は「[webhook ヘッダー](/webhooks/event-payloads/#delivery-headers)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}
