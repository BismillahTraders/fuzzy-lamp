---
title: プルリクエストをマージする
intro: 作業が完了したら、プルリクエストを上流ブランチにマージします。 リポジトリに対してプッシュアクセスを持つユーザなら誰でもマージを実行できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## プルリクエストのマージについて

プルリクエストでは、head ブランチに加えた変更をベースブランチにマージすることを提案します。 デフォルトでは、head ブランチがベースブランチとコンフリクトしていない限り、どのプルリクエストもいつでもマージできます。 ただし、プルリクエストを特定のブランチにマージできるタイミングには制限がある場合があります。 たとえば、必須のステータスチェックに合格した場合にのみ、プルリクエストをデフォルトブランチにマージできます。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)を参照してください。

{% data reusables.pull_requests.you-can-auto-merge %}

プルリクエストでマージコンフリクトが発生する場合、またはマージの前に変更をテストしたい場合は、コマンドラインを使用して、[プルリクエストをローカルでチェックアウト](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)してマージすることができます。

ドラフトのプルリクエストをマージすることはできません。 ドラフトのプルリクエストに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests#draft-pull-requests)」を参照してください。

プルリクエストをマージするとプルリクエストの head ブランチが自動的に削除されるようにリポジトリを設定できます。 詳しい情報については「[ブランチの自動削除の管理](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)」を参照してください。

{% note %}

**注釈:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
詳しい情報については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)」を参照してください。

{% endnote %}

プルリクエストは [`--no-ff` オプション](https://git-scm.com/docs/git-merge#_fast_forward_merge)を使用してマージされますが、[squash またはリベースされたコミット](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)は例外で、fast-forward オプションを使用してマージされます。

{% data reusables.pull_requests.close-issues-using-keywords %}

トピックブランチでの変更を上流ブランチにマージしたくなければ、マージせずに[プルリクエストをクローズする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)ことができます。

## プルリクエストをマージする

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、マージしたいプルリクエストをクリックします。
3. リポジトリで有効なマージオプションに応じて、以下の操作が可能です:
    - [**Merge pull request**] をクリックして、すべてのコミットを[ベース ブランチにマージ](/articles/about-pull-request-merges/)します。 [**Merge pull request**] オプションが表示されない場合は、マージのドロップダウン メニューをクリックして [**Create a merge commit**] をクリックします。 ![[Merge pull request] ボタン](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [複数のコミットを 1 つのコミットに squash する](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)には、マージのドロップダウン メニューをクリックして [**Squash and merge**] を選択し、[**Squash and merge**] ボタンをクリックします。 ![[Squash and merge] ボタンをクリック](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [コミットを個々にベース ブランチにリベースする](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)には、マージのドロップダウンをクリックして [**Rebase and merge**] を選択し、[**Rebase and merge**] ボタンをクリックします。 ![ドロップダウン メニューから [Rebase and merge] を選択](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **メモ:** リベースおよびコミットを行うと、常にコミッターの情報が更新され、新しいコミット SHA が作成されます。 詳細は「[プルリクエストのマージについて](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)」を参照してください。

    {% endnote %}
4. 要求されたら、コミットメッセージを入力するか、デフォルトのメッセージのままにします。

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Commit messageフィールド](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **注釈:** メールセレクタは、マージコミットを作成しないリベースマージ、またはプルリクエストを作成したユーザを squash コミットの作者としてクレジットする squash マージには使用できません。

   {% endnote %}

6. [**Confirm merge**]、[**Confirm squash and merge**] をクリックするか、[**Confirm rebase and merge**] をクリックします。
6. また、代わりに[ブランチを削除](/articles/deleting-unused-branches)することもできます。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To merge a pull request, use the `gh pr merge` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr merge <em>pull-request</em>
```

Follow the interactive prompts to complete the merge. For more information about the merge methods that you can choose, see "[About pull request merges](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

Alternatively, you can use flags to skip the interactive prompts. For example, this command will squash the commits into a single commit with the commit message "my squash commit", merge the squashed commit into the base branch, and then delete the local and remote branch.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## 参考リンク

- [Pull Request を元に戻す](/articles/reverting-a-pull-request)
- 「[{% data variables.product.prodname_desktop %} を使用してブランチを同期する](/desktop/guides/contributing-to-projects/syncing-your-branch/)」
- [プルリクエストのマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [マージコンフリクトへの対処](/github/collaborating-with-pull-requests/addressing-merge-conflicts)
