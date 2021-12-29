---
title: Aprovar uma pull request com revisões obrigatórias
intro: 'Se seu repositório exigir revisões, as pull requests deverão ter um número específico de revisões de aprovação de pessoas com permissões de _gravação_ ou _administrador_ no repositório para que elas possam sofrer merge.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Revisões obrigatórias
---

Para obter mais informações sobre as análises necessárias, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Você pode comentar em uma pull request, aprovar as alterações ou solicitar melhorias antes da aprovação. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Dica**: se uma pull request que você aprovou foi consideravelmente alterada, é possível ignorar sua revisão. A pull request precisará de uma nova revisão para que possa sofrer merge. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. Revise as alterações na pull request e, se desejar, [comente sobre linhas específicas](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. Selecione **Approve** (Aprovar) para aprovar o merge das alterações propostas na pull request.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Leia mais

- "[Revisando alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentando em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
