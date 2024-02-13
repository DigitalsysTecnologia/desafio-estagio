
## Dev Backend (Golang) - O Guardião dos Dados
Esta é uma API desenvolvida em Golang, utilizando o framework Gin Gonic e a ferramenta GORM, que oferece funcionalidades de operações CRUD (Create, Read, Update, Delete) para criar missões em uma temática de RPG. A API permite a criação e autenticação de usuários, os quais podem administrar a criação, pesquisa, edição e deleção de missões de uma guilda de aventureiros.

### Tecnologias e Ferramentas
- *<a href="https://go.dev/">Go</a>*
- *<a href="https://gin-gonic.com/">Gin Gonic</a>*
- *<a href="https://gorm.io/index.html">GORM</a>*
- *<a href="https://www.elephantsql.com/">ElephantSQL</a>*
- *<a href="https://tableplus.com/">TablePlus</a>*
- *<a href="https://www.postman.com/">Postman</a>*

### Configuração do ambiente
1. Faça a configuração inicial das ferramentas listadas: 
- Instale a linguagem Golang e suas bibliotecas Gin Gonic e GORM;
- Cadastre-se na plataforma ElephantSQL, crie uma instância e copie a URL de sua instância;
- Instale a ferramenta TablePlus e crie uma nova conexão com a URL de sua instância ElephantSQL;
- Cadastre-se na plataforma Postman, e instale a ferramenta em sua máquina.

2. Clone o repositório, utilizando o seguinte comando:

```bash
https://github.com/LCostaF/desafio-estagio.git
```

3. Localize o diretório com o repositório clonado, e o arquivo `.env`. Edite a variável `DB_URL` dentro do arquivo `.env` conforme as credenciais de sua instância na plataforma ElephantSQL.

4. Abra o projeto com alguma IDE ou editor para a linguagem Go, como o Visual Studio Code. Execute o seguinte comando para instalar as dependências do projeto:

```bash
go mod tidy
```

5. Execute o arquivo `migrate.go` para criar automaticamente as tabelas no banco de dados:

```bash
go run migrate/migrate.go
```

6. Crie um Workspace na ferramenta Postman, criando nele duas coleções, uma para missões e outra para usuários.

7. Crie 5 requisições (requests) dentro da coleção de missões, e 2 dentro da coleção de usuários, configurando-as da seguinte forma:

![image](https://github.com/LCostaF/desafio-estagio/assets/146568540/6889f1c8-20db-49a0-9cff-245af67183e1)

![image](https://github.com/LCostaF/desafio-estagio/assets/146568540/0c18426e-b14f-4f0f-852c-2deffc797ba3)


8. Ao finalizar a configuração, poderá utilizar o comando abaixo para executar a API. A configuração, visualização e manipulação dos dados de usuários e missões poderão então serem feitas pelas ferramentas e suas interações com os endpoints.

```bash
go run .
```

### Utilizando a API
Após a configuração do ambiente e execução da API, as operações para usuários e missões poderão ser realizadas com uso da ferramenta Postman.

#### Operações de usuários
As operações disponíveis para usuários são o registro de um novo usuário, e o login de um usuário já existente.

##### Registrar novo usuário
Ao executar a API pela primeira vez, é necessário criar um novo usuário para permitir a realização de operações CRUD em missões.

Na ferrmenta Postman, selecione a requisição Register User. Na aba Body, selecione a opção raw, e forneça os dados em formato JSON:

```json
{
    "Username": "aaa",
    "Password": "123"
}
```

Acione o botão Send, e se não houver erros o novo usuário será criado. Note que o nome de cada usuário é único, então não será possível criar vários usuários com o mesmo valor para o campo Username.

##### Login de usuário
Para efetuar Login com um usuário existente, após executar a aplicação selecione a requisição Login User. Na aba Body, selecione a opção raw, e forneça os dados de login em formato JSON, assim como no processo de registro de um novo usuário.

É necessário ter efetuado o login de usuário para poder executar as operações de missões.

#### Operações de missões
As operações disponíveis para missãos são operações as CRUD, ou seja, criação, busca, atualização e remoção de missões.

##### Criando uma missão
Para criar uma nova missão, na ferramenta Postman selecione a requisição Create Mission. Na aba body, selecione a opção raw, e forneça os dados da missão em formato JSON. Acione o botão Send para criar a missão.

```json
{
    "Title": "Wolves",
    "Description": "Kill 15 wolves"
}
```

##### Busca geral de missões
Para obter uma lista com todas as missões existentes, selecione a requisição Query All Missions, e acione o botão Send.

##### Busca específica de missão
Para obter os dados de uma missão específica, selecione a requisição Query One Mission, editando o valor id na URL:

```
http://localhost:3000/missions/id
```

Onde id refere-se ao índice da missão desejada no banco de dados. Acione o botão Send para obter os dados.

##### Atualização de missão
Para atualizar os dados de uma missão, selecione a requisição Update Mission, e edite o valor id na URL para informar o ID da missão cujos campos serão alterados.

```
http://localhost:3000/missions/id
```

Em seguida, na aba Body, selecione a opção raw, e forneça os novos dados da missão em formato JSON. Acione o botão Send para atualizar os dados.

```json
{
    "Title": "Goblins",
    "Description": "Kill 20 goblins"
}
```

Caso deseje alterar somente um dos campos da missão, forneça apenas o campo a ser alterado.

```json
{
    "Title": "Goblins Trouble"
}
```

```json
{
    "Description": "Kill 100 goblins"
}
```

##### Remoção de missão
Para remover uma missão, selecione a requisição Delete Mission, e edite o valor id na URL para informar o ID da missão a ser removida. Acione o botão Send para remover a missão.

```
http://localhost:3000/missions/id
```
