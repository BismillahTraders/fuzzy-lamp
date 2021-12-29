---
title: Getting started with GitHub Actions for GitHub AE
shortTitle: Get started
intro: 'Learn about configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
---


## About {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_managed %}

This article explains how site administrators can configure {% data variables.product.prodname_ghe_managed %} to use {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions %} is enabled for {% data variables.product.prodname_ghe_managed %} by default. To get started using {% data variables.product.prodname_actions %} within your enterprise, you need to manage access permissions for {% data variables.product.prodname_actions %} and add runners to run workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Managing access permissions for {% data variables.product.prodname_actions %} in your enterprise

You can use policies to manage access to {% data variables.product.prodname_actions %}. For more information, see "[Enforcing GitHub Actions policies for your enterprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

## Adding runners

You can configure and host servers to run jobs for your enterprise on {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.general-security-hardening %}
