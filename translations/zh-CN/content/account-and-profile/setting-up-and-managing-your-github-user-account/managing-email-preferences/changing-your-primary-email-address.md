---
title: 更改主电子邮件地址
intro: 您可以随时更改与您的用户帐户相关联的电子邮件地址。
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: 主电子邮件地址
---

{% note %}

如果要添加新电子邮件地址以设置为您的主电子邮件地址，请在“Add email address（添加电子邮件地址）”下，键入新的电子邮件地址，然后单击 **Add（添加）**。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
3. 如果要添加新电子邮件地址以设置为您的主电子邮件地址，请在“Add email address（添加电子邮件地址）”下，键入新的电子邮件地址，然后单击 **Add（添加）**。 ![添加其他电子邮件地址按钮](/assets/images/help/settings/add_another_email_address.png)
4. 在“Primary email address（主电子邮件地址）”下，使用下拉菜单，单击要设为主电子邮件地址的电子邮件地址，然后单击 **Save（保存）**。 ![设为主电子邮件地址按钮](/assets/images/help/settings/set_as_primary_email.png)
5. 要从您的帐户删除旧电子邮件地址，请在旧电子邮件地址旁边，单击 {% octicon "trash" aria-label="The trash symbol" %}。
{% ifversion fpt or ghec %}
6. 验证新的主电子邮件地址。 如果没有经验证的电子邮件地址，您将无法使用 {% data variables.product.product_name %} 的所有功能。 更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。
{% endif %}
