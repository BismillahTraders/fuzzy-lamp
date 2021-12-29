---
title: 'Error: Permission to user/repo denied to user/other-repo'
intro: このエラーは、プッシュに使用しているキーが、他のリポジトリにデプロイキーとして添付されており、プッシュ先のリポジトリへのアクセス権がないことを示しています。
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
---

これを解決するには、リポジトリからデプロイキーを削除し、代わりに[キーを自分のユーザアカウントに追加](/articles/adding-a-new-ssh-key-to-your-github-account)します。

使用中のキーが、デプロイキーとしての使用が意図されたものである場合は、[デプロイキーのガイド](/guides/managing-deploy-keys)で詳細をご確認ください。
