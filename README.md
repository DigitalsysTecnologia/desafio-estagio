
# Dev Backend (Golang) - O Guardião dos Dados

A API foi desenvolvida em Golang utilizando o framework Gin Gonic e a biblioteca GORM para interação com o banco de dados Postgre. O principal objetivo da API é administrar as missões de uma guilda de aventureiros, oferecendo a criação de usuários para a manipulação da API e operações CRUD (Create, Read, Update, Delete) para manipulação dessas missões.


## Tecnologias utilizadas
- *<a href="https://go.dev/">Go</a>*
- *<a href="https://gin-gonic.com/">Gin Gonic</a>*
- *<a href="https://gorm.io/index.html">GORM</a>*
- *<a href="https://www.postgresql.org/">PostgreSQL</a>*

## Rodando a api
1. Clone o repositório do GitHub em sua máquina local:

```bash
git clone https://github.com/Warier/desafio-estagio.git
```


Navegue até o diretório do projeto:

```bash
cd desafio-estagio
```


Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina.


2. No .env na raiz do projeto adicione as variáveis de ambiente, substituindo os valores conforme sua configuração:


3. Instale as dependências do projeto


```bash
go mod tidy
```

4. Execute o arquivo de migração para criar as tabelas no banco de dados:

```bash
go run migrate/migrate.go
```


5. Inicie o servidor da API:

```bash
go run cmd/server/main.go
```


Após seguir esses passos, o servidor da API estará em execução localmente em http://localhost:0000 na porta escolhida no .env. Você pode acessar os endpoints da API conforme documentado para criar, ler, atualizar e excluir missões de aventura ou criar usuários.

## Usando a api

Após iniciar a api, para que seja possível manipular as missões da guilda é necessário criar um usuário com um nome que receberá uma chave de acesso aos demais serviços da api, como demonstrado na rota a seguir:


### POST /usercreate

Para criar um usuário e assim receber uma chave de acesso, é necessário enviar um JSON formatado com o nome que será utilizado
```json
{
"name" : "xxxx"
}
```

Com isso feito, caso não haja erros será recebido o JSON com a seguinte resposta:
```json

{
"User": {
"ID": 19,
"CreatedAt": "2024-02-13T00:09:38.16216655-03:00",
"UpdatedAt": "2024-02-13T00:09:38.16216655-03:00",
"DeletedAt": null,
"Name": "xxxx",
"Key": "4962666f885a90ad1c44ed83eb668684"
}
}
```

Nessa resposta será possível adquirir a chave de acesso para as proximas rotas, como foi dada a seguinte:  "4962666f885a90ad1c44ed83eb668684"

### POST /missioncreate

Nessa rota será possível fazer a criação de novas missões para a guilda. Primeiramente será necessário adicionar a chave após a rota para que seja possível autenticar o usuário, como no exemplo a seguir:

`http://localhost:0000/missioncreate/4962666f885a90ad1c44ed83eb668684`

Para criar a missão, será necessário colocar o nome e a descrição como no exemplo:

```json

{
  "Name" : "missão xxxx",
  "Description": "xxxxxx  xxxxxx xxxxx"
}
```

Com isso feito, caso não haja erros será recebido o JSON com a seguinte resposta:

```json
{
  "mission": {
    "ID": 10,
    "CreatedAt": "2024-02-13T00:22:11.984891076-03:00",
    "UpdatedAt": "2024-02-13T00:22:11.984891076-03:00",
    "DeletedAt": null,
    "Name": "missão xxxx",
    "Description": "xxxxxx  xxxxxx xxxxx"
  }
}
```

### GET /missionsearch

Nessa rota será possível fazer a busca de missões criadas para a guilda. Primeiramente será necessário adicionar o ID da missão que deseja receber e após isso a chave  para que seja possível autenticar o usuário, como no exemplo a seguir:

`http://localhost:0000/missionsearch/10/4962666f885a90ad1c44ed83eb668684`


Com isso feito, caso não haja erros será recebido o JSON com a missão pesquisada:

```json
{
  "mission": {
    "ID": 10,
    "CreatedAt": "2024-02-13T00:22:08.451888-03:00",
    "UpdatedAt": "2024-02-13T00:22:08.451888-03:00",
    "DeletedAt": null,
    "Name": "missão xxxx",
    "Description": "xxxxxx  xxxxxx xxxxx"
  }
}
```
### POST /missionupdate

Nessa rota será possível fazer a atualização das missões para a guilda. Primeiramente será necessário adicionar o ID da missão que deseja atualizar e após isso a chave  para que seja possível autenticar o usuário, como no exemplo a seguir:

`http://localhost:0000/missionupdate/9/4962666f885a90ad1c44ed83eb668684`

Para atualizar a missão, será necessário colocar o nome e a descrição como no exemplo:

```json

{
  "Name" : "missão yyyy",
  "Description": "yyyyyy yyyyy yyyyy"
}
```

Com isso feito, caso não haja erros será recebido o JSON com a seguinte resposta:

```json
{
  "mission": {
    "ID": 9,
    "CreatedAt": "2024-02-13T00:22:09.917345-03:00",
    "UpdatedAt": "2024-02-13T00:36:02.395192134-03:00",
    "DeletedAt": null,
    "Name": "missão yyyy",
    "Description": "yyyyyy yyyyy yyyyy"
  }
}
```

### GET /missiondelete

Nessa rota será possível excluir uma missão da guilda. Primeiramente será necessário adicionar o ID da missão que deseja excluir e após isso a chave  para que seja possível autenticar o usuário, como no exemplo a seguir:

`http://localhost:0000/missiondelete/10/4962666f885a90ad1c44ed83eb668684`


Com isso feito, caso não haja erros será recebido o JSON com a seguinte resposta:

```json
{
  "message": "Missão excluída com sucesso"
}
```

### GET /missionindex

Nessa rota será possível ver todas as missões da guilda. Primeiramente será necessário adicionar  a chave  para que seja possível autenticar o usuário, como no exemplo a seguir:

`http://localhost:0000/missionindex/4962666f885a90ad1c44ed83eb668684`


Com isso feito, caso não haja erros será recebido o JSON com a seguinte resposta com todas as missões:

```json
[
    {
  "ID": 7,
  "CreatedAt": "2024-02-13T00:22:06.90017-03:00",
  "UpdatedAt": "2024-02-13T00:22:06.90017-03:00",
  "DeletedAt": null,
  "Name": "missão xxxx",
  "Description": "xxxxxx  xxxxxx xxxxx"
},
{
"ID": 8,
"CreatedAt": "2024-02-13T00:22:08.451888-03:00",
"UpdatedAt": "2024-02-13T00:22:08.451888-03:00",
"DeletedAt": null,
"Name": "missão xxxx",
"Description": "xxxxxx  xxxxxx xxxxx"
},
{
"ID": 9,
"CreatedAt": "2024-02-13T00:22:09.917345-03:00",
"UpdatedAt": "2024-02-13T00:36:02.395192-03:00",
"DeletedAt": null,
"Name": "missão yyyy",
"Description": "yyyyyy yyyyy yyyyy"
}
]
```

