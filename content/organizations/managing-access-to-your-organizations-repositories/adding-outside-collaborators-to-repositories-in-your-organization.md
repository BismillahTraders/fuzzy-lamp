---
title: Adding outside collaborators to repositories in your organization
intro: 'An *outside collaborator* is a person who isn''t explicitly a member of your organization, but who has Read, Write, or Admin permissions to one or more repositories in your organization.'
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
---

## About outside collaborators

{% data reusables.organizations.outside-collaborators-use-seats %}

An organization owner can restrict the ability to invite collaborators. For more information, see "[Setting permissions for adding outside collaborators](/articles/setting-permissions-for-adding-outside-collaborators)."

{% ifversion ghes %}
Before you can add someone as an outside collaborator on a repository, the person must have a user account on {% data variables.product.product_location %}. If your enterprise uses an external authentication system such as SAML or LDAP, the person you want to add must sign in through that system to create an account. If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site admin can create a user account for the person. For more information, see "[Using built-in authentication](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication#inviting-users)."
{% endif %}

{% ifversion not ghae %}
If your organization [requires members and outside collaborators to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), they must enable two-factor authentication before they can accept your invitation to collaborate on an organization repository.
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% ifversion fpt %}
To further support your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Adding outside collaborators to a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of person you want to invite, then click a name in the list of matches.
  ![Search field for typing the name of a person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the permissions to grant to the person, then click **Add NAME to REPOSITORY**.
  ![Selecting permissions for the person](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. In the left sidebar, click **Collaborators & teams**.
  ![Repository settings sidebar with Collaborators & teams highlighted](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Under "Collaborators", type the name of the person you'd like to give access to the repository, then click **Add collaborator**.
![The Collaborators section with the Octocat's username entered in the search field](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Next to the new collaborator's name, choose the appropriate permission level: *Write*, *Read*, or *Admin*.
![The repository permissions picker](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
