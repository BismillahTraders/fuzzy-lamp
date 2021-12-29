- [Minimum requirements](#minimum-requirements)
- [Storage](#storage)
- [CPU and memory](#cpu-and-memory)

### Minimum requirements

We recommend different hardware configurations depending on the number of user licenses for {% data variables.product.product_location %}. If you provision more resources than the minimum requirements, your instance will perform and scale better.

{% data reusables.enterprise_installation.hardware-rec-table %}

### Storage

We recommend a high-performance SSD with high input/output operations per second (IOPS) and low latency for {% data variables.product.prodname_ghe_server %}. Workloads are I/O intensive. If you use a bare metal hypervisor, we recommend directly attaching the disk or using a disk from a storage area network (SAN).

Your instance requires a persistent data disk separate from the root disk. For more information, see "[System overview](/enterprise/admin/guides/installation/system-overview)."

{% ifversion ghes %}

To configure {% data variables.product.prodname_actions %}, you must provide external blob storage. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)."

{% endif %}

The available space on the root filesystem will be 50% of the total disk size. You can resize your instance's root disk by building a new instance or using an existing instance. For more information, see "[System overview](/enterprise/admin/guides/installation/system-overview#storage-architecture)" and "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)."

### CPU and memory

The CPU and memory resources that {% data variables.product.prodname_ghe_server %} requires depend on the levels of activity for users, automations, and integrations.

{% ifversion ghes %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of your {% data variables.product.prodname_ghe_server %} instance, you may need to provision additional CPU and memory resources for your instance. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)."

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Warning:** We recommend that users configure webhook events to notify external systems of activity on {% data variables.product.prodname_ghe_server %}. Automated checks for changes, or _polling_, will negatively impact the performance and scalability of your instance. For more information, see "[About webhooks](/github/extending-github/about-webhooks)."

{% endwarning %}

For more information about monitoring the capacity and performance of {% data variables.product.prodname_ghe_server %}, see "[Monitoring your appliance](/admin/enterprise-management/monitoring-your-appliance)."

You can increase your instance's CPU or memory resources. For more information, see "[Increasing CPU or memory resources](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."
