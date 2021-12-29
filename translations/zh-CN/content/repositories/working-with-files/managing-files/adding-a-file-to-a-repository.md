---
title: 添加文件到仓库
intro: 'You can upload and commit an existing file to a repository on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 添加文件
---

## Adding a file to a repository on {% data variables.product.product_name %}

通过浏览器添加到仓库的文件大小限于每个文件 {% data variables.large_files.max_github_browser_size %}。 较大的文件可通过命令行添加，最大每个 {% data variables.large_files.max_github_size %}。 更多信息请参阅“[使用命令行添加文件到仓库](#adding-a-file-to-a-repository-using-the-command-line)”。

{% tip %}

**提示：**
- 您可以同时将多个文件上传到 {% data variables.product.product_name %}。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 在文件列表上方，使用 **Add file（添加文件）**下拉菜单，单击 **Upload files（上传文件）**。 !["Add file（添加文件）"下拉菜单中的"Upload files（上传文件）"](/assets/images/help/repository/upload-files-button.png)
3. 将要上传的文件或文件夹拖放到文件树中。 ![拖放区域](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. 单击 **Commit changes（提交更改）**。 ![提交更改按钮](/assets/images/help/repository/commit-changes-button.png)

## 使用命令行提交文件到仓库

You can upload an existing file to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} using the command line.

{% tip %}

**提示：**您也可以[从 {% data variables.product.product_name %} 网站添加现有文件到仓库](/articles/adding-a-file-to-a-repository)。

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. 在计算机上，将要上传到 {% data variables.product.product_name %} 的文件移入在克隆仓库时创建的本地目录。
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## 延伸阅读

- "[使用命令行添加现有项目到 GitHub](/articles/adding-an-existing-project-to-github-using-the-command-line)"
