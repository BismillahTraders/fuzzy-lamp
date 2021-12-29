---
title: About billing for your enterprise
intro: You can view billing information for your enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Once per day, {% data variables.product.prodname_dotcom %} will count the number of users with a license for your enterprise. {% data variables.product.company_short %} bills you for each licensed user regardless of whether the user logged into {% data variables.product.prodname_ghe_managed %} that day.

For commercial regions, the price per user per day is $1.2580645161. For 31-day months, the monthly cost for each user is $39. For months with fewer days, the monthly cost is lower. Each billing month begins at a fixed time on the first day of the calendar month.

If you add a licensed user mid-month, that user will only be included in the count for the days they have a license. When you remove a licensed user, that user will remain in the count until the end of that month. Therefore, if you add a user mid-month and later remove the user in the same month, the user will be included in the count from the day the user was added through the end of the month. There is no additional cost if you re-add a user during the same month the user was removed.

For example, here are the costs for users with licenses on different dates.

User | License dates | Counted days | Cost
---- | ------------ | ------- | -----
@octocat | January 1 - January 31 | 31 | $39
@robocat | February 1 - February 28 | 28 | $35.23
@devtocat  | January 15 - January 31 | 17 | $21.39
@doctocat | January 1 - January 15 | 31 | $39
@prodocat | January 7 - January 15 | 25 | $31.45
@monalisa | January 1 - January 7,<br>January 15 - January 31 | 31 | $39

{% data variables.product.prodname_ghe_managed %} has a 500-user minimum per instance. {% data variables.product.company_short %} bills you for a minimum of 500 users per instance, even if there are fewer than 500 users with a license that day.

You can see your current usage in your [Azure account portal](https://portal.azure.com).

{% elsif ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.company_short %} bills monthly for the total number of members in your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Each user on {% data variables.product.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} For more information about usage and invoices, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and {% ifversion ghes %}"[Managing invoices for your enterprise](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}"[Managing invoices for your enterprise](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)."{% endif %}

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise.

{% ifversion ghec %}

Each member of your enterprise account with a unique email address consumes a license. Billing managers do not consume a license. Each outside collaborator on a private repository that an organization in your enterprise owns consumes a license, unless the private repository is a fork. Each invitee to your enterprise account, including owners, members of organizations, and outside collaborators, consume a license. For more information about roles in an enterprise account, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[Inviting people to manage your enterprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% ifversion ghec %}
{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

## About synchronization of license usage

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see {% ifversion ghec %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

{% endif %}

## Further reading

- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"{% ifversion ghec or ghes %}
- "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
