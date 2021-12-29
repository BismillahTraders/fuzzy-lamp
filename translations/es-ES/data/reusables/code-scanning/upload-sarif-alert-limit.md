{% note %}

**Notas:**
- La carga de SARIF es compatible con un máximo de {% ifversion ghae or fpt or ghes > 3.0 or ghec %}5000{% else %}1000{% endif %} resultados por carga. Cualquier resultado que sobrepase este límite se ignorará. Si una herramienta genera demasiados resultados, debes actualizar la configuración para enfocarte en los resultados de las reglas o consultas más importantes.

 - Para cada carga, la carga de SARIF es compatible con un tamaño máximo de 10 MB para el archivo comprimido de `gzip`. Cualquier carga que esté sobre este límite, se rechazará. Si tu archivo SARIF es demasiado grande porque contiene demasiados resultados, debes actualizar la configuración para enfocarte en los resultados de las reglas o consultas más importantes.

{% endnote %}
