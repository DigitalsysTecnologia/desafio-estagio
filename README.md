# Desafio DigitalSys - RPG API

Esta API fornece uma plataforma para o gerenciamento de uma guilda em um mundo RPG. Ela permite que os usuários criem e gerenciem personagens (aventureiros) e missões. O sistema calculará e atualizará automaticamente os níveis e atributos dos personagens com base nas missões que eles completam. O primeiro usuário cadastrado será o Mestre da guilda, e terá permissões especiais para gerenciar missões e aventureiros.

## Tecnologias Utilizadas

- Golang
- Gin-Gonic
- GORM
- postgres

## Inicialização

Para rodar a aplicação localmente, siga as etapas abaixo:

1. Clone o repositório do GitLab:

```bash
$ git clone -b backend-golang https://github.com/mottapng/desafio-estagio.git
$ cd republics-backend
```

2. Instale Go

Se ainda não tiver o Go instalado, siga as instruções em [Install Go](https://golang.org/doc/install).

3. Instale as dependências do projeto

```bash
$ go mod download
```

4. Crie um banco de dados PostgreSQL e configure as variáveis de ambiente

| Variável        | Valor                                                               |
| --------------- | ------------------------------------------------------------------- |
| PORT=           | Porta que o servidor rodará localmente (se não informado será 8080) |
| DB_URL=         | Url para o acesso ao banco de dados postgres                        |
| JWT_SECRET_KEY= | Secret Key para a assinatura do token JWT                           |

5. Execute a aplicação

```bash
$ go run main.go
```

- A aplicação estará rodando em `http://localhost:<port>`

## Documentação da API

Você pode acessar a documentação da API em `http://localhost:<port>/swagger/index.html` ou através do link [Documentação da API](https://app.swaggerhub.com/apis-docs/mottapng/desafio-estagio/1.0).

## RF

- [x] O aventureiro deve poder solicitar seu cadastro na guilda fornecendo informações básicas
- [x] O aventureiro deve poder alterar seu nome e classe
- [x] O aventureiro deve poder visualizar seus dados e seu perfil de atributos
- [x] O aventureiro deve poder realizar a saída da guilda
- [x] O aventureiro deve poder visualizar as missões disponíveis
- [x] O aventureiro deve poder participar de uma missão se tiver o nível mínimo requerido
- [x] O mestre deve poder visualizar os aventureiros cadastrados
- [x] O mestre deve poder aceitar ou recusar a admissão de um aventureiro
- [x] O mestre deve poder expulsar um aventureiro da guilda
- [x] O mestre deve poder criar novas missões e atualizar seus status

## RN

- [x] O sistema deve entender que o primeiro cadastro na guilda pertence ao mestre
- [x] O sistema deve fornecer experiência para os aventureiros que completarem missões
- [x] O sistema deve aumentar os atributos com base no nível e classe do aventureiro

## RNF
