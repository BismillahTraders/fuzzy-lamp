---
title: Managing custom repository roles for an organization
intro: "You can more granularly control access to your organization's repositories by creating custom repository roles."
permissions: 'Organization owners can manage custom repository roles.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Custom repository roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
---

{% data reusables.pre-release-program.custom-roles-public-beta %}

## About custom repository roles

To perform any actions on {% data variables.product.product_name %}, such as creating a pull request in a repository or changing an organization's billing settings, a person must have sufficient access to the relevant account or resource. This access is controlled by permissions. A permission is the ability to perform a specific action. For example, the ability to delete an issue is a permission. A role is a set of permissions you can assign to individuals or teams.

Within an organization, you can assign roles at the organization, team, and repository level. For more information about the different levels of roles, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can have more granular control over the permissions you grant at the repository level by creating up to three custom repository roles. A custom repository role is a configurable set of permissions with a custom name you choose. After you create a custom role, anyone with admin access to a repository can assign the role to an individual or team. For more information, see "[Managing an individual's access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)" and "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"

{% data reusables.enterprise.link-to-ghec-trial %}

## About the inherited role

When you create a custom repository role, you start by choosing an inherited role from a set of pre-defined options. The inherited role determines the initial set of permissions included in the custom role. Then, you can further customize the role by choosing additional permissions to give the role. For the full list of available permissions, see "[Additional permissions for custom roles](#additional-permissions-for-custom-roles)."

Your options for the inherited role are standardized for different types of contributors in your repository.

| Inherited role | Designed for |
|----|----|
| **Read** | Non-code contributors who want to view or discuss your project. |
| **Triage** | Contributors who need to proactively manage issues and pull requests without write access. |
| **Write** | Organization members and collaborators who actively push to your project. |
| **Maintain** | Project managers who need to manage the repository without access to sensitive or destructive actions.

## Custom role examples

Here are some examples of custom repository roles you can configure.

| Custom repository role | Summary | Inherited role | Additional permissions |
|----|----|----|----|
| Security engineer | Able to contribute code and maintain the security pipeline | **Maintain** | Delete code scanning results |
| Contractor | Able to develop webhooks integrations | **Write** | Manage webhooks |
| Community manager | Able to handle all the community interactions without being able to contribute code | **Read** | - Mark an issue as duplicate <br> - Manage GitHub Page settings <br> - Manage wiki settings <br> - Set the social preview <br> - Edit repository metadata <br> - Triage discussions |

## Additional permissions for custom roles

After choosing an inherited role, you can select additional permissions for your custom role.

You can only choose an additional permission if it's not already included in the inherited role. For example, if the inherited role offers **Write** access to a repository, then the "Close a pull request" permission will already be included in the inherited role.

### Issue and Pull Requests

- **Assign or remove a user**: Assign a user to an issue or pull request, or remove a user from an issue or pull request.
- **Add or remove a label**: Add a label to an issue or a pull request, or remove a label from an issue or pull request.

### Issue

- **Close an issue**
- **Reopen a closed issue**
- **Delete an issue**
- **Mark an issue as a duplicate**

### Pull Request

- **Close a pull request**
- **Reopen a closed pull request**
- **Request a pull request review**: Request a review from a user or team.

### Repository

- **Set milestones**: Add milestones to an issue or pull request.
- **Manage wiki settings**: Turn on wikis for a repository.
- **Manage project settings**: Turning on projects for a repository.
- **Manage pull request merging settings**: Choose the type of merge commits that are allowed in your repository, such as merge, squash, or rebase.
- **Manage {% data variables.product.prodname_pages %} settings**: Enable {% data variables.product.prodname_pages %} for the repository, and select the branch you want to publish. For more information, see "[Configuring a publishing source for your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
- **Manage webhooks**: Add webhooks to the repository.
- **Manage deploy keys**: Add deploy keys to the repository.
- **Edit repository metadata**: Update the repository description as well as the repository topics.
- **Set interaction limits**: Temporarily restrict certain users from commenting, opening issues, or creating pull requests in your public repository to enforce a period of limited activity. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
- **Set the social preview**: Add an identifying image to your repository that appears on social media platforms when your repository is linked. For more information, see "[Customizing your repository's social media preview](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)."
- **Push commits to protected branches**: Push to a branch that is marked as a protected branch.

### Security

- **View {% data variables.product.prodname_code_scanning %} results**: Ability to view {% data variables.product.prodname_code_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_code_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_code_scanning %} alerts.
- **Delete {% data variables.product.prodname_code_scanning %} results**: Ability to delete {% data variables.product.prodname_code_scanning %} alerts.
- **View {% data variables.product.prodname_secret_scanning %} results**: Ability to view {% data variables.product.prodname_secret_scanning %} alerts.
- **Dismiss or reopen {% data variables.product.prodname_secret_scanning %} results**: Ability to dismiss or reopen {% data variables.product.prodname_secret_scanning %} alerts.

## Precedence for different levels of access

If a person is given different levels of access through different avenues, such as team membership and the base permissions for an organization, the highest access overrides the others. For example, if an organization owner gives an organization member a custom role that uses the "Read" inherited role, and then an organization owner sets the organization's base permission to "Write", then this custom role will have write access, along with any additional permissions included in the custom role.

If a person has been given conflicting access, you'll see a warning on the repository access page. The warning appears with "{% octicon "alert" aria-label="The alert icon" %} Mixed roles" next to the person with the conflicting access. To see the source of the conflicting access, hover over the warning icon or click **Mixed roles**.

To resolve conflicting access, you can adjust your organization's base permissions or the team's access, or edit the custom role. For more information, see:
  - "[Setting base permissions for an organization](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)"
  - "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)"
  - "[Editing a repository role](#editing-a-repository-role)"

## Creating a repository role

To create a new repository role, you add permissions to an inherited role and give the custom role a name.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
5. Click **Create a Role**.
  ![Screenshot of "Create a Role" button](/assets/images/help/organizations/repository-role-create-role.png)
4. Under "Name", type the name of your repository role.
  ![Field to type a name for the repository role](/assets/images/help/organizations/repository-role-name.png)
5. Under "Description", type a description of your repository role.
  ![Field to type a description for the repository role](/assets/images/help/organizations/repository-role-description.png)
6. Under "Choose a role to inherit", select the role you want to inherit.
  ![Selecting repository role base role option](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Under "Add Permissions", use the drop-down menu to select the permissions you want your custom role to include.
  ![Selecting permission levels from repository role drop-down](/assets/images/help/organizations/repository-role-drop-down.png)
7. Click **Create role**.
  ![Confirm creating a repository role](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Editing a repository role

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to edit, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Edit**.
  ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Edit, then click **Update role**.
  ![Edit fields and update repository roles](/assets/images/help/organizations/repository-role-update.png)

## Deleting a repository role

If you delete an existing repository role, all pending invitations, teams, and users with the custom role will be reassigned to the organization's base permissions.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.org-list %}
{% data reusables.organizations.org-settings-repository-roles %}
3. To the right of the role you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**.
  ![Edit option in drop-down menu for repository roles](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Review changes for the role you want to remove, then click **Delete role**.
  ![Confirm deleting a repository role](/assets/images/help/organizations/repository-role-delete-confirm.png)
