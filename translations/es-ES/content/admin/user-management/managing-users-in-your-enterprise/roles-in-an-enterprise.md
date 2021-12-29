---
title: Roles in an enterprise
intro: 'Everyone in an enterprise is a member of the enterprise. To control access to your enterprise''s settings and data, you can assign different roles to members of your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
---

## About roles in an enterprise

Everyone in an enterprise is a member of the enterprise. You can also assign administrative roles to members of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %}
If your enterprise does not use {% data variables.product.prodname_emus %}, you can invite someone to an administrative role using a user account on {% data variables.product.product_name %} that they control. For more information, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

In an enterprise using {% data variables.product.prodname_emus %}, new owners and members must be provisioned through your identity provider. Enterprise owners and organization owners cannot add new members or owners to the enterprise using {% data variables.product.prodname_dotcom %}. You can select a member's enterprise role using your IdP and it cannot be changed on {% data variables.product.prodname_dotcom %}. You can select a member's role in an organization on {% data variables.product.prodname_dotcom %}. For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% else %}
For more information about adding people to your enterprise, see "[Authentication](/admin/authentication)".

{% endif %}

## Enterprise owner

Enterprise owners have complete control over the enterprise and can take every action, including:
- Managing administrators
- {% ifversion ghec %}Adding and removing {% elsif ghae or ghes %}Managing{% endif %} organizations {% ifversion ghec %}to and from {% elsif ghae or ghes %} in{% endif %} the enterprise
- Managing enterprise settings
- Enforcing policy across organizations
{% ifversion ghec %}- Managing billing settings{% endif %}

Enterprise owners cannot access organization settings or content unless they are made an organization owner or given direct access to an organization-owned repository. Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.

An enterprise owner will only consume a license if they are an owner or member of at least one organization within the enterprise. {% ifversion ghec %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

## Enterprise members

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% ifversion ghec %}, including billing settings{% endif %}.

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. You can view the resources that each person has access to. For more information, see "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

For more information about organization-level permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's People tab, but are not enterprise members and do not have any access to the enterprise. For more information about outside collaborators, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

{% ifversion ghec %}

## Billing manager

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- View and manage user licenses, {% data variables.large_files.product_name_short %} packs and other billing settings
- View a list of billing managers
- Add or remove other billing managers

Billing managers will only consume a license if they are an owner or member of at least one organization within the enterprise. Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. Billing managers must have a personal account on {% data variables.product.prodname_dotcom %}.

## About support entitlements

{% data reusables.enterprise-accounts.support-entitlements %}

## Further reading

- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"

{% endif %}
