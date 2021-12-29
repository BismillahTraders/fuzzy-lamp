---
title: Customizing your organization's profile
intro: You can share information about your organization by customizing your organization's profile
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
shortTitle: Customize organization profile
---

## About your organization's profile README

You can share information about how to engage with your organization by creating an organization profile README. {% data variables.product.prodname_dotcom %} shows your organization profile README in the "Overview" tab of your organization.

You can choose what information to include your organization profile README. Here are some examples of information that may be helpful in your organization's profile README.

- An "About" section that describes your organization
- Guidance for getting help in the organization

You can format text and include emoji, images, and GIFs in your organization profile README by using {% data variables.product.company_short %} Flavored Markdown. 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)”。

## Adding an organization profile README

1. If your organization does not already have a public `.github` repository, create a public `.github` repository.
2. In your organization's `.github` repository, create a `README.md` file in the `profile` folder.
3. Commit the changes to the `README.md` file. The content of the `README.md` will appear on your organization's profile.
