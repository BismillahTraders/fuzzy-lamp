{% ifversion ghae %}Se as políticas da empresa permitem a bifurcação de repositórios internos e privados, Você{% else %}Você{% endif %} pode criar um fork de um repositório para a sua conta de usuário ou para qualquer organização onde você tenha permissões de criação de repositório. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% ifversion fpt or ghes or ghec %}

Se você tem acesso a um repositório privado e o proprietário permite a bifurcação, você pode criar um fork do repositório para a conta do usuário ou para qualquer organização em {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} onde você tem permissões de criação de repositório. {% ifversion fpt or ghec %}Você não pode criar um repositório privado para uma organização usando {% data variables.product.prodname_free_team %}. Para obter mais informações, consulte "[produtos do GitHub](/articles/githubs-products)."{% endif %}

{% endif %}
