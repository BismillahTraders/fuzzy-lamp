---
title: Duplicating a repository
intro: 'To maintain a mirror of a repository without forking it, you can run a special clone command, then mirror-push to the new repository.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
{% ifversion fpt or ghec %} 

{% note %}

**Note:** If you have a project hosted on another version control system, you can automatically import your project to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_dotcom %} Importer tool. For more information, see "[About {% data variables.product.prodname_dotcom %} Importer](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)."

{% endnote %}

{% endif %}

Before you can push the original repository to your new copy, or _mirror_, of the repository, you must [create the new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. In these examples, `exampleuser/new-repository` or `exampleuser/mirrored` are the mirrors.

## Mirroring a repository

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Create a bare clone of the repository.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Mirror-push to the new repository.
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Remove the temporary local repository you created earlier.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Mirroring a repository that contains {% data variables.large_files.product_name_long %} objects

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Create a bare clone of the repository. Replace the example username with the name of the person or organization who owns the repository, and replace the example repository name with the name of the repository you'd like to duplicate.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Navigate to the repository you just cloned.
  ```shell
  $ cd <em>old-repository</em>
  ```
4. Pull in the repository's {% data variables.large_files.product_name_long %} objects.
  ```shell
  $ git lfs fetch --all
  ```
5. Mirror-push to the new repository.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Push the repository's {% data variables.large_files.product_name_long %} objects to your mirror.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Remove the temporary local repository you created earlier.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Mirroring a repository in another location

If you want to mirror a repository in another location, including getting updates from the original, you can clone a mirror and periodically push the changes.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Create a bare mirrored clone of the repository.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Set the push location to your mirror.
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```
As with a bare clone, a mirrored clone includes all remote branches and tags, but all local references will be overwritten each time you fetch, so it will always be the same as the original repository. Setting the URL for pushes simplifies pushing to your mirror.

4. To update your mirror, fetch updates and push.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %} 
## Further reading

* "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[About Git Large File Storage and GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* "[About GitHub Importer](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"

{% endif %}
