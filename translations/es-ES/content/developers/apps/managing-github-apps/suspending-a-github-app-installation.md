---
title: Suspender la instalación de una GitHub App
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Suspender la instalación de una app
---

## Suspender una GitHub App

El integrador que mantiene y al que le pertenece la GitHub app, también llamado propietario de la GitHub App, puede suspender o dejar de suspender una instalación de la GitHub App utilizando las terminales de la API de REST con JWT. Para obtener más información, consulta la [API de REST para las GitHub Apps](/rest/reference/apps).

Las personas que han instalado una GitHub App, también llamadas propietarias de la instalación, solo podrán suspender o dejar de suspendar una GitHub App a través de la configuración de instalación de la app. Los propietarios de la instalación no pueden usar la API para suspender o dejar de suspender su instalación de la app.

Si el propietario de la {% data variables.product.prodname_github_app %} suspendió una instalación, los propietarios de dicha instalación no podrán dejar de suspender las instalaciones de la {% data variables.product.prodname_github_app %}. Sin embargo, los propietarios de la instalación pueden cambiar otros ajustes, tales como la selección del repositorio, mientras la app está suspendida.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Selecciona la {% data variables.product.prodname_github_app %} que quieres suspender. ![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Junto a la configuración de suspensión para la instalación, da clic en **Suspender** o en **Dejar de suspender**. ![Suspender una GitHub App](/assets/images/github-apps/suspend-a-github-app.png)
