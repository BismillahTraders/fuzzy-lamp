---
title: Alterar o stage de uma pull request
intro: 'Você pode marcar uma pull request de rascunho como pronta para revisão{% ifversion fpt or ghae or ghes or ghec %} ou converter uma pull request para rascunho{% endif %}.'
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Alterar o estado
---

## Marcando uma pull request como pronta para revisão

{% data reusables.pull_requests.mark-ready-review %}

{% ifversion fpt or ghae or ghes or ghec %}
{% tip %}

**Dicas**: Você também pode marcar um pull request como pronto para revisão usando {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)na documentação de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull requests", clique na pull request que deseja marcar como pronta para revisão.
3. Na caixa de merge, clique em **Pronto para revisar**. ![Botão Ready for review (Pronta para revisão)](/assets/images/help/pull_requests/ready-for-review-button.png)

{% ifversion fpt or ghae or ghes or ghec %}

## Convertendo uma pull request em rascunho

Você pode converter uma pull request em rascunho a qualquer momento. Por exemplo, se você abriu uma pull request acidentalmente em vez de um rascunho, ou se você recebeu feedback sobre sua pull request que precisa ser resolvida, você pode converter a pull request em um rascunho para indicar outras mudanças necessárias. Ninguém poderá fazer o merge da pull request até que você marque a pull request como pronta para revisão novamente. Pessoas que já estão inscritas em notificações para a pull request não serão descadastradas quando você converter a pull request em um rascunho.

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja converter em rascunho.
3. Na barra lateral direita, em "Revisores", clique em **Converter para rascunho**. ![Converter para link de rascunho](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Clique em **Converter para rascunho**. ![Converter para confirmação de rascunho](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

## Leia mais

- "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
