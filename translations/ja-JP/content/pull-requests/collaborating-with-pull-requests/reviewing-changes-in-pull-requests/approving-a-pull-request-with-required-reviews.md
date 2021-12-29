---
title: 必須レビューでのプルリクエストの承認
intro: リポジトリでレビューが必須になっているなら、プルリクエストがマージできるようになるためには、リポジトリに _書き込み_ あるいは _管理_ 権限を持つ人からの承認レビューが指定された数だけ必要です。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 必須のレビュー
---

必須レビューに関する詳しい情報については「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」を参照してください。

プルリクエストにコメントしたり、変更を承認したり、承認に先立って改善をリクエストしたりできます。 詳細は「[プルリクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」を参照してください。

{% data reusables.search.requested_reviews_search %}

{% tip %}

**参考**: 承認したプルリクエストが大きく変更された場合、レビューを取り下げることができます。 そのプルリクエストは、マージする前に新しいレビューが必要になります。 詳しい情報については[プルリクエストレビューの却下](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)を参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. プルリクエスト内の変更をレビューし、[特定の行にコメント](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review)することもできます。
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. [**Approve**] を選択して、プルリクエスト中で提案された変更のマージを承認します。
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 参考リンク

- 「[プルリクエストで提案された変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)」
- 「[プルリクエストへコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」
