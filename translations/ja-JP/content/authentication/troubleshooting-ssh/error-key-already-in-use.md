---
title: 'Error: Key already in use'
intro: このエラーは、他のアカウントやリポジトリにすでに追加されているキーを追加 (/articles/adding-a-new-ssh-key-to-your-github-account) しようとする場合に発生します。
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
---

## キーが使用されている場所を見つける

キーがすでに使用されている場所を判断するには、ターミナルを開いて `ssh` コマンドを入力します。 `-i` フラグを使用して、確認したいキーへのパスを提供します。

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# 特定の SSH キーを使用して {% data variables.product.product_location %}に接続
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

The *username* in the response is the account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} that the key is currently attached to. 応答が「username/repo」のようなものである場合は、キーがリポジトリに[*デプロイキー*](/guides/managing-deploy-keys#deploy-keys)として添付されています。


To force SSH to use only the key provided on the command line, use `-o` to add the `IdentitiesOnly=yes` option:

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## 問題の解決

問題を解決するには、まず別のアカウントやリポジトリからキーを削除し、[アカウントに追加](/articles/adding-a-new-ssh-key-to-your-github-account)します。

キーを転送する権限がなく、権限を持つユーザーに連絡できない場合は、キーペアを削除して[新しいキーペアを生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)します。

## デプロイキー

キーがリポジトリにデプロイキーとして一度添付されたら、他のリポジトリで使用することはできません。  デプロイキーの設定中にこのエラーが発生した場合は、「[デプロイキーの管理](/guides/managing-deploy-keys)」を参照してください。
