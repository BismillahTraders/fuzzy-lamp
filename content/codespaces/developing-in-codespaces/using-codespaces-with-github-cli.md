---
title: Using Codespaces with GitHub CLI
shortTitle: GitHub CLI
intro: 'You can work with {% data variables.product.prodname_github_codespaces %} directly from your command line by using `gh`, the {% data variables.product.product_name %} command line interface.'
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
---

## About {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} For more information, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

You can work with {% data variables.product.prodname_codespaces %} in the  {% data variables.product.prodname_cli %} to:
- [List your codespaces](#list-all-of-your-codespaces)
- [Create a codespace](#create-a-new-codespace)
- [Stop a codespace](#stop-a-codespace)
- [Delete a codespace](#delete-a-codespace)
- [SSH into a codespace](#ssh-into-a-codespace)
- [Open a codespace in {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Copying a file to/from a codespace](#copy-a-file-tofrom-a-codespace)
- [Modify ports in a codespace](#modify-ports-in-a-codespace)
- [Access codespace logs](#access-codespace-logs)

## Installing {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Using {% data variables.product.prodname_cli %}

If you have not already done so, run `gh auth login` to authenticate with your {% data variables.product.prodname_dotcom %} account. 

To use `gh` to work with {% data variables.product.prodname_codespaces %}, type `gh codespace <COMMAND>` or its alias `gh cs <COMMAND>`.

As an example of a series of commands you might use to work with {% data variables.product.prodname_github_codespaces %}, you could: 

* List your current codespaces, to check whether you have a codespace for a particular repository:<br>
  `gh codespace list`
* Create a new codespace for the required repository branch:<br>
  `gh codespace create -r github/docs -b main`
* SSH into the new codespace:<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Forward a port to your local machine:<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## `gh` commands for {% data variables.product.prodname_github_codespaces %}

The sections below give example commands for each of the available operations.

For a complete reference of `gh` commands for {% data variables.product.prodname_github_codespaces %}, including details of all available options for each command, see the {% data variables.product.prodname_cli %} online help for "[gh codespace](https://cli.github.com/manual/gh_codespace)." Alternatively, use `gh codespace [<SUBCOMMAND>...] --help` on the command line.

{% note %}

**Note**: The `-c <em>codespace-name</em>` flag, used with many commands, is optional. If you omit it a list of codespaces is displayed for you to choose from.

{% endnote %}

### List all of your codespaces

```shell
gh codespace list
```

The list includes the unique name of each codespace, which you can use in other `gh codespace` commands.

### Create a new codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."

### Stop a codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

For more information, see "[Deep dive into Codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)."

### Delete a codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

For more information, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

### SSH into a codespace

To run commands on the remote codespace machine, from your terminal, you can SSH into the codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copies your GitHub SSH keys into the codespace on creation for a seamless authentication experience. You may be asked to enter the passphrase for your SSH key, after which you will get a command prompt from the remote codespace machine.

If you don't have any SSH keys, follow the instructions in "[Generating a new SSH key and adding it to the ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

### Open a codespace in {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

For more information, see "[Using {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)."

### Copy a file to/from a codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Use the prefix `remote:` on a file or directory name to indicate that it's on the codespace. As with the UNIX `cp` command, the first argument specifies the source and the last specifies the destination. If the destination is a directory, you can specify multiple sources. Use the `-r` (recursive) flag if any of the sources is a directory.

The location of files and directories on the codespace is relative to the home directory of the remote user.

#### Examples

* Copy a file from the local machine to the `$HOME` directory of a codespace:

   `gh codespace cp myfile.txt remote:`

* Copy a file to the directory in which a repository is checked out in a codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

* Copy a file from a codespace to the current directory on the local machine:

   `gh codespace cp remote:myfile.txt .`

* Copy three local files to the `$HOME/temp` directory of a codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copy three files from a codespace to the current working directory on the local machine:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copy a local directory into the `$HOME` directory of a codespace:

   `gh codespace cp -r mydir remote:`

* Copy a directory from a codespace to the local machine, changing the directory name:

   `gh codespace cp -r remote:mydir mydir-localcopy`

For more information about the `gh codespace cp` command, including additional flags you can use, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_cp).

### Modify ports in a codespace

You can forward a port on a codespace to a local port. The port remains forwarded as long as the process is running. To stop forwarding the port, press <kbd>control</kbd>+<kbd>c</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

You can set the visibility of a forwarded port. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

You can set the visibility for multiple ports with one command. For example:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."

### Access codespace logs

You can see the creation log for a codespace. After entering this command you will be asked to enter the passphrase for your SSH key.

```shell
gh codespace logs -c <em>codespace-name</em>
```

For more information about the creation log, see "[Codespaces logs](/codespaces/troubleshooting/codespaces-logs#creation-logs)."
