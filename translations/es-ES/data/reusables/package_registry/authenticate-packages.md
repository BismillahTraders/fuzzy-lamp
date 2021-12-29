You need an access token to publish, install, and delete packages.

You can use a personal access token (PAT) to authenticate to {% data variables.product.prodname_registry %} or the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a PAT, see "[About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a {% data variables.product.prodname_registry %} registry within a {% data variables.product.prodname_actions %} workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a PAT to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).
