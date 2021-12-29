---
title: パッケージを公開する
intro: '{% data variables.product.prodname_registry %}にパッケージを公開し、そのパッケージを他者がダウンロードして再利用できるようにすることができます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## 公開されたパッケージについて

パッケージページ上のインストール及び利用方法の説明といった、説明やその他の詳細を提供することによって、パッケージを理解して利用しやすくできます。 {% data variables.product.product_name %} は各バージョンについて、公開日、ダウンロードのアクティビティ、最近のバージョンなどのメタデータを提供します。 パッケージページの例としては、[@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1)を参照してください。

{% data reusables.package_registry.public-or-private-packages %} リポジトリは複数のパッケージに接続できます。 混乱を避けるため、READMEと説明で各パッケージに関する情報を明確に提供してください。

{% ifversion fpt or ghec %}
新しいバージョンのパッケージでセキュリティの脆弱性が解決される場合は、リポジトリでセキュリティアドバイザリを公開する必要があります。
{% data variables.product.prodname_dotcom %} は公開された各セキュリティアドバイザリを確認し、それを使用して、影響を受けるリポジトリに {% data variables.product.prodname_dependabot_alerts %} を送信できます。 詳しい情報については、「[GitHub セキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」 を参照してください。
{% endif %}

## パッケージを公開する

You can publish a package to {% data variables.product.prodname_registry %} using any {% ifversion fpt or ghae or ghec %}supported package client{% else %}package type enabled for your instance{% endif %} by following the same general guidelines.

1. 実行したいタスクに対して適切なスコープを持つ既存のアクセストークンを作成もしくは利用してください。 詳しい情報については「[{% data variables.product.prodname_registry %}の権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」を参照してください。
2. 使用するパッケージクライアントについての指示に従って、アクセストークンを使って{% data variables.product.prodname_registry %}の認証をしてください。
3. 使用するパッケージクライアントに関する指示に従って、パッケージを公開してください。

使用するパッケージクライアント固有の指示については「[GitHub Packagesレジストリの利用](/packages/working-with-a-github-packages-registry)」を参照してください。

パッケージを公開した後は、{% data variables.product.prodname_dotcom %}上でそのパッケージを見ることができます。 詳しい情報については「[パッケージの表示](/packages/learn-github-packages/viewing-packages)」を参照してください。
