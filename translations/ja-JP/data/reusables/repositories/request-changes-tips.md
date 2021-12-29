{% tip %}

**ヒント**:
- 必須レビューが有効化されており、リポジトリへの_書き込み_、_管理_、_オーナー_のいずれかの権限を持つコラボレータがレビューを要求する変更をサブミットすると、そのプルリクエストは同じコラボレータがプルリクエスト中の変更を承認する他のレビューをサブミットするまではマージできません。
- リポジトリのオーナーと管理者は、プルリクエストが承認レビューを受けていなかったり、あるいは変更をリクエストしたレビュー担当者がOrganizationを離れていたりアクセスできなくなっている場合でも、プルリクエストをマージできます。
- 必須レビューと古いレビューの棄却がどちらも有効化されており、承認済みのプルリクエストのブランチにコードを変更するコミットがプッシュされた場合、その承認は却下されます。 そのプルリクエストは、再度レビューされ承認されるまではマージできません。
- 同じコミットを指す複数のオープンされたプルリクエストがあり、それぞれがheadブランチを持つ場合、いずれかがペンディングあるいは拒否されたレビューを持っているなら、それらはマージできません。
- If your repository requires approving reviews from people with write or admin permissions, then any approvals from people with these permissions are denoted with a green check mark, and approvals from people without these permissions have a gray check mark. Approvals with a gray check mark do not affect whether the pull request can be merged.
- Pull Requestの作者は、自分自身のPull Requestを承認することはできません。

{% endtip %}
