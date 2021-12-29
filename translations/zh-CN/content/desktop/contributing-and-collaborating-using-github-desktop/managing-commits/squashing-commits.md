---
title: 压缩提交
intro: '您可以使用 {% data variables.product.prodname_desktop %} 压缩分支历史记录中的提交。'
versions:
  fpt: '*'
---

## 关于压缩提交

压缩允许您将分支历史记录中的多个提交合并为单个提交。 这将有助于使您的仓库历史记录更易读和易懂。

## 压缩提交

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. 在分支列表中，选择包含您要压缩的提交的分支。
{% data reusables.desktop.history-tab %}
4. 选择要压缩的提交，并将其放到要合并的提交上。 您可以选择一个提交，也可以使用 <kbd>⌘</kbd> 或 <kbd>Shift</kbd> 选择多个提交。 ![压缩拖放](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 修改新提交的提交消息。 您想要压缩的所选提交消息将预填入 **Summary（摘要）** 和 **Description<（说明）**字段。
6. 单击 **Squash Commits（压缩提交）**。

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. 在分支列表中，选择包含您要压缩的提交的分支。
{% data reusables.desktop.history-tab %}
4. 选择要压缩的提交，并将其放到要合并的提交上。 您可以选择一个提交，也可以使用 <kbd>Ctrl</kbd> 或 <kbd>Shift</kbd> 选择多个提交。 ![压缩拖放](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 修改新提交的提交消息。 您想要压缩的所选提交消息将预填入 **Summary（摘要）** 和 **Description<（说明）**字段。
6. 单击 **Squash Commits（压缩提交）**。

{% endwindows %}

## 压缩提交时的错误消息

压缩提交时，您可能会看到以下通知或错误消息。

* 通知指出，请求的分支更改将需要强制推送以更新远程分支。 强制推送会更改分支的提交历史记录，并影响处理该分支的其他协作者。  选择 **Begin Squash（开始压缩）**以开始压缩，然后点击 **Force push origin（强制推送来源）**以推送您的更改。

  ![压缩强制推送对话框](/assets/images/help/desktop/squash-force-push.png)

* 错误表示压缩失败，因为重新排序的提交之间有合并提交。

  ![重新排序合并提交对话框](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* 通知显示您当前分支上存在未提交的更改。 选择 **Stash Changes and Continue（暂存更改并继续）**以存储更改并继续，或选择 **Close（关闭）**以忽略消息并提交更改。 当不再有任何未提交的更改时，您可以压缩您的提交。

  ![压缩暂存对话框](/assets/images/help/desktop/squash-stash-dialog.png)
