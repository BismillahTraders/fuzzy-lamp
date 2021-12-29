---
title: Atualizar ou fazer downgrade da organização paga do cliente
intro: Os gerentes de cobrança podem atualizar ou fazer downgrade da organização paga de um cliente a qualquer momento.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Atualização ou downgrade
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Dicas**:
- Antes de atualizar a organização do cliente, você pode [exibir ou atualizar a forma de pagamento no arquivo da organização](/articles/adding-or-editing-a-payment-method).
- Essas instruções são para atualizar e fazer downgrade de organizações na *assinatura por estação*. Se o cliente pagar pelo {% data variables.product.product_name %} usando um plano *por repositório herdado*, atualize ou [façar downgrade](/articles/downgrading-your-github-subscription) do plano herdado dele ou [troque a organização dele para preço por estação](/articles/upgrading-your-github-subscription).

{% endtip %}

## Atualizar o número de estações pagas de uma organização

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

Depois que você adicionar as estações, será cobrado na forma de pagamento registrada no arquivo da organização um valor proporcional com base no número de estações que você está adicionando e no tempo restante no ciclo de cobrança.

## Fazer downdgrade do número de estações pagas de uma organização para gratuitas

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
