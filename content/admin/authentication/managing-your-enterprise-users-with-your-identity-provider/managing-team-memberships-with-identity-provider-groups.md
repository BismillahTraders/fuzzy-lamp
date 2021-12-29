---
title: Managing team memberships with identity provider groups
shortTitle: Manage teams with your IdP
intro: 'You can manage team membership on {% data variables.product.product_name %} through your identity provider (IdP) by connecting IdP groups with your {% data variables.product.prodname_emu_enterprise %}.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
---

## About team management with {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, you can manage team membership within your enterprise through your IdP. When you connect a team in one of your enterprise's organizations to an IdP group, changes to membership from the IdP group are reflected in your enterprise automatically, reducing the need for manual updates and custom scripts. 

When a change to an IdP group or a new team connection results in a {% data variables.product.prodname_managed_user %} joining a team in an organization they were not already a member of, the {% data variables.product.prodname_managed_user %} will automatically be added to the organization. Organization owners can also manage organization membership manually. When you disconnect a group from a team, users who became members of the organization via team membership are removed from the organization if they are not assigned membership in the organization by any other means.

You can connect a team in your enterprise to one IdP group. You can assign the same IdP group to multiple teams in your enterprise.

If you are connecting an existing team to an IdP group, you must first remove any members that were added manually. After you connect a team in your enterprise to an IdP group, your IdP administrator must make team membership changes through the identity provider. You cannot manage team membership on {% data variables.product.prodname_dotcom_the_website %}.

When group membership changes on your IdP, your IdP sends a SCIM request with the changes to {% data variables.product.prodname_dotcom_the_website %} according to the schedule determined by your IdP, so change may not be immediate. Any requests that change team or organization membership will register in the audit log as changes made by the account used to configure user provisioning.

Teams connected to IdP groups cannot be parents of other teams nor a child of another team. If the team you want to connect to an IdP group is a parent or child team, we recommend creating a new team or removing the nested relationships that make your team a parent team.

To manage repository access for any team in your enterprise, including teams connected to an IdP group, you must make changes on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

## Creating a new team connected to an IdP group

Any member of an organization can create a new team and connect the team to an IdP group. 

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
1. To connect a team, select the "Identity Provider Groups" drop-down menu and click the team you want to connect.
    ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png)
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}

## Managing the connection between an existing team and an IdP group

Organization owners and team maintainers can manage the existing connection between an IdP group and a team.

{% note %}

**Note**: Before you connect an existing team on {% data variables.product.prodname_dotcom_the_website %} to an IdP group for the first time, all members of the team on {% data variables.product.prodname_dotcom_the_website %} must first be removed. For more information, see "[Removing organization members from a team](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)."

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
1. Optionally, under "Identity Provider Group", to the right of the IdP group you want to disconnect, click {% octicon "x" aria-label="X symbol" %}. 
    ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. To connect an IdP group, under "Identity Provider Group", select the drop-down menu, and click an identity provider group from the list.
    ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Click **Save changes**.

## Viewing IdP groups and connected teams

You can review a list of IdP groups, any teams connected to an IdP group, and see the membership of each IdP group on {% data variables.product.product_name %}. You must edit the membership for a group on your IdP.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.identity-provider-tab %}
1. Under "Identity Provider (IdP) Groups", review the list of IdP groups.
