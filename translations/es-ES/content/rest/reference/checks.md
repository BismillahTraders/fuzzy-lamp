---
title: Checks
intro: 'With the Checks API, you can build {% data variables.product.prodname_github_apps %} that run powerful checks against the code changes in a repository.'
redirect_from:
  - /v3/checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---
You can create apps that perform continuous integration, code linting, or code scanning services and provide detailed feedback on commits. For more information, see "[Getting started with the checks API](/rest/guides/getting-started-with-the-checks-api)" and "[Creating CI tests with the Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Check Runs

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Check Suites

{% note %}

  **Note:** A GitHub App only receives one [`check_suite`](/webhooks/event-payloads/#check_suite) event per commit SHA, even if you push the commit SHA to more than one branch. To find out when a commit SHA is pushed to a branch, you can subscribe to branch [`create`](/webhooks/event-payloads/#create) events.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
