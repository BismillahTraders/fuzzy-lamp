---
title: 管理分支的自动删除
intro: 您可让头部分支在仓库中的拉取请求合并后自动删除。
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 自动删除分支
---

对仓库具有管理员权限的任何人都可启用或禁用分支的自动删除。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Merge（合并）”按钮下，选择或取消选择 **Automatically delete head branches（自动删除头部分支）**。 ![启用或禁用分支自动删除的复选框](/assets/images/help/repository/automatically-delete-branches.png)

## 延伸阅读
- "[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
- “[在仓库内创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository)”
