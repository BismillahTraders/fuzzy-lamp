---
title: Segurança do código
shortTitle: Segurança do código
intro: 'Crie segurança no seu fluxo de trabalho de {% data variables.product.prodname_dotcom %} com recursos para manter segredos e vulnerabilidades fora da base de código{% ifversion not ghae %} e para manter a sua cadeia de suprimentos de software{% endif %}.'
introLinks:
  overview: /code-security/getting-started/github-security-features
featuredLinks:
  guides:
    - /code-security/getting-started/securing-your-repository
    - /code-security/getting-started/securing-your-organization
    - '{% ifversion fpt %}/code-security/security-advisories/creating-a-security-advisory{% endif %}'
    - '{% ifversion ghes or ghae %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository{% endif%}'
  guideCards:
    - '{% ifversion fpt %}/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates{% endif %}'
    - '{% ifversion fpt %}/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates{% endif %}'
    - '{% ifversion fpt %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository{% endif %}'
    - '{% ifversion ghes %}/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository{% endif %}'
    - '{% ifversion ghes %}/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies{% endif %}'
    - '{% ifversion ghes or ghae %}/code-security/secret-security/configuring-secret-scanning-for-your-repositories{% endif %}'
    - '{% ifversion ghae %}/code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github{% endif %}'
    - '{% ifversion ghae %}/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system{% endif %}'
  popular:
    - '{% ifversion ghes %}/admin/release-notes{% endif %}'
    - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
    - /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
    - '{% ifversion ghae %}/code-security/secret-security/about-secret-scanning{% endif %}'
    - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
    - '{% ifversion ghes or ghae %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages{% endif %}'
    - '{% ifversion ghes or ghae %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow{% endif %}'
    - '{% ifversion ghes or ghae %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container{% endif %}'
changelog:
  label: security-and-compliance
  versions:
    fpt: '*'
    ghec: '*'
examples_source: data/product-examples/code-security/code-examples.yml
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
children:
  - /getting-started
  - /secret-scanning
  - /code-scanning
  - /security-advisories
  - /supply-chain-security
  - /security-overview
  - /guides
---

