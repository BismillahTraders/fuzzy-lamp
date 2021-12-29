---
title: Gerenciando seu limite de gastos para o GitHub Actions (Ações do GitHub)
intro: 'Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Limites de gastos para ações
---

## Sobre sintaxe limites de gastos para o {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Para obter mais informações sobre os preços para uso de {% data variables.product.prodname_actions %}, consulte "[Sobre cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

{% ifversion ghec %}
Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o ID da sua assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso de {% data variables.product.prodname_actions %} além dos valores incluindo na sua conta. Para obter mais informações, consulte "[Conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

Assim que você definir um limite de gastos diferente de $ 0, você será responsável por todos os excedentes existentes no período de cobrança atual. Por exemplo, se a sua organização usa o {% data variables.product.prodname_team %}, não permite excessos, e cria artefatos de fluxo de trabalho que aumentam seu uso de armazenamento para o mês de 1.9GB para 2.1GB, você usará um pouco mais de armazenamento do que os 2GB que seu produto inclui.

Como você não habilitou os excedentes, a sua próxima tentativa de criar um artefato de fluxo de trabalho falhará. Você não receberá uma fatura pelo excesso de 0.1GB naquele mês. No entanto, se você habilitar os excedentes, a sua primeira conta incluirá o 0,1 GB do excedente existente para o ciclo de cobrança atual, bem como qualquer superação adicional que você acumular.

## Gerenciando o limite de gastos de {% data variables.product.prodname_actions %} para sua conta de usuário

Qualquer pessoa pode gerenciar o limite de gastos do {% data variables.product.prodname_actions %} para sua própria conta de usuário.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Gerenciando o limite de gastos de {% data variables.product.prodname_actions %} para sua organização

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_actions %} para uma organização.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Gerenciando o limite de gastos de {% data variables.product.prodname_actions %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_actions %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Acima de "{% data variables.product.prodname_actions %} e pacotes de uso mensal", clique em **Limite de gastos**. ![Aba limite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}


## Gerenciamento de notificações por e-mail e limite de gastos
{% data reusables.billing.email-notifications %}
