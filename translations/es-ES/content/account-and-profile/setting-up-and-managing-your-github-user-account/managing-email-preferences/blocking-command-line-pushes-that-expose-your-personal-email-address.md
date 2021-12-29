---
title: Bloquear las inserciones de la línea de comando que muestran tu dirección de correo electrónico personal
intro: 'Si decidiste mantener tu dirección de correo electrónico privada al realizar operaciones basadas en la web, también puedes optar por bloquear las inserciones de la línea de comando que pueden exponer tu dirección de correo electrónico personal.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Subida de bloque con correo electrónico personal
---

Cuando subes las confirmaciones de la línea de comando, la dirección de correo electrónico que has [establecido en Git](/articles/setting-your-commit-email-address) están asociadas con tus confirmaciones. Si habilitas este ajuste, cad que subas información a GitHub, verificaremos la confirmación más reciente. Si el correo electrónico del autor de la confirmación es una dirección de correo electrónico privada en tu cuenta de GitHub, bloquearemos la subida y te alertaremos sobre la exposición de tu cuenta de correo electrónico privada.

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. Para que tu dirección de correo electrónico siga siendo privada en las confirmaciones desde la línea de comando, selecciona **Block command line pusses that expose my email** (Bloquear inserciones de la línea de comando que expone mi correo electrónico). ![Opción para bloquear las inserciones de la línea de comando que expone tus correos electrónicos](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## Leer más

- "[Establecer tu dirección de correo electrónico de confirmaciones](/articles/setting-your-commit-email-address)"
