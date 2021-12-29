---
title: フォークから作成されたプルリクエストブランチへの変更を許可する
intro: コラボレーションを強化するために、ユーザアカウントが所有するフォークから作成したブランチでのコミットを許可します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a user account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
---

プルリクエストの作者だけが、上流のリポジトリメンテナ、あるいは上流のリポジトリへのプッシュアクセスを持っている人に対し、ユーザ所有のフォークでプルリクエストの比較ブランチにコミットする権限を与えることができます。 上流リポジトリについて詳しく学ぶには[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)を参照してください。

プルリクエストの作者は、ユーザが所有するフォークからプルリクエストを最初に作成するとき、またはプルリクエストを作成した後に、これらの権限を与えることができます。 詳しい情報については、「[フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。

最初にフォークからプルリクエストを作成する時に、コミットの権限を設定できます。 詳しい情報については、「[フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。 加えて、既存のプルリクエストを変更して、リポジトリメンテナがそのブランチにコミットできるようにすることもできます。

## 既存のプルリクエストへのリポジトリメンテナの権限の有効化

1. {% data variables.product.product_name %}で、プルリクエストの上流リポジトリのメインページにアクセスします。
2. 上流リポジトリの名前の下で、{% octicon "git-pull-request" aria-label="The pull request icon" %}[**Pull request**] をクリックします。 ![Issue とプルリクエストのタブの選択](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. プルリクエストのリストの中で、コミットを許可するプルリクエストを見つけます。
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![メンテナに変更を許可するサイドバーのチェックボックス](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## 参考リンク

- [フォークから作成されたプルリクエストブランチへの変更のコミット](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)
