---
title: Inhabilitar los tableros de proyecto en tu organización
intro: Los propietarios de la organización pueden desactivar tableros de proyecto que se usan en toda la organización y tableros de proyecto de repositorios en una organización.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Inhabilitar los tableros de proyecto
---

Una vez que inhabilites tableros de proyecto que se usan en toda la organización, ya no se podrán crear nuevos tableros de proyecto a nivel de la organización, y ya no se podrá acceder a ningún tablero de proyecto existente a nivel de la organización en su URL anterior. Los tableros de proyecto en los repositorios de la organización no se ven afectados.

Una vez que inhabilites tableros de proyecto de repositorios en una organización, ya no se podrán crear nuevos tableros de proyecto en ningún repositorio de la organización, y ya no se podrá acceder a ningún tablero de proyecto de los repositorios existentes en la organización en sus URL anteriores. Los tableros de proyecto a nivel de la organización no se ven afectados.

Cuando inhabilitas los tableros de proyecto, ya no ves la información de los tableros de proyecto de manera cronológica o de acuerdo con los [registros de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Decide si deseas inhabilitar los tableros de proyecto que se usan en toda la organización, los tableros de proyecto de los repositorios de la organización, o ambos. Luego, en "Proyectos":
    - Para inhabilitar los tableros de proyecto que se usan en toda la organización, quita la marca de selección de **Habilitar proyectos para la organización**.
    - Para inhabilitar los tableros de proyecto de los repositorios en la organización, quita la marca de selección de **Habilitar proyectos para todos los repositorios**. ![Casillas de verificación para inhabilitar proyectos para una organización o para todos los repositorios de una organización](/assets/images/help/projects/disable-org-projects-checkbox.png)
5. Haz clic en **Save ** (guardar).

{% data reusables.organizations.disable_project_board_results %}

## Leer más

- "[Acerca de los tablero de proyecto](/articles/about-project-boards)"
- "[Cerrar un tablero de proyecto](/articles/closing-a-project-board)"
- "[Eliminar un tablero de proyecto](/articles/deleting-a-project-board)"
- "[Inhabilitar tableros de proyectos en un repositorio](/articles/disabling-project-boards-in-a-repository)"
