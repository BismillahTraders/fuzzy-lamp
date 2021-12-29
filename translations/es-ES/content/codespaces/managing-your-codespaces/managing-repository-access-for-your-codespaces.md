---
title: Managing repository access for your codespaces
shortTitle: Repository access
intro: 'You can manage the repositories that {% data variables.product.prodname_codespaces %} can access.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

 

When you enable access and security for a repository owned by your user account, any codespaces that are created for that repository will have read permissions to all other repositories you own. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository the codespace was opened for or specific repositories. You should only enable access and security for repositories you trust. 

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Access and security", select the setting you want for your user account.
  ![Radio buttons to manage trusted repositories](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. If you chose "Selected repositories", select the drop-down menu, then click a repository to allow the repository's codespaces to access other repositories you own. Repeat for all repositories whose codespaces you want to access other repositories you own.
  !["Selected repositories" drop-down menu](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Further Reading

- "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
