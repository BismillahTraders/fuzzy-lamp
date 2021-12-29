1. Enter the details for your new custom pattern:
   1. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. You can click **More options {% octicon "chevron-down" aria-label="down" %}** to provide other surrounding content or additional match requirements for the secret format.
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![Create a custom {% data variables.product.prodname_secret_scanning %} pattern form](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. When you are satisfied with your new custom pattern, click {% ifversion fpt or ghes > 3.2 or ghae or ghec %}**Create pattern**{% elsif ghes = 3.2 %}**Create custom pattern**{% endif %}.
