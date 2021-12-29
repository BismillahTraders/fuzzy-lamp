---
title: Gerenciar a publicação dos sites do GitHub Pages para a sua organização
intro: 'Você pode controlar se os integrantes da organização podem publicar sites de {% data variables.product.prodname_pages %} a partir de repositórios na organização{% ifversion fpt or ghec %} e restringir as visibilidades que os integrantes podem escolher para os sites{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar a publicação de sites de páginas
---

{% ifversion fpt or ghec %}
Se sua organização usar {% data variables.product.prodname_ghe_cloud %}, você poderá optar por permitir que os integrantes da organização criem sites públicos ou privados, ambos ou nenhum. Caso contrário, você pode optar por permitir ou negar a publicação pública. Para obter mais informações sobre controle de acesso para sites de {% data variables.product.prodname_pages %}, consulte "[Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Se você não permitir a publicação de sites de {% data variables.product.prodname_pages %}, todos os sites publicados permanecerão publicados. Você pode remover manualmente a publicação do site. Para obter mais informações, consulte "[Cancelar a publicação de um site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}{% ifversion fpt or ghec %}
1. Em "Criação de páginas", selecione as visibilidades que você deseja permitir e desmarque as visibilidades que você não deseja permitir. ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Em "Criação de páginas", marque ou desmarque **Permitir que os integrantes publiquem sites**. ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}
1. Clique em **Salvar**.

## Leia mais

- "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
