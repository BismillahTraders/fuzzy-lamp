---
title: Browsing security vulnerabilities in the GitHub Advisory Database
intro: 'The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## About security vulnerabilities

{% data reusables.repositories.a-vulnerability-is %}

## About the {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities, grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

### About {% data variables.product.company_short %}-reviewed advisories

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities that have been mapped to packages tracked by the {% data variables.product.company_short %} dependency graph.

We carefully review each advisory for validity. Each {% data variables.product.company_short %}-reviewed advisory has a full description, and contains both ecosystem and package information.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory affects packages you depend on. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."

### About unreviewed advisories

Unreviewed advisories are security vulnerabilites that we publish automatically into the {% data variables.product.prodname_advisory_database %}, directly from the National Vulnerability Database feed. 

{% data variables.product.prodname_dependabot %} doesn't create {% data variables.product.prodname_dependabot_alerts %} for unreviewed advisories as this type of advisory isn't checked for validity or completion.

## About security advisories

Each security advisory contains information about the vulnerability, which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. In addition, advisories from the National Vulnerability Database list contain a link to the CVE record, where you can read more details about the vulnerability, its CVSS scores, and its qualitative severity level. For more information, see the "[National Vulnerability Database](https://nvd.nist.gov/)" from the National Institute of Standards and Technology.

The severity level is one of four possible levels defined in the "[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)."
- Low
- Medium/Moderate
- High
- Critical

The {% data variables.product.prodname_advisory_database %} uses the CVSS levels described above. If {% data variables.product.company_short %} obtains a CVE, the {% data variables.product.prodname_advisory_database %} uses CVSS version 3.1. If the CVE is imported, the {% data variables.product.prodname_advisory_database %} supports both CVSS versions 3.0 and 3.1.

{% data reusables.repositories.github-security-lab %}

## Accessing an advisory in the {% data variables.product.prodname_advisory_database %}

1. Navigate to https://github.com/advisories.
2. Optionally, to filter the list, use any of the drop-down menus.
  ![Dropdown filters](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **Tip:** You can use the sidebar on the left to explore  {% data variables.product.company_short %}-reviewed and unreviewed advisories separately.

   {% endtip %}
3. Click on any advisory to view details.

{% note %}

The database is also accessible using the GraphQL API. For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## Searching the {% data variables.product.prodname_advisory_database %}

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier  | Example |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) will show {% data variables.product.company_short %}-reviewed advisories. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

## Viewing your vulnerable repositories

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)."

1. Navigate to https://github.com/advisories.
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**.
   ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user).
   ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the vulnerability, and for advice on how to fix the vulnerable repository, click the repository name.

## Further reading

- MITRE's [definition of "vulnerability"](https://cve.mitre.org/about/terminology.html#vulnerability)
