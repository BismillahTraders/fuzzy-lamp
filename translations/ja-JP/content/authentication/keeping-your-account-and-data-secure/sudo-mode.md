---
title: Sudo モード
intro: '{% data variables.product.product_name %} は、メールアドレスの修正、第三者のアプリケーションの許可や新しい公開鍵の追加前、または、sudo でプロテクトされたアクションを開始する前に、パスワードを尋ねます。'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---

sudoでプロテクトされたアクションを実行したあとは、数時間アクションがない場合に限り、再認証を要求されます。 Sudo でプロテクトされたアクションを行った場合、このタイマーはリセットされます。

![Sudo モードダイアログ](/assets/images/help/settings/sudo_mode_popup.png)

## 参考リンク

- [Unix `sudo` コマンド](http://en.wikipedia.org/wiki/Sudo)
