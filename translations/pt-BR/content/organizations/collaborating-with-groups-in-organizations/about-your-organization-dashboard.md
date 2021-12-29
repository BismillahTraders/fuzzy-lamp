---
title: Sobre o painel da sua organização
intro: 'Como um integrante da organização, você pode visitar o painel da sua organização durante todo o dia para se manter atualizado sobre atividades recentes e acompanhar problemas e pull requests nos quais está trabalhando ou seguindo na organização.'
redirect_from:
  - /articles/about-your-organization-dashboard
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organization-dashboard
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Painel da organização
---

## Acessar o painel da sua organização

{% data reusables.dashboard.access-org-dashboard %}

## Encontrar sua atividade recente

Na seção "Recent activity" (Atividade recente) do feed de notícias, você pode encontrar e acompanhar problemas e pull requests recém-atualizados na organização.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Encontrar repositórios em sua organização

Na barra lateral esquerda do painel, é possível acessar os principais repositórios da sua organização nos quais você está ativo.

![Lista de repositórios em que você é mais ativo na sua organização](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

## Permanecer atualizado com a atividade da organização

Na seção "All activity" (Todas as atividades) do seu feed de notícias, você pode ver atualizações de outras equipes e repositórios em sua organização.

A seção "All activity" (Todas as atividades) mostra todas as últimas atividades na organização, inclusive atividades em repositórios que você não assina e de pessoas que você não está seguindo. Para mais informações, consulte {% ifversion fpt or ghes or ghae or ghec %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Inspecionando e não inspecionando repositórios](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}" e "[Seguindo pessoas](/articles/following-people)".

Por exemplo, o feed de notícias da organização mostra atualizações quando alguém na organização:
 - Cria um branch.
 - Fazer comentários em um problema ou pull request.
 - Envia um comentário de revisão de pull request.
 - Bifurca um repositório.
 - Cria uma página wiki.
 - Commits de pushes.{% ifversion fpt or ghes or ghec %}
 - Cria um repositório público.{% endif %}

## Outras informações

- "[Sobre seu painel pessoal](/articles/about-your-personal-dashboard)"
