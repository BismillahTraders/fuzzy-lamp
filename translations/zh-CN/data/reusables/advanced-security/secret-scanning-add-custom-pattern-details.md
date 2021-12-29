1. 输入新自定义模式的详细信息：
   1. 您至少必须提供模式的名称，以及秘密模式格式的正则表达式。
   1. 您可以点击**更多选项 {% octicon "chevron-down" aria-label="down" %}** 来提供密钥格式的其他周围内容或额外匹配要求。
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![创建自定义 {% data variables.product.prodname_secret_scanning %} 模式表](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. When you are satisfied with your new custom pattern, click {% ifversion fpt or ghes > 3.2 or ghae or ghec %}**Create pattern**{% elsif ghes = 3.2 %}**Create custom pattern**{% endif %}.
