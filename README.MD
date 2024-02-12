Este documento fornece uma visão geral da API em Django e suas funcionalidades para realizar operações CRUD (Create, Read, Update, Delete) em uma entidade de usuário. A API é construída usando Django e o framework Django REST Framework.

Estrutura do Projeto O projeto está estruturado da seguinte forma:



api_root: Configuração principal do projeto Django.
    settings.py: Configurações do projeto Django, incluindo configurações de banco de dados, middleware, URLs permitidas, etc.
    urls.py: Define as rotas da API.
    wsgi.py: Ponto de entrada para servir a aplicação através do WSGI.


    
    
api_rest: Aplicação principal do projeto.
    models.py: Define os modelos de dados, incluindo a definição de usuário.
    serializers.py: Serializadores para converter objetos Python em JSON.
    views.py: Contém as views da API, incluindo funções para realizar operações CRUD.
    
db.sqlite3: Banco de dados SQLite3 para armazenamento de dados.





Funcionalidades da API

A API oferece as seguintes funcionalidades: Obter Todos os Usuários (GET /)
Endpoint: / Descrição: Retorna todos os usuários cadastrados.



Método HTTP: GET Obter Usuário pelo Nickname (GET /user/str:nick)
Endpoint: /user/str:nick Descrição: Retorna um usuário com base no nickname fornecido.




Método HTTP: GET Gerenciar Usuários (GET /data/)
Endpoint: /data/ Descrição: Gerencia operações CRUD para usuários.




Métodos HTTP: GET, POST, PUT, DELETE 
GET: Obtém detalhes de um usuário com base no ID fornecido. 
POST: Cria um novo usuário. 
PUT: Atualiza os detalhes de um usuário com base no ID fornecido. 
DELETE: Exclui um usuário com base no ID fornecido.



Bibliotecas Utilizadas:

A API utiliza as seguintes bibliotecas/frameworks: 
Django: Um framework web de alto nível escrito em Python. 
Django REST Framework: Uma poderosa e flexível toolkit para construir APIs web. 
corsheaders: Uma biblioteca Django para gerenciar cabeçalhos CORS (Cross-Origin Resource Sharing).

Configuração SECRET_KEY: Chave secreta para segurança do Django (para desenvolvimento, deve ser alterada em produção). 
DEBUG: Configuração de depuração, ativa para ambiente de desenvolvimento. 
ALLOWED_HOSTS: Lista de hosts permitidos para servir a aplicação Django. 
INSTALLED_APPS: Lista de aplicações instaladas no projeto, incluindo Django REST Framework e corsheaders. 
MIDDLEWARE: Lista de middlewares aplicados a cada requisição. 
DATABASES: Configurações do banco de dados, utilizando SQLite3 por padrão para este projeto. 
CORS_ALLOW_ORIGINS: Lista de origens permitidas para solicitações CORS.



Observações Este é um exemplo simples de uma API em Django para operações CRUD em uma entidade de usuário. A implementação deve ser adaptada e aprimorada conforme as necessidades específicas do projeto, incluindo autenticação, autorização, validações de entrada, tratamento de erros, entre outros. Além disso, em um ambiente de produção, considere a utilização de um banco de dados mais robusto, como PostgreSQL ou MySQL.

Nesta Imagem é feito a pesquisa da pessoa cadastrada diretamente pela URL, digitando apenas o número do ID desejado, trazendo assim as informações do mesmo.

![2](https://github.com/Lvitor1002/backend-Python/assets/126728488/805c8c22-27de-40ca-9b22-fda6acbe8c2b)



Retorno:

![1](https://github.com/Lvitor1002/backend-Python/assets/126728488/f17624fc-7a01-43f7-bb86-bef6c0c8a402)



Área de gerênciamento do framework Django;

![3](https://github.com/Lvitor1002/backend-Python/assets/126728488/973c2128-6e76-4c5b-9f07-4c163fdd440c)





