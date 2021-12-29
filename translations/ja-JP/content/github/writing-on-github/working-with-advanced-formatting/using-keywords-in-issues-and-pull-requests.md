---
title: Using keywords in issues and pull requests
intro: Use keywords to link an issue and pull request or to mark an issue or pull request as a duplicate.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
---

## プルリクエストをIssueにリンクする

To link a pull request to an issue to{% ifversion fpt or ghes or ghae or ghec %} show that a fix is in progress and to{% endif %} automatically close the issue when someone merges the pull request, type one of the following keywords followed by a reference to the issue. For example, `Closes #10` or `Fixes octo-org/octo-repo#100`.

* close
* closes
* closed
* fix
* fixes
* fixed
* 解決
* resolves
* resolved

詳しい情報については「[プルリクエストのIssueへのリンク](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

## Marking an issue or pull request as a duplicate

Issueあるいはプルリクエストに重複としてマーク付けをするには、新たなコメントの本文に"Duplicate of"に続けて重複のIssueあるいはプルリクエストの番号を入力してください。 For more information, see "[Marking issues or pull requests as a duplicate](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)."
