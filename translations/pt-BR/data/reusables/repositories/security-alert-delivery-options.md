{% ifversion not ghae %}
Se o seu repositório tem um manifesto de dependência compatível
{% ifversion fpt or ghec %} (e se você configurou o gráfico de dependências se for um repositório privado){% endif %}, sempre que {% data variables.product.product_name %} detectar uma dependência vulnerável no repositório, você receberá um e-mail com o resumo semanal. Você também pode configurar os seus alertas de segurança como notificações web, notificações individuais de e-mail, resumo de e-mail diários ou alertas na interface de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
{% endif %}
