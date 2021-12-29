---
title: 分析仓库内容的更改
intro: 您可以分析仓库的提交、提交频率以及内容的增补和删除，以了解仓库内容的更改。
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
---

## 可视化仓库中的提交

您可以在提交图中查看过去一年里对仓库进行的所有提交（不包括合并提交）。

顶部的图表按周显示整年的提交。

![仓库提交年图](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

底部图表显示所选周按星期几的平均提交数。

![仓库提交周图](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### 访问提交图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击 **Commits（提交）**。 ![提交选项卡](/assets/images/help/graphs/commits_tab.png)

## Visualizing additions and deletion to content in a repository

代码频率图显示仓库历史记录中每周的内容添加和删除。

{% ifversion fpt or ghec %}

![代码频率图](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### 访问代码频率图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击 **Code frequency（代码频率）**。 ![代码频率选项卡](/assets/images/help/graphs/code_frequency_tab.png)
