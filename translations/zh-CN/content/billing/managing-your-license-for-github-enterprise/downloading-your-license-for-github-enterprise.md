---
title: Downloading your license for GitHub Enterprise
intro: 'You can download a copy of your license file for {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must download your new license file. For more information about licenses for {% data variables.product.prodname_enterprise %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Downloading your license from {% data variables.product.prodname_dotcom_the_website %}

You must have an enterprise account on {% data variables.product.prodname_dotcom_the_website %} to download your license from {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About enterprise accounts](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 在“Enterprise Server Instances（企业服务器实例）”下，单击 {% octicon "download" aria-label="The download icon" %} 下载您的许可文件。 ![下载 GitHub Enterprise Server 许可](/assets/images/help/business-accounts/download-ghes-license.png)

After you download your license file, you can upload the file to {% data variables.product.product_location_enterprise %} to validate your application. For more information, see {% ifversion ghec %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

## Downloading your license if you don't have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}

If you do not have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, or if you're not sure, you may be able to download your {% data variables.product.prodname_ghe_server %} license from the [{% data variables.product.prodname_enterprise %} website](https://enterprise.github.com/download).

If you have any questions about downloading your license, contact {% data variables.contact.contact_enterprise_sales %}.
