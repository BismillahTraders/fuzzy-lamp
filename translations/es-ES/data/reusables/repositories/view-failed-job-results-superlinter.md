{% ifversion fpt or ghes or ghec %}
1. Cualquier paso que falle se expandirá automáticamente para mostrar los resultados.
   {% ifversion fpt or ghes > 3.0 or ghec %}
   ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png){% else %}
![Super linter workflow results](/assets/images/help/repository/super-linter-workflow-results-updated.png){% endif %}
{% else %}
1. Expande el paso de **Ejecutar Super-Lnter** para ver los resultados. ![Resultados del flujo de trabajo de Super linter](/assets/images/help/repository/super-linter-workflow-results.png)
{% endif %}
