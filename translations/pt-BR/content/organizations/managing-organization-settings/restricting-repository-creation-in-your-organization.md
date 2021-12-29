---
title: Restricting repository creation in your organization
intro: 'To protect your organization''s data, you can configure permissions for creating repositories in your organization.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
---

You can choose whether members can create repositories in your organization. If you allow members to create repositories, you can choose which types of repositories members can create.{% ifversion fpt or ghec %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %}{% ifversion fpt %} For more information, see "[About repositories](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)" in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

Organization owners can always create any type of repository.
{% ifversion ghec or ghae or ghes %}
{% ifversion ghec or ghae %}Enterprise owners{% elsif ghes %}Site administrators{% endif %} can restrict the options you have available for your organization's repository creation policy.{% ifversion ghec or ghes or ghae %} For more information, see "[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}{% endif %}

{% warning %}

**Warning**: This setting only restricts the visibility options available when repositories are created and does not restrict the ability to change repository visibility at a later time. For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options.

   {%- ifversion ghes or ghec or ghae %}
   ![Repository creation options](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![Repository creation options](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}
6. Click **Save**.
