---
title: Sobre a cobrança para codespaces
shortTitle: Sobre a cobrança
intro: 'Veja os preços e como gerenciar a cobrança de {% data variables.product.prodname_codespaces %} para a sua organização.'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
---

## Preços de {% data variables.product.prodname_codespaces %}

O uso de {% data variables.product.prodname_codespaces %} é cobrado para todas as contas nos planos de equipe e corporativos e não inclui nenhum direito. Atualmente, as contas individuais não são cobradas para o uso de {% data variables.product.prodname_codespaces %}.

O uso de {% data variables.product.prodname_codespaces %} é cobrado de acordo com as unidades de medida na tabela a seguir:

| Produto                     | SKU           | Unidade de medida | Preço  |
| --------------------------- | ------------- | ----------------- | ------ |
| Cálculo de codespace        | 2 núcleos     | 1 hora            | $ 0,18 |
|                             | 4 núcleos     | 1 hora            | $ 0,36 |
|                             | 8 núcleos     | 1 hora            | $ 0,72 |
|                             | 16 núcleos    | 1 hora            | $ 1,44 |
|                             | 32 núcleos    | 1 hora            | $ 2,88 |
| Armazenamento de codespaces | Armazenamento | 1 GB por mês      | $ 0,07 |

## Sobre a cobrança do {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Se uso de {% data variables.product.prodname_codespaces %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o seu ID de assinatura do Azure à sua conta corporativa para habilitar e pagar o uso de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% data reusables.dotcom_billing.pricing_cal %}

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## Como a cobrança é administrada para repositórios bifurcados

{% data variables.product.prodname_codespaces %} só pode ser usado em organizações em que um proprietário cobrável tenha sido definido. Para incorrer em encargos com a organização, o usuário deve ser integrante ou colaborador. Caso contrário, não poderá criar um codespace.

Por exemplo, um usuário em uma organização privada pode bifurcar um repositório dentro dessa organização e, consequentemente, usar um codespace cobrado para a organização. Isto porque a organização é proprietária do repositório principal, que pode remover o acesso do usuário, o repositório bifurcado e o codespace.

## Como o faturamento é adminisrado quando um repositório é transferido

O uso é cobrado e informado a cada hora. Como tal, você paga qualquer uso quando um repositório está dentro da sua organização. Quando um repositório é transferido para fora da sua organização, todos os codespaces do repositório são removidos como parte do processo de transferência.

## O que acontece quando os usuários são removidos

Se um usuário for removido de uma organização ou repositório, seus codespaces serão automaticamente excluídos. 
