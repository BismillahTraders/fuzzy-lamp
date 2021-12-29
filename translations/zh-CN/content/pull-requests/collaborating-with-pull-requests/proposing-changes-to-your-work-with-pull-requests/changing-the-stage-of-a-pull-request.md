---
title: 更改拉取请求的阶段
intro: '您可以将拉取请求草稿标记为可供审查{% ifversion fpt or ghae or ghes or ghec %}或将拉取请求转换为草稿{% endif %}。'
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 更改状态
---

## 将拉取请求草稿标记为可供审查

{% data reusables.pull_requests.mark-ready-review %}

{% ifversion fpt or ghae or ghes or ghec %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 将拉取请求标记为可供审查。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh pr 准备`](https://cli.github.com/manual/gh_pr_ready)”。

{% endtip %}
{% endif %}

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要标记为可供审查的拉取请求。
3. 在合并框中，单击 **Ready for review（可供审查）**。 ![可供审查按钮](/assets/images/help/pull_requests/ready-for-review-button.png)

{% ifversion fpt or ghae or ghes or ghec %}

## 将拉取请求转换为草稿

您可以随时将拉取请求转换为草稿。 例如，如果您意外打开了拉取请求而不是草稿，或者收到了需要解决的关于拉取请求的反馈，则可将拉取请求转换为草稿，以表示需要进一步更改。 再次将拉取请求标记为可供审查之前，任何人都不能合并拉取请求。 将拉取请求转换为草稿时，已订阅拉取请求通知的用户将不会取消订阅。

{% data reusables.repositories.sidebar-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要转换为草稿的拉取请求。
3. 在右侧边栏中的“Reviewers（审查者）”下下单击 **Convert to draft（转换为草稿）**。 ![转换为草稿链接](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. 单击 **Convert to draft（转换为草稿）**。 ![转换为草稿确认](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

## 延伸阅读

- "[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
