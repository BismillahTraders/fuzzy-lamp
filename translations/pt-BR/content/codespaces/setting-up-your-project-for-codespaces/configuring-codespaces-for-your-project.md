---
title: Introduction to dev containers
intro: 'You can use a `devcontainer.json` file to define a {% data variables.product.prodname_codespaces %} environment for your repository.'
allowTitleToDifferFromFilename: true
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
---

 

## About dev containers

A development container, or dev container, is the environment that {% data variables.product.prodname_codespaces %} uses to provide the tools and runtimes that your project needs for development. If your project does not already have a dev container defined, {% data variables.product.prodname_codespaces %} will use the default configuration, which contains many of the common tools that your team might need for development with your project. For more information, see "[Using the default configuration](#using-the-default-configuration)."

If you want all users of your project to have a consistent environment that is tailored to your project, you can add a dev container to your repository. You can use a predefined configuration to select a common configuration for various project types with the option to further customize your project or you can create your own custom configuration. For more information, see "[Using a predefined container configuration](#using-a-predefined-container-configuration)" and "[Creating a custom codespace configuration](#creating-a-custom-codespace-configuration)." The option you choose is dependent on the tools, runtimes, dependencies, and workflows that a user might need to be successful with your project.

{% data variables.product.prodname_codespaces %} allows for customization on a per-project and per-branch basis with a `devcontainer.json` file. This configuration file determines the environment of every new codespace anyone creates for your repository by defining a development container that can include frameworks, tools, extensions, and port forwarding. A Dockerfile can also be used alongside the `devcontainer.json` file in the `.devcontainer` folder to define everything required to create a container image.

### devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

You can use your `devcontainer.json` to set default settings for the entire codespace environment, including the editor, but you can also set editor-specific settings for individual [workspaces](https://code.visualstudio.com/docs/editor/workspaces) in a codespace in a file named `.vscode/settings.json`.

For information about the settings and properties that you can set in a `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.

### Dockerfile

A Dockerfile also lives in the `.devcontainer` folder. 

You can add a Dockerfile to your project to define a container image and install software. In the Dockerfile, you can use `FROM` to specify the container image.

```Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] Uncomment this section to install additional packages. **
# USER root
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
#
# USER codespace
```

You can use the `RUN` instruction to install any software and `&&` to join commands.

Reference your Dockerfile in your `devcontainer.json` file by using the `dockerfile` property.

```json
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

For more information on using a Dockerfile in a dev container, see [Create a development container](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile) in the {% data variables.product.prodname_vscode %} documentation. 

## Using the default configuration

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes languages and runtimes like Python, Node.js, JavaScript, TypeScript, C++, Java, .NET, PHP, PowerShell, Go, Ruby, and Rust. It also includes other developer tools and utilities like git, GitHub CLI, yarn, openssh, and vim. To see all the languages, runtimes, and tools that are included use the `devcontainer-info content-url` command inside your codespace terminal and follow the url that the command outputs.

Alternatively, for more information about everything that is included in the base Linux image, see the latest file in the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) repository. 

The default configuration is a good option if you're working on a small project that uses the languages and tools that {% data variables.product.prodname_codespaces %} provides.


## Using a predefined container configuration

Predefined container definitions include a common configuration for a particular project type, and can help you quickly get started with a configuration that already has the appropriate container options, {% data variables.product.prodname_vscode %} settings, and {% data variables.product.prodname_vscode %} extensions that should be installed.

Using a predefined configuration is a great idea if you need some additional extensibility. You can also start with a predefined configuration and amend it as needed for your project's setup.

{% data reusables.codespaces.command-palette-container %}
1. Click the definition you want to use.
  ![List of predefined container definitions](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Follow the prompts to customize your definition. For more information on the options to customize your definition, see "[Adding additional features to your `devcontainer.json` file](#adding-additional-features-to-your-devcontainerjson-file)."
1. Click **OK**.
  ![OK button](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. To apply the changes, in the bottom right corner of the screen, click **Rebuild now**. For more information about rebuilding your container, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."
  !["Codespaces: Rebuild Container" in the {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### Adding additional features to your `devcontainer.json` file

{% note %}

**Note:** This feature is in beta and subject to change.

{% endnote %}

You can add features to your predefined container configuration to customize which tools are available and extend the functionality of your workspace without creating a custom codespace configuration. For example, you could use a predefined container configuration and add the {% data variables.product.prodname_cli %} as well. You can make these additional features available for your project by adding the features to your `devcontainer.json` file when you set up your container configuration.

You can add some of the most common features by selecting them when configuring your predefined container. For more information on the available features, see the [script library](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) in the `vscode-dev-containers` repository.

![The select additional features menu during container configuration.](/assets/images/help/codespaces/select-additional-features.png)

You can also add or remove features outside of the **Add Development Container Configuration Files** workflow. 
1. Access the Command Palette (`Shift + Command + P` / `Ctrl + Shift + P`), then start typing "configure". Select **Codespaces: Configure Devcontainer Features**.
  ![The Configure Devcontainer Features command in the command palette](/assets/images/help/codespaces/codespaces-configure-features.png)
2. Update your feature selections, then click **OK**.
  ![The select additional features menu during container configuration.](/assets/images/help/codespaces/select-additional-features.png)
1. To apply the changes, in the bottom right corner of the screen, click **Rebuild now**. For more information about rebuilding your container, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."
  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/rebuild-prompt.png)


## Creating a custom codespace configuration

If none of the predefined configurations meet your needs, you can create a custom configuration by adding a `devcontainer.json` file. {% data reusables.codespaces.devcontainer-location %}

In the file, you can use [supported configuration keys](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) to specify aspects of the codespace's environment, like which {% data variables.product.prodname_vscode %} extensions will be installed.

{% data reusables.codespaces.vscode-settings-order %}

You can define default editor settings for {% data variables.product.prodname_vscode %} in two places.

* Editor settings defined in `.vscode/settings.json` are applied as _Workspace_-scoped settings in the codespace.
* Editor settings defined in the `settings` key in `devcontainer.json` are applied as _Remote [Codespaces]_-scoped settings in the codespace.

After updating the `devcontainer.json` file, you can rebuild the container for your codespace to apply the changes. For more information, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."

<!--
## Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

### Docker, Dockerfile, or image settings

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

For more information about the available settings for `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.
-->

## Applying changes to your configuration

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Fix the errors in the configuration.
  ![Error message about recovery mode](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - To diagnose the error by reviewing the creation logs, click **View creation log**.
   - To fix the errors identified in the logs, update your `devcontainer.json` file.
   - To apply the changes, rebuild your container. 
