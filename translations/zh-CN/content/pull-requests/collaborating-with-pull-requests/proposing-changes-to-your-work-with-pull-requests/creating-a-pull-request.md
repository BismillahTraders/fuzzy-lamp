---
title: 创建拉取请求
intro: 创建拉取请求以提议和协作处理对仓库的更改。 这些更改在*分支*中提议，以确保默认分支只包含已完成和已批准的工作。
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. 更多信息请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”和“[关于复刻](/articles/about-forks)”。

您可以在创建拉取请求时指定要将更改合并到哪个分支。 拉取请求只能在不同的两个分支之间打开。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## 更改分支范围和目标仓库

默认情况下，拉取请求基于父仓库的默认分支。 更多信息请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

如果默认父仓库不正确，您可以使用下拉列表更改父仓库和分支， 还可以使用下拉列表交换头部分支和基本分支，以确定引用点之间的差异。 这里的引用必须是 GitHub 仓库中的分支名称。

![拉取请求编辑分支](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

考虑分支时，请记住，*基础分支*是应该应用更改的**位置**，*头部分支*包含要应用的**内容**。

更改基本仓库时，也会更改关于拉取请求的通知。 每个对基本仓库有推送权限的人都会收到电子邮件通知，他们下次登录时会在仪表板上看到新的拉取请求。

更改分支范围中的任何信息时，提交和文件更改预览区将更新以显示您的新范围。

{% tip %}

**提示**：
- 使用比较视图可设置跨任何时间范围的比较。 更多信息请参阅“[比较提交](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)”。
- 项目维护员可以为仓库添加拉取请求模板。 模板包括拉取请求正文中的信息提示。 更多信息请参阅“[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)”。

{% endtip %}

## 创建拉取请求

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. 在“Branch（分支）”菜单中，选择包含提交的分支。 ![分支下拉菜单](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. 使用 _base（基础）_分支下拉菜单选择要向其合并更改的分支，然后使用 _compare（比较）_分支下拉菜单选择进行了更改的主题分支。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

在拉取请求通过审查后，可将其[合并到仓库中](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建拉取请求，请使用 `gh pr create` 子命令。

```shell
gh pr create
```

要将拉取请求分配给个人，请使用 `--assigner` 或 `-a` 标记。 您可以使用 `@me` 自行分配拉取请求。

```shell
gh pr create --assignee "@octocat"
```

要指定您希望合并拉取请求的分支，请使用 `--base` 或 `-B` 标记。 要指定包含您的拉取请求提交的分支，请使用 `--head` 或 `-H` 标记。

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

要包含新的拉取请求的标题和正文，请使用 `--title` 和 `--body` 标记。

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

要将拉请求标记为草稿，请使用 `--draft` 标记。

```shell
gh pr create --draft
```

要在新的拉取请求中添加标签或里程碑，请使用 `--label` 和 `--milestone` 标记。

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

要将新的拉取请求添加到特定项目，请使用 `--project` 标志。

```shell
gh pr create --project octocat-project
```

要分配个人或团队作为审查者，请使用 `--reviewer` 标记。

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

要在默认的 Web 浏览器中创建拉取请求，请使用 `- web` 标记。

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. 切换到要为其创建拉取请求的分支。 更多信息请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击 **Create pull request（创建拉取请求）**。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。 ![创建拉取请求按钮](/assets/images/help/desktop/mac-create-pull-request.png)
4. 在 {% data variables.product.prodname_dotcom %} 上，确认 **base:** 下拉菜单中的分支是要合并更改的分支。 确认 **compare:** 下拉菜单中的分支是您进行了更改的主题分支。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 切换到要为其创建拉取请求的分支。 更多信息请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击 **Create pull request（创建拉取请求）**。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。 ![创建拉取请求按钮](/assets/images/help/desktop/windows-create-pull-request.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，确认 **base:** 下拉菜单中的分支是要合并更改的分支。 确认 **compare:** 下拉菜单中的分支是您进行了更改的主题分支。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. 将更改提交到仓库的本地副本后，请单击 **Create Pull Request（创建拉取请求）**图标。 ![高亮显示暂存按钮的源控制侧边栏](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. 检查作为合并来源的本地分支和仓库以及作为合并目标的远程分支和仓库是否正确。 然后为拉取请求提供标题和描述。 ![GitHub 拉取请求侧栏](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. 单击 **Create（创建）**。

有关在 {% data variables.product.prodname_codespaces %} 中创建拉取请求的更多信息，请参阅“[对拉取请求使用代码空间](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)”。

{% endcodespaces %}

{% endif %}
## 延伸阅读

- "[从复刻创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- “[更改拉取请求的基本分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)”
- “[从侧边栏向项目板添加议题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)”
- "[关于使用查询参数自动化议题和拉取请求](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[分配议题和拉取请求给其他 GitHub 用户](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[在 GitHub 上编写](/github/writing-on-github)"
