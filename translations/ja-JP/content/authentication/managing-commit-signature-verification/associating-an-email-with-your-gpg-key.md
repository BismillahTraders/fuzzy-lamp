---
title: GPG キーとメールの関連付け
intro: 'GPG キーは、コミッタのアイデンティティとマッチする {% data variables.product.product_name %} が検証済みのメールと関連づけられなければなりません。'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
---

{% note %}

If you're using a GPG key that matches your committer identity and your verified email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, then you can begin signing commits and signing tags.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. `gpg --edit-key GPG key ID` と入力してください。GPG key ID は使いたいキーの ID で置き換えてください。 以下の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. `gpg> adduid` と入力して、ユーザ ID の詳細を追加してください。
  ```shell
  $ gpg> adduid
  ```
6. プロンプトに従って、本名、メールアドレス、あればコメントを入力してください。 エントリーは、`N`、`C`、`E` を選択して変更できます。 {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %}詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. `O` を入力して選択した内容を確認してください。
8. キーのパスフレーズを入力してください。
9. `gpg> save` と入力して、変更した内容を保存します。
  ```shell
  $ gpg> save
  ```
10. `gpg --armor --export GPG key ID` と入力してください。GPG key ID は使いたいキーの ID で置き換えてください。 以下の例では、GPG キー ID は `3AA5C34371567BD2` です。
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # ASCII armor 形式で GPG キーを出力する
  ```
11. [GPG キーを GitHub アカウントに追加](/articles/adding-a-new-gpg-key-to-your-github-account)することで、GPG キーをアップロードしてください。

## 参考リンク

- [既存の GPG キーのチェック](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成](/articles/generating-a-new-gpg-key)
- [GPG キーで検証済みのメールアドレスを使う](/articles/using-a-verified-email-address-in-your-gpg-key)
- [GitHub アカウントへの新しい GPG キーの追加](/articles/adding-a-new-gpg-key-to-your-github-account)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
