---
title: 移除高可用性副本
intro: '您可以暂时停止对 {% data variables.product.prodname_ghe_server %} 副本的复制，也可以永久地移除复制。'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
  - /admin/enterprise-management/removing-a-high-availability-replica
versions:
  ghes: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
shortTitle: 删除 HA 副本
---

## 暂时停止复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在您希望暂时停止复制的副本上，运行 ghe-repl-stop。
  ```shell
  $ ghe-repl-stop
  ```
3. 要再次开始复制，请运行 `ghe-repl-start`。
  ```shell
  $ ghe-repl-start
  ```

## 永久移除复制

1. 如有必要，移除副本的 Geo DNS 条目，使 Geo-replication 副本停止提供用户流量。
2. 在您希望移除复制的副本上，运行 `ghe-repl-stop`。
  ```shell
  $ ghe-repl-stop
  ```
3. 在副本上，要移除复制状态，请运行 `ghe-repl-teardown`。
  ```shell
  $ ghe-repl-teardown
  ```

  {% ifversion ghes %}
  {% note %}

  **注：**如果您已启用 {% data variables.product.prodname_actions %} ，则应取消前一个副本服务器的功能，或更新其 {% data variables.product.prodname_actions %} 配置，以使用不同的外部存储。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的高可用性](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)”。

  {% endnote %}
  {% endif %}
