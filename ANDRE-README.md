# API RESTful com temática de RPG

A seguinte aplicação consiste em uma API que permite o gerenciamente de personagens, classes, guildas e suas missões.

A aplicação foi desenvolvida usando GO 1.22 e está estruturada da seguinte forma:

Controllers: Este diretório contém **routes.go** e **tokens.go**

**routes.go** -> contem todos os funções que tratam as rotas de API
**tokens.go** -> Contem as funções de criação e validação dos tokens via JWT

dboperations: Este diretório contém **conn2DB.go** e **operations.go**

**conn2DB.go** -> contem todas as funções que realizam as operaçoes com o banco de dados via GORM
**operations.go** -> contem a função que cria e encerra uma conexão com o banco de dados

migration: Este diretório contém **migrations.go**

**migrations.go** -> Contem as funções responsáveis pela criação das tabelas e migração de usa estrutura para o GORM

models: Este diretório contém **models.go**

**models.go** -> Contem as structs que representaram os dados no banco relacional via GORM

Por fim, main.go inicia a rota padrão do GIN GONIC e aguarda as chamadas da API

# Dependencias

As seguintes bibliotecas de terceiros foram utilizadas:

**Gin Gonic**: ``` $ go get -u github.com/gin-gonic/gin ```

**GORM**: ```$ go get -u gorm.io/gorm```

**MYSQL 8.0**

**JWT v5** ```$ go get -u github.com/golang-jwt/jwt/v5```

# Descrição de uso

**ADENDO**: Inicialmente, o projeto seria feito utilizando-se a biblioteca **godotenv**, utilizando-se de um arquivo .env para settar as variáveis de ambiente. Porém, no decorrer do projeto, por conta do github considerar o arquivo .env como oculto, pois o mesmo contém informações sigilosas, optei por não utilizar mais o arquivo .env. Portanto, algumas linhas de código estão escritas da forma "hardcode", de forma que estão assim **APENAS PARA MELHOR COMPREENÇÃO**, não sendo a forma que um sistema real seria implementado.

Inicialmente, inicie o serviço MySQL na porta 3306 (alteração na porta requerem alterações no código) e crie um schema com o nome "rpgdb"

```CREATE DATABASE rpgdb;```

Após isso, crie um usuário no qual nossa API usará para se comunicar com o banco de dados

```Código para criar usuário vai aqui !!!```

Após isso, adicione o projeto no seu GOPATH (Informações sobre o GOPATH podem ser obtidar por ```$ go help gopath```)

Por fim, após instalar todas as dependências, execute ```go run main.go``` para iniciar.

A API roda em LocalHost (127.0.0.1:8080)

Inicialmente, acesse /gettoken para receber um token de autenticação. Após isso, você poderá acessar as outras rotas

**Importante:** Todas as requisição são feitas na porta **8080**

# Funcionalidades

A API permite operação de criação de personagens, classes, guildas, missões e atribuição de missões a guildas. Seguem à baixo alguns exemplos:

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Recebe um token de autenticação por meio de cookies (**AVISO:** todo usuário deve, primeiramente, acessar este endpoint para recerber um token de autenticação, caso contrário, todas as outras rotas responderão com "http unauthorized")

**EndPoint:** /gettoken

**Método:**  GET

**Exemplo de JSON:** --

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Cria um personagem a partir de um JSON enviado. Todo personagem inicia sem guild e no nível 1. (Certifique-se de usar uma classe existente. Caso contrário, a resposta será "http badRequest")

**EndPoint:** /createchar

**Método:**  POST

**Exemplo de JSON:** ```{
    "Nome": "exemplo",
    "ClasseID": 5
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Retorna todos os personagens cadastrados

**EndPoint:** /getallchar

**Método:**  GET

**Exemplo de JSON:** --

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Deleta um personagem a partir do seu ID

**EndPoint:** /deletechar

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 1
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Busca por um personagem específico

**EndPoint:** /updatechar

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 1
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Atualiza as informações de um personagem cadastrado

**EndPoint:** /findchar

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 1,
    "Nome": "fulano",
    "Level" 45,
    "GuildaID": null,
    "ClasseID": 4
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Cria uma nova classe

**EndPoint:** /createclass

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 8,
    "Nome": "mago"
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Cria uma nova guilda

**EndPoint:** /crateguild

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 28,
    "Nome": "Compania do copo dourado"
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Cria uma nova missão

**EndPoint:** /createquest

**Método:**  POST

**Exemplo de JSON:** ```{
    "ID": 9,
    "Descricao": "Matar goblins"
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Atribui uma missão a uma guilda

**EndPoint:** /givequest

**Método:**  POST

**Exemplo de JSON:** ```{
    "IDGuilda": 28,
    "IDMissao": 9
}```

-------------------------------------------------------------------------------------------------------------------------------------
**Descrição:** Remove uma missão de uma guilda

**EndPoint:** /quitquest

**Método:**  POST

**Exemplo de JSON:** ```{
    "IDGuilda": 28
}```
