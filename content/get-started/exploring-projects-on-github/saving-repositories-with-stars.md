---
title: Saving repositories with stars
intro: 'You can star repositories and topics to keep track of projects you find interesting{% ifversion fpt or ghec %} and discover related content in your news feed{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
---
You can search, sort, and filter your starred repositories and topics on your {% data variables.explore.your_stars_page %}.

## About stars

Starring makes it easy to find a repository or topic again later. You can see all the repositories and topics you have starred by going to your {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %}
You can star repositories and topics to discover similar projects on {% data variables.product.product_name %}. When you star repositories or topics, {% data variables.product.product_name %} may recommend related content in the discovery view of your news feed. For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".
{% endif %}

Starring a repository also shows appreciation to the repository maintainer for their work. Many of {% data variables.product.prodname_dotcom %}'s repository rankings depend on the number of stars a repository has. In addition, [Explore](https://github.com/explore) shows popular repositories based on the number of stars they have.

## Starring a repository

Starring a repository is a simple two-step process.

{% data reusables.repositories.navigate-to-repo %}
1. In the top-right corner of the page, click **Star**.
![Starring a repository](/assets/images/help/stars/starring-a-repository.png)
1. Optionally, to unstar a previously starred repository, click **Unstar**.
![Untarring a repository](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}
## Organizing starred repositories with lists

{% note %}

**Note:** Lists are currently in public beta and subject to change.

{% endnote %}

Curate repositories that you've starred with public lists. You can create public lists that appear on your stars page at `https://github.com/USERNAME?tab=stars`.

If you add a private repository to a list, then the private repository will only appear in your list for people with `read` access to the repository.

![Screenshot of lists on stars page](/assets/images/help/stars/lists-overview-on-stars-page.png)

You can add a repository to an existing or new list wherever you see a repository's **Star** or **Starred** dropdown menu, whether on a repository page or in a list of starred repositories. 

![Screenshot of "Star" dropdown menu with list options featured from the repository page](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Screenshot of "Starred" dropdown menu with list options featured from a starred repository list](/assets/images/help/stars/add-repo-to-list.png)

### Creating a list

{% data reusables.stars.stars-page-navigation %}
2. Next to "Lists", click **Create list**.
  ![Screenshot of "Create list" button](/assets/images/help/stars/create-list.png)
3. Enter a name and description for your list and click **Create**.
  ![Screenshot of modal showing where you enter a name and description with the "Create" button.](/assets/images/help/stars/create-list-with-description.png)

### Adding a repository to a list

{% data reusables.stars.stars-page-navigation %}
2. Find the repository you want to add to your list.
  ![Screenshot of starred repos search bar](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Next to the repository you want to add, use the **Starred** dropdown menu and select your list.
  ![Screenshot of dropdown showing a list checkboxes](/assets/images/help/stars/add-repo-to-list.png)

### Removing a repository from your list

{% data reusables.stars.stars-page-navigation %}
2. Select your list.
3. Next to the repository you want to remove, use the **Starred** dropdown menu and deselect your list.
  ![Screenshot of dropdown showing list checkboxes](/assets/images/help/stars/add-repo-to-list.png)

### Editing a list name or description

{% data reusables.stars.stars-page-navigation %}
1. Select the list you want to edit.
2. Click **Edit list**.
3. Update the name or description and click **Save list**.
  ![Screenshot of modal showing "Save list" button](/assets/images/help/stars/edit-list-options.png) 

### Deleting a list

{% data reusables.stars.stars-page-navigation %}
2. Select the list you want to delete.
3. Click **Delete list**.
  ![Screenshot of modal showing "Delete list" button](/assets/images/help/stars/edit-list-options.png)
4. To confirm, click **Delete**.

{% endif %}

## Searching starred repositories and topics

You can use the search bar on your {% data variables.explore.your_stars_page %} to quickly find repositories and topics you've starred. 

1. Go to your {% data variables.explore.your_stars_page %}.
1. Use the search bar to find your starred repositories or topics by their name.
![Searching through stars](/assets/images/help/stars/stars_search_bar.png)

The search bar only searches based on the name of a repository or topic, and not on any other qualifiers (such as the size of the repository or when it was last updated).

## Sorting and filtering stars on your stars page

You can use sorting or filtering to customize how you see starred repositories and topics on your stars page.

1. Go to your {% data variables.explore.your_stars_page %}.
1. To sort stars, select the **Sort** drop-down menu, then select **Recently starred**, **Recently active**, or **Most stars**.
![Sorting stars](/assets/images/help/stars/stars_sort_menu.png)
1. To filter your list of stars based on their language, click on the desired language under **Filter by languages**.
![Filter stars by language](/assets/images/help/stars/stars_filter_language.png)
1. To filter your list of stars based on repository or topic, click on the desired option.
![Filter stars by topic](/assets/images/help/stars/stars_filter_topic.png)

## Further reading

- "[Classifying your repository with topics](/articles/classifying-your-repository-with-topics)"
