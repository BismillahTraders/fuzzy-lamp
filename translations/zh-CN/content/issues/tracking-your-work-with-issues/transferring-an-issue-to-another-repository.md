---
title: 将议题转让给其他仓库
intro: 要移动议题以更好地过滤仓库，您可以将开放的议题转让给其他仓库。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 转移议题
---

To transfer an open issue to another repository, you must have write access to the repository the issue is in and the repository you're transferring the issue to. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

您只能在同一用户或组织帐户拥有的仓库之间转让议题。 {% ifversion fpt or ghes or ghec %}你不能将议题从私有仓库转移到公共仓库。{% endif %}

转让议题时，评论和受理人将保留。 不会保留议题的标签和里程碑。 此议题将留在任何用户拥有或组织范围的项目板上，并从任何仓库项目板中删除。 更多信息请参阅“[关于项目板](/articles/about-project-boards)”。

议题中提及的人员或团队将收到通知，告知他们该议题已转让给新仓库。 原来的 URL 会重定向到新议题的 URL。 在新仓库中没有读取权限的人员将看到一个横幅，告知他们该议题已转让给他们无法访问的新仓库。

## 将开放的议题转让给其他仓库

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. 在议题列表中，单击您想要转让的议题。
4. 在右侧边栏中，单击 **Transfer issue（转让议题）**。 ![转让议题的按钮](/assets/images/help/repository/transfer-issue.png)
5. 使用 **Choose a repository（选择仓库）**下拉菜单，并选择议题要转让到的仓库。 ![选择仓库选择](/assets/images/help/repository/choose-a-repository.png)
6. 单击 **Transfer issue（转让议题）**。 ![转让议题按钮](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To transfer an issue, use the `gh issue transfer` subcommand. Replace the `issue` parameter with the number or URL of the issue. Replace the `{% ifversion ghes %}hostname/{% endif %}owner/repo` parameter with the {% ifversion ghes %}URL{% else %}name{% endif %} of the repository that you want to transfer the issue to, such as `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## 延伸阅读

- “[关于议题](/articles/about-issues)”
- “[查看安全日志](/articles/reviewing-your-security-log)”
- “[查看组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”
