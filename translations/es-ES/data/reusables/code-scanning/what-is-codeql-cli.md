{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
El {% data variables.product.prodname_codeql_cli %} es un producto independiente que puedes utilizar para analizar código. Su propósito principal es generar una representación de base de datos de una base de código, una base de datos de {% data variables.product.prodname_codeql %}. Una vez que esté lista la base de datos, puedes consultarla interactivamente o ejecutar una suite de consultas para generar un conjunto de resultados en formato SARIF y cargarlos a {% data variables.product.product_location %}.
{% endif %}
