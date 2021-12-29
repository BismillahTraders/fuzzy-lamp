---
title: Acerca de la configuración empresarial
intro: 'Puedes utilizar el panel de administrador de sitio{% ifversion ghes %}, {% data variables.enterprise.management_console %}, y el shell administrativo (SSH) {% elsif ghae %} y la configuración empresarial o contactar a soporte{% endif %} para administrar tu empresa.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: Acerca de la configuración
---

{% ifversion ghes %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Para obtener más información, consulta la sección "[Panel de administrador de sitio](/admin/configuration/site-admin-dashboard)".

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/accessing-the-management-console)".

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Para obtener más información, consulta la sección "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
{% endif %}

{% ifversion ghae %}
La primera vez que accedes a tu empresa, completarás una configuración inicial para obtener {% data variables.product.product_name %} listo para utilizarse. La configuración inicial incluye la conexión de tu empresa con un proveedor de identidad (IdP), autenticarte con el SSO de SAML, configurar políticas para repositorios y organizaciones en tu empresa y configurar el SMTP para el correo electrónico externo. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Posteriormente, puedes utilizar el panel de administrador de sitio y la configuración empresarial para seguir configurando tu empresa, administrar usuarios, organizaciones y repositorios, y para configurar políticas que reducen los riesgos e incrementan la calidad.

Todas las empresas se configuran con aislamiento de subdominios y compatibilidad con TLS 1.2 y superior únicamente para el tráfico cifrado.
{% endif %}

## Leer más

- "[Administrar usuarios, organizaciones y repositorios](/admin/user-management)"
- "[Configurar políticas para tu empresa](/admin/policies)"
