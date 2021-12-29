{% ifversion ghes %}

| User licenses | vCPUs | Memory | Attached storage | Root storage |
| :- | -: | -: | -: | -: |
| Trial, demo, or 10 light users | 4 | 32 GB | 150 GB | 200 GB |
| 10 to 3,000  | 8 | 48 GB | 300 GB | 200 GB |
| 3,000 to 5000 | 12 | 64 GB | 500 GB | 200 GB |
| 5,000 to 8000 | 16 | 96 GB | 750 GB | 200 GB |
| 8,000 to 10,000+ | 20 | 160 GB | 1000 GB | 200 GB |

{% else %}

| User licenses | vCPUs | Memory | Attached storage | Root storage |
| :- | -: | -: | -: | -: |
| Trial, demo, or 10 light users | 2 | 16 GB | 100 GB | 200 GB |
| 10 to 3,000  | 4 | 32 GB | 250 GB | 200 GB |
| 3,000 to 5000 | 8 | 64 GB | 500 GB | 200 GB |
| 5,000 to 8000 | 12 | 96 GB | 750 GB | 200 GB |
| 8,000 to 10,000+ | 16 | 128 GB | 1000 GB | 200 GB |

{% endif %}

{% ifversion ghes %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of your instance, more resources are required.

{%- ifversion ghes < 3.2 %}

{% data reusables.actions.hardware-requirements-before %}

{%- endif %}

{%- ifversion ghes = 3.2 %}

{% data reusables.actions.hardware-requirements-3.2 %}

{%- endif %}

{%- ifversion ghes > 3.2 %}

{% data reusables.actions.hardware-requirements-after %}

{%- endif %}

For more information about these requirements, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)."

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}
