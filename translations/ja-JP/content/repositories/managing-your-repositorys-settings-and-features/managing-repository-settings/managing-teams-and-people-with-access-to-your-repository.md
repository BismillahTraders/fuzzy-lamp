---
title: リポジトリへのアクセス権を持つ Team と人を管理する
intro: リポジトリへのアクセス権を持つすべての人を確認し、権限を調整できます。
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Teams & people
---

## About access management for repositories

{% data variables.product.prodname_dotcom %}で管理するリポジトリごとに、リポジトリへのアクセス権を持つすべての Team または人の概要を確認できます。 From the overview, you can also invite new teams or people, change each team or person's role for the repository, or remove access to the repository.

この概要は、リポジトリ、オンボードまたはオフボードの独立契約者または従業員へのアクセスを監査し、セキュリティインシデントに効果的に対応するのに役立ちます。

For more information about repository roles, see "[Permission levels for a user account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png)

## Team と人のリストのフィルタリング

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. [Manage access] の検索フィールドで、検索する Team または人の名前を入力します。 ![アクセスできる Team または人のリストをフィルタリングするための検索フィールド](/assets/images/help/repository/manage-access-filter.png)

## Team または人の権限を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Under "Manage access", find the team or person whose role you'd like to change, then select the Role drop-down and click a new role. !["Role"ドロップダウンを使用して、Team または人の新しい権限を選択します](/assets/images/help/repository/manage-access-role-drop-down.png)

## Team または人を招待する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. 検索フィールドで、招待する Team または人の名前を入力し、リストから一致する名前をクリックします。 ![リポジトリに招待する Team または人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to grant to the team or person, then click **Add NAME to REPOSITORY**. ![Team または人の権限を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Team または人のアクセス権を削除する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. [Manage access] でアクセスを削除する Team またはユーザーを探し、{% octicon "trash" aria-label="The trash icon" %} をクリックします。 ![アクセス削除用のゴミ箱アイコン](/assets/images/help/repository/manage-access-remove.png)

## 参考リンク

- 「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」
- 「[Organization の基本レベルの権限の設定](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)」
