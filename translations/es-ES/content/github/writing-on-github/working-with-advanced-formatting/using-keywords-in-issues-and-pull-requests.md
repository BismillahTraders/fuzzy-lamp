---
title: Utilizar palabras clave en propuestas y solicitudes de cambio
intro: Utiliza las palabras clave para enlazar una propuesta y solicitud de cambios o para marcarlas como duplicadas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
---

## Vincular una solicitud de cambios a una propuesta

Para enlazar una solicitud de cambios a una propuesta para{% ifversion fpt or ghes or ghae or ghec %} mostrar que una solución se encuentra en progreso y para{% endif %} cerrar la propuesta automáticamente cuando alguien fusiona la solicitud de cambios, teclea alguna de las siguientes palabras clave seguida de una referencia a la propuesta. Por ejemplo, `Closes #10` o `Fixes octo-org/octo-repo#100`.

* close
* closes
* closed
* fix
* fixes
* fixed
* resolver
* resuelve
* resuelto

Para obtener más información, consulta la sección "[Vincular una solicitud de extracción a un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

## Marcar una propuesta o solicitud de cambio como duplicada

Para marcar una propuesta o solicitud de extracción como un duplicado, escribe "Duplicado de" seguido del número de propuesta o solicitud de extracción que se duplica en el cuerpo de un comentario nuevo. Para obtener más información, consulta la sección "[Marcar propuestas o solicitudes de cambio como duplicados](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)".
