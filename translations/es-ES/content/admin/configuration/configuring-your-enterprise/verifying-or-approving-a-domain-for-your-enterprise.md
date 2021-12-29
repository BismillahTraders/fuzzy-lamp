---
title: Verifying or approving a domain for your enterprise
shortTitle: Verify or approve a domain
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm the identity of organizations owned by your enterprise account. You can also approve domains where organization members can receive email notifications.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '>=3.2'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
---

## About verification of domains

You can confirm that the websites and email addresses listed on the profiles of any organization owned by your enterprise account are controlled by your enterprise by verifying the domains. Verified domains for an enterprise account apply to every organization owned by the enterprise account.

After you verify ownership of your enterprise account's domains, a "Verified" badge will display on the profile of each organization that has the domain listed on its profile. {% data reusables.organizations.verified-domains-details %}

Organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain.

After you verify domains for your enterprise account, you can restrict email notifications to verified domains for all the organizations owned by your enterprise account. For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

Even if you don't restrict email notifications for the enterprise account, if an organization owner has restricted email notifications for the organization, organization members will be able to receive notifications at any domains verified or approved for the enterprise account, in addition to any domains verified or approved for the organization. For more information about restricting notifications for an organization, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Organization owners can also verify additional domains for their organizations. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

## About approval of domains

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your enterprise account, you can restrict email notifications for activity within your enterprise account to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

{% ifversion ghec %}To receive email notifications, the owner of the user account must verify the email address on {% data variables.product.product_name %}. For more information, see "[Verifying your email address](/github/getting-started-with-github/verifying-your-email-address)."{% endif %}

Organization owners cannot see the email address or which user account is associated with an email address from an approved domain.

Organization owners can also approve additional domains for their organizations. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

## Verifying a domain for your enterprise account

To verify your enterprise account's domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ENTERPRISE-ACCOUNT` with the name of your enterprise account, and `example.com` with the domain you'd like to verify. You should see your new TXT record listed in the command output.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through four above to navigate to your enterprise account's approved and verified domains.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Optionally, after the "Verified" badge is visible on your organizations' profiles, delete the TXT entry from the DNS record at your domain hosting service.
![Verified badge](/assets/images/help/organizations/verified-badge.png)

## Approving a domain for your enterprise account

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Removing an approved or verified domain

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
    !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)
