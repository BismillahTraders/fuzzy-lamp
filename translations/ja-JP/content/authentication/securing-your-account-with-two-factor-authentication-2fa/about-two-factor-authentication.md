---
title: 2 要素認証について
intro: '{% data reusables.two_fa.about-2fa %} 2FA では、ユーザ名とパスワードを使用してログインし、さらに自分だけが知っている、または利用できる別の形式の認証でログインする必要があります。'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
---

{% data variables.product.product_name %}では、2 番目の形態の認証は、モバイルデバイス上のアプリケーションで生成された{% ifversion fpt or ghec %}、もしくはテキストメッセージ (SMS) で送信された{% endif %}コードです。 After you enable 2FA, {% data variables.product.product_name %} generates an authentication code any time someone attempts to sign into your account on {% data variables.product.product_location %}. 誰かがアカウントサインインできるのは、パスワードを知っており、電話上の認証コードも利用できる場合のみです。

{% data reusables.two_fa.after-2fa-add-security-key %}

2 要素認証の認証情報にアクセスできなくなった場合に備えて、追加のリカバリ方法を設定することもできます。 2FA のセットアップに関する詳しい情報については[2 要素認証の設定](/articles/configuring-two-factor-authentication)および[2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)を参照してください。

アカウントの安全のため、{% data variables.product.product_name %} だけでなく、2FA をサポートする他の Web サイトやアプリケーションでも、2FA を有効にすることを**強く**お勧めします。 2FA が {% data variables.product.product_name %} および {% data variables.product.prodname_desktop %} にアクセスできるようにすることができます。

詳しい情報については [2 要素認証を用いた {% data variables.product.prodname_dotcom %}へのアクセス](/articles/accessing-github-using-two-factor-authentication)を参照してください。

## 2 要素認証のリカバリコード

{% data reusables.two_fa.about-recovery-codes %}詳しい情報については [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% ifversion fpt or ghec %}

{% warning %}

**警告**: {% data reusables.two_fa.support-may-not-help %}詳しい情報については [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% endwarning %}

{% endif %}

## Organization で 2 要素認証を要求する

Organization のオーナーは、Organization のメンバー{% ifversion fpt or ghec %}、支払いマネージャー{% endif %}および外部のコラボレータが個人アカウントをセキュアに保つために 2 要素認証を使うことを要求できます。 詳しい情報については [Organization で 2 要素認証を要求する](/articles/requiring-two-factor-authentication-in-your-organization)を参照してください。

{% data reusables.two_fa.auth_methods_2fa %}
