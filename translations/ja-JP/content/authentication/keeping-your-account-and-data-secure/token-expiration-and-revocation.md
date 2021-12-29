---
title: Token expiration and revocation
intro: 'Your tokens can expire and can also be revoked by you, applications you have authorized, and {% data variables.product.product_name %} itself.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
---

When a token {% ifversion fpt or ghae-issue-4374 or ghes > 3.2 or ghec %}has expired or {% endif %} has been revoked, it can no longer be used to authenticate Git and API requests. It is not possible to restore an expired or revoked token, you or the application will need to create a new token.

This article explains the possible reasons your {% data variables.product.product_name %} token might be revoked or expire.

{% note %}

**Note:** When a personal access token or OAuth token expires or is revoked, you may see an `oauth_authorization.destroy` action in your security log. 詳細は「[セキュリティログをレビューする](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)」を参照してください。

{% endnote %}

{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 or ghec %}
## Token revoked after reaching its expiration date

When you create a personal access token, we recommend that you set an expiration for your token. Upon reaching your token's expiration date, the token is automatically revoked. 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %}
## Token revoked when pushed to a public repository or public gist

If a valid OAuth token, {% data variables.product.prodname_github_app %} token, or personal access token is pushed to a public repository or public gist, the token will be automatically revoked.

OAuth tokens and personal access tokens pushed to public repositories and public gists will only be revoked if the token has scopes.
{% endif %}

{% ifversion fpt or ghec %}
## Token expired due to lack of use

{% data variables.product.product_name %} will automatically revoke an OAuth token or personal access token when the token hasn't been used in one year.
{% endif %}

## Token revoked by the user

You can revoke your authorization of a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_oauth_app %} from your account settings which will revoke any tokens associated with the app. For more information, see "[Reviewing your authorized integrations](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)" and "[Reviewing your authorized applications (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)."

Once an authorization is revoked, any tokens associated with the authorization will be revoked as well. To re-authorize an application, follow the instructions from the third-party application or website to connect your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} again.

## Token revoked by the {% data variables.product.prodname_oauth_app %}

The owner of an {% data variables.product.prodname_oauth_app %} can revoke an account's authorization of their app, this will also revoke any tokens associated with the authorization. For more information about revoking authorizations of your OAuth app, see "[Delete an app authorization](/rest/reference/apps#delete-an-app-authorization)."

## Token revoked due to excess of tokens for an {% data variables.product.prodname_oauth_app %} with the same scope

{% data reusables.apps.oauth-token-limit %}

## User token revoked due to {% data variables.product.prodname_github_app %} configuration

User-to-server tokens created by a {% data variables.product.prodname_github_app %} will expire after eight hours by default. Owners of {% data variables.product.prodname_github_apps %} can configure their apps so that user-to-server tokens do not expire. For more information about changing how your {% data variables.product.prodname_dotcom %} App's user-to-server tokens behave, see "[Activating optional features for apps](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)."
