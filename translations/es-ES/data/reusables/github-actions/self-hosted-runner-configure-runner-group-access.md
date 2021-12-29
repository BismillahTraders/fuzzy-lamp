1. En la sección de {% ifversion fpt or ghes > 3.1 or ghae or ghec %}"ejecutores"{% else %}"ejecutores auto-hospedados"{% endif %} de la página de ajustes, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} junto al grupo de ejecutores que te gustaría configurar y luego en **Editar el nombre y acceso a la [organización|repositorio]**. ![Administrar permisos del repositorio](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. Modifica tus opciones de política o cambia el nombre del grupo ejecutor.

   {% ifversion not ghae %}
   {% warning %}

   **Advertencia**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {% endif %}
