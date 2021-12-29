---
title: Adminsitrar los debates en tu repositorio
intro: 'Puedes categorizar, resaltar, transferir o borrar los debates en un repositorio.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Administrar los debates
---


## Acerca de la administración de los debates

{% data reusables.discussions.about-discussions %} Para obtener más información sobre los debates, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Los propietarios de la organización pueden elegir los permisos que se requieren para crear un debate en los repositorios que pertenezcan a la organización. Para obtener más información, consulta la sección "[Administrar la creación de debates para los repositorios de tu organización](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".

Como mantenedor de debates, puedes crear recursos comunitarios para impulsar los debates que se alinien con la meta general del proyecto y mantener así un foro abierto y amistoso para los colaboradores. El crear un código de conducta o lineamientos de contribución para que los colaboradores los sigan te ayudará a proporcionar un foro colaborativo y productivo. Para obtener más información sobre cómo crear recursos comunitarios, consulta las secciones "[Agregar un código de conducta a tu proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y "[Configurar los lineamientos para los contribuyentes de un repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

Cuando un debate produce una idea o error que está listo para solucionarse, puedes crear una propuesta nueva desde un debate. Para obtener más información, consulta la sección "[Crear una propuesta](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)".

Para obtener más información sobre cómo proporcionar un debate sano, consulta la sección "[Moderar los comentarios y conversaciones](/communities/moderating-comments-and-conversations)".

{% data reusables.discussions.you-can-label-discussions %}

## Prerrequisitos

Para administrar los debates en un repositorio, debes habilitar los {% data variables.product.prodname_discussions %} en este. Para obtener más información, consulta la sección "[Habilitar o inhabilitar los {% data variables.product.prodname_discussions %} para un repositorio](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)".

## Cambiar la categoría de un debate

Puedes categorizar los debates para ayudar a que los miembros de la comunidad encuentren aquellos que tengan alguna relación. Para obtener más información, consulta la sección "[Administrar las categorías para los debates en tu repositorio](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

También puedes migrar un debate a una categoría diferente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, a la derecha de "Categoría", haz clic en {% octicon "gear" aria-label="The gear icon" %}. ![Icono de "Categoría" con engrane](/assets/images/help/discussions/category-in-sidebar.png)
1. Haz clic en una categoría. ![Menú desplegable "Cambiar categoría"](/assets/images/help/discussions/change-category-drop-down.png)

## Fijar un debate

Puedes fijar hasta cuatro debates importantes sobre la lista de debates del repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pin" aria-label="The pin icon" %} **Fijar debate**. !["Fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-pin-discussion.png)
1. Opcionalmente, personaliza la apariencia del debate que fijaste. ![Opciones de personalización para un debate que se fijó](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Da clic en **Fijar debate**. ![Botón de "Fijar debate" debajo de las opciones de personalización para un debate fijado](/assets/images/help/discussions/click-pin-discussion-button.png)

## Editar un debate que se fijó

Editar un debate que se ha fijado no cambiará la categoría del mismo. Para obtener más información, consulta la sección "[Administrar las categorías para los debates en tu repositorio](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pencil" aria-label="The pencil icon" %} **Editar debate fijado**. !["Editar debate fijado" en la barra lateral derecha de un debate](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Personaliza la apariencia del debate que fijaste. ![Opciones de personalización para un debate que se fijó](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Da clic en **Fijar debate**. ![Botón de "Fijar debate" debajo de las opciones de personalización para un debate fijado](/assets/images/help/discussions/click-pin-discussion-button.png)

## Dejar de fijar un debate

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pin" aria-label="The pin icon" %} **Dejar de fijar debate**. !["Dejar de fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-unpin-discussion.png)
1. Lee la advertencia y luego da clic en **Dejar de fijar debate**. ![Botón de "Dejar de fijar debate" bajo advertencia en el modo](/assets/images/help/discussions/click-unpin-discussion-button.png)

## Transferir un debate

Para transferir un debate, debes tener permisos para crear debates en el repositorio a donde quieras trasnferirlo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra laeral derecha, da clic en {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transferir debate**. !["transferir debate" en la barra lateral derecha del mismo](/assets/images/help/discussions/click-transfer-discussion.png)
1. Selecciona el menú desplegable de **Elige un repositorio** y da clic en aquél al que quieras transferir el debate. ![Menú desplegable de "Elige un repositorio", campo de búsqueda de "Encuentra un repositorio", y repositorio en la lista](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Da clic en **Transferir debate**. ![Botón de "Transferir debate"](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Borrar un debate

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral, da clic en {% octicon "trash" aria-label="The trash arrow icon" %} **Borrar debate**. !["Borrar debate" en la barra lateral derecha del mismo](/assets/images/help/discussions/click-delete-discussion.png)
1. Lee la advertencia y luego da clic en **Borrar este debate**. ![Botón de "Borrar este debate" bajo advertencia en el modo](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Convertir propuestas con base en las etiquetas

Puedes convertir todas las propuestas con la misma etiqueta en debates, por lote. Las propuestas subsecuentes que tengan esta etiqueta también se convertirán automáticamente en el debate y categoría que configures.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Junto a la etiqueta que quieras convertir en una propuesta, da clic en **Convertir propuestas**.
1. Selecciona el menú desplegable de **Elige una categoría** y da clic en aquella que quieras para tu debate.
1. Da clic en **Entiendo, convertir esta propuesta en debate**.
