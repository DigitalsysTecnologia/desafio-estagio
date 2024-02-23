
# Desafio Técnico Estágio

Este repositório apresenta um solução para o desafio técnico como parte do processo seletivo para a vaga de estágio.

O desafio consiste em uma API RESTful que permite operações CRUD em missões de aventura tendo como temática o universo dos RPGs.


## Estrutura da API

A API implementa um CRUD para as missões, permitindo as seguintes operações:

- Criação de missões
- Busca de todas as missões cadastradas
- Busca de uma missão através do seu ID
- Atualizaçaõ de missões
- Exclusão de missões

As missões possuem as seguintes propriedades:

- **Id**
- **Nome**
- **Descrição**
- **Level Recomendado**
- **Localização**
- **Recompensa**
- **Dificuldade**

Para ter acesso às rotas do CRUD de missões, um usuário precisa estar devidamente autenticado, com esse objetivo a API implementa uma rota de **login** simples, validando as credenciais do usuário e retornando um **token de autenticação**.

A API implementa também um CRUD para usuários, permitindo as mesmas operação do CRUD de missões. Os usuários possuem as seguintes propriedades:

- **Id**
- **Nome**
- **Email**
- **Senha**

O login é feito através das credencias de **Email** e **Senha**


## Inicialização

Siga as etapas descritas abaixo para executar o servidor localmente:

1. Clone o repositório do github

3. Configure as variáveis de ambiente:

- Crie um arquivo `.env` **na raiz** do diretório do projeto.
- No arquivo `.env`, crie as variáveis de ambiente com base no arquivo `.env.example`


4. Instale as dependências necessárias através do comando:
```
go mod tidy
```

5. Inicialize o servidor através do comando:
```
go run main.go
```
## Documentação da API

A documentação da API pode ser acessada **[através desse link](https://documenter.getpostman.com/view/27729819/2sA2rCSgHc#452e09ab-d148-4264-b814-d7436b1bc0c8 'através desse link')**


## Tecnologias utilizadas

- **Gin Gonic**
- **GORM**
- **PostgreSQL**