---
title: Habilitar la sincronización automática de licencias de usuario entre el servidor de GitHub Enterprise y GitHub Enterprise Cloud
intro: 'Puedes conectar {% data variables.product.product_location_enterprise %} a {% data variables.product.prodname_ghe_cloud %} y permitir que {% data variables.product.prodname_ghe_server %} cargue información de licencias de usuario en tu cuenta de empresa en {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Habilitar la sincronización de licencias de usuario
---

## Acerca de la sincronización de licencias

Después de que habilitas la sincronización de licencias, podrás ver el uso de licencias para toda tu cuenta empresarial, a través de {% data variables.product.prodname_ghe_server %} y de {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} sincroniza la licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %} semanalmente. Paa obtener más información, consulta la sección "[Administrar tu licencia de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

También puedes cargar en forma manual información de licencias de usuario {% data variables.product.prodname_ghe_server %} en {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Conectar tu cuenta empresarial a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

## Habilitar la sincronización de licencias

Antes de habilitar la sincronización de licencias en {% data variables.product.product_location_enterprise %}, debes conectar {% data variables.product.product_location_enterprise %} a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Conectar tu cuenta empresarial a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. En "El servidor puede sincronizar el recuento y uso de licencias de usuario", usa el menú desplegable y selecciona **Enabled** (Habilitado). ![Menú desplegable para habilitar la sincronización automática de licencias de usuario](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
