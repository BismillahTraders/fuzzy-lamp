---
title: 项目快速开始（测试版）
intro: 通过在此交互式指南中创建项目来体验项目（测试版）的速度、灵活性和自定义。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## 简介

本指南演示如何使用项目（测试版）规划和跟踪工作。 在本指南中，您将创建一个新项目，并添加自定义字段来跟踪任务的优先级。 您还将学习如何创建保存的视图，帮助您与协作者交流优先事项和进度。

## 基本要求

You can either create an organization project or a user project. To create an organization project, you need a {% data variables.product.prodname_dotcom %} organization. 有关创建组织的更多信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

In this guide, you will add existing issues from repositories owned by your organization (for organization projects) or by you (for user projects) to your new project. 有关创建议题的更多信息，请参阅“[创建议题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

## 创建项目

First, create an organization project or a user project.

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## 为您的项目添加议题

接下来，在项目中添加一些议题。

当您的新项目初始化时，它会提示您为项目添加事项。 如果您丢失此视图或想稍后添加更多议题，请将光标放在项目底部一行 {% octicon "plus" aria-label="plus icon" %} 的旁边。

1. 输入 `#`。
2. 选择议题所在的仓库。 要缩小选项范围，您可以开始键入仓库名称的一部分。
3. 选择您的议题。 要缩小选项范围，您可以开始键入议题标题的一部分。

重复上述步骤几次，以向项目添加多个议题。

有关向项目添加议题的其他方法，或有关您可以向项目添加其他项的信息，请参阅“[创建项目](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)”。

## 创建字段来跟踪优先级

现在，创建一个名为 `Priority` 的自定义字段，以包含值：`High`、`Medium` 或 `Low`。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Create new field" 的任何部分。
3. 选择 **Create new field（创建新字段）**。
4. 在弹出窗口的文本框中输入 `Priority`。
5. 在下拉菜单中，选择 **Single select（单选）**。
6. 添加 `High`、`Medium` 和 `Low` 的选项。 您还可以在选项中包含表情符号。 ![新建单选字段示例](/assets/images/help/projects/new-single-select-field.png)
7. 单击 **Save（保存）**。

指定项目中所有议题的优先级。

![示例优先级](/assets/images/help/projects/priority_example.png)

## 按优先级对议题分组

接下来，按优先级对项目中的所有项进行分组，以便于专注于高优先级项。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Group by" 的任何部分。
3. 选择 **Group by: Priority（分组依据：优先级）**。

现在，在组之间移动议题以更改其优先级。

1. 选择议题.
2. 将议题拖放到另一个优先级组。 当您这样做时，议题的优先级将更改为其新组的优先级。

![在组之间移动议题](/assets/images/help/projects/move_between_group.gif)

## 保存优先级视图

在上一步按优先级对议题分组时，项目显示一个指示来显示视图已修改。 保存这些更改，以便您的协作者也能看到按优先级分组的任务。

1. 选择视图名称旁边的下拉菜单。
2. 单击 **Save changes（保存更改）**。

要指示视图的目的，请给它一个描述性名称。

1. 将光标放在当前视图名称 **View 1** 中。
2. 用新名称 `Priorities` 替换现有文本。

您可以与您的团队共享 URL，让每个人就项目优先级保持一致。

保存视图后，打开项目的任何人都将看到保存的视图。 在这里按优先级分组，但您还可以添加其他修饰符，如排序、筛选或布局。 接下来，您将创建一个修改了布局的新视图。

## Adding a board layout

要查看项目议题的进度，您可以切换到板布局。

The board layout is based on the status field, so specify a status for each issue in your project.

![示例状态](/assets/images/help/projects/status_example.png)

然后，创建新视图。

1. 点击右侧视图旁边的 {% octicon "plus" aria-label="the plus icon" %} **New view（新视图）**。

接下来，切换到板布局。

1. {% data reusables.projects.open-command-palette %}
2. 开始键入 "Switch layout: Board" 的任何部分。
3. 选择 **Switch layout: Board（切换布局：板）**。 ![示例优先级](/assets/images/help/projects/example_board.png)

更改布局时，项目显示一个指示来显示视图已修改。 保存此视图，以便您和您的协作者能够轻松地访问它。

1. 选择视图名称旁边的下拉菜单。
2. 单击 **Save changes（保存更改）**。

要指示视图的目的，请给它一个描述性名称。

1. 将光标放在当前视图名称 **View 2** 中。
2. 用新名称 `Progress` 替换现有文本。

![示例优先级](/assets/images/help/projects/project-view-switch.gif)

## Configure built-in automation

Finally, add a built in workflow to set the status to **Todo** when an item is added to your project.

1. In your project, click {% octicon "workflow" aria-label="the workflow icon" %}.
2. Under **Default workflows**, click **Item added to project**.
3. Next to **When**, ensure that both `issues` and `pull requests` are selected.
4. Next to **Set**, select **Status:Todo**.
5. Click the **Disabled** toggle to enable the workflow.

## 后续步骤

您可以将项目用于广泛的用途。 例如：

- 跟踪发布工作
- 计划冲刺
- 优先处理积压工作

以下是一些帮助您对 {% data variables.product.prodname_github_issues %} 执行后续操作的有用资源：

- 要提供有关项目（测试版）体验的反馈，请访问 [gitHub 反馈库](https://github.com/github/feedback/discussions/categories/issues-feedback)。
- 要详细了解有关项目如何帮助您进行规划和跟踪，请参阅“[关于项目](/issues/trying-out-the-new-projects-experience/about-projects)”。
- 要详细了解您可以添加到项目的字段和项，请参阅“[创建项目](/issues/trying-out-the-new-projects-experience/creating-a-project)”。
- 要详细了解显示所需信息的方式，请参阅“[自定义项目视图](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”。
