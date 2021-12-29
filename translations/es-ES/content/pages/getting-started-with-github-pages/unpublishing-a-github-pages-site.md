---
title: Anular la publicación de un sitio de Páginas de GitHub
intro: 'Puedes publicar tu sitio de {% data variables.product.prodname_pages %} para que éste deje de estar disponible.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Dejar de publicar el sitio de las páginas
---

## Anular la publicación de un sitio de proyecto

{% data reusables.repositories.navigate-to-repo %}
2. Si existe una rama de `gh-pages` en el repositorio, elimina la rama de `gh-pages`. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".
3. Si tu fuente de publicación fue la rama `gh-pages`, {% ifversion fpt or ghec %}pasa al paso 6{% else %}tu sitio ahora se dejó de publicar y puedes saltar al resto de los pasos{% endif %}.
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
5. Debajo de "{% data variables.product.prodname_pages %}", usa el menú desplegable **Source** (Fuente) y seleccionar **None** (Ninguno). ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

## Anular la publicación de un sitio de usuario o de organización

{% data reusables.repositories.navigate-to-repo %}
2. Borra la rama que estás utilizando como fuente de publicación, o borra todo el repositorio. Para obtener más información, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" y "[Eliminar un repositorio](/articles/deleting-a-repository)".
{% data reusables.pages.update_your_dns_settings %}
