# Desafio Estágio - Catálogo de Jogo RPG

Bem-vindo ao Desafio de Estágio - Catálogo de Jogo RPG! Este projeto utiliza React e Vite para criar uma interface de um catalogo de um jogo RPG.

## Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Configuração do Projeto

1. Clone o repositório:

````bash
git clone https://github.com/seu-usuario/desafio-estagio.git

Navegue até o diretório do projeto:

```bash
cd desafio-estagio
````

2. Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Para executar o projeto, utilize o comando:

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

## Conteúdo do Projeto

- [x] Catálogo sobre um RPG
- [x] Lista dos personagens
- [x] Lista das missões
- [x] História sobre o jogo
- [x] Interface responsiva
- [x] Documentação

## Tecnologias Utilizadas

- [Figma](https://www.figma.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## Funcionalidades do projeto

### Lista de Personagens

A lista de personagens é composta por cards que contém a imagem do personagem, o nome e uma breve descrição.

Para adicionar um novo personagem, basta adicionar um novo objeto no array `personagens` no arquivo `src/helpers/data/personagensData.js`.

Exemplo de objeto:

```bash
{

    id: 0,
    nome: "Nome do personagem",
    img: url-da-imagem,
    nivel: url-da-imagem,
    nivelTexto: "Nível do personagem",
    classe: "Classe do personagem",
    classeIcon: "url-da-imagem",
    descrição:
      "Descrição do personagem",

},
```

### Lista de Missões

A lista de missões é composta por cards que contém o nome da missão e uma breve descrição.

Para adicionar uma nova missão, basta adicionar um novo objeto no array `missoes` no arquivo `src/helpers/data/missoesData.js`.

Exemplo de objeto:

```bash
{
  id: 0,
    title: "Nome da Missão",
    img: url-da-imagem,
    description:
     "Exemplo de descrição"
    nivel: "Nivel da missão",
  },
```

## Processo de Desenvolvimento

### Prototipagem

Utilizei os primeiros dias do desafio para criar um protótipo da interface utilizando o Figma e pesquisando referencias de catálogos de jogos, RPGs e interfaces de jogos.

### Desenvolvimento

Após a prototipagem, iniciei o desenvolvimento da interface utilizando React e Vite. O desenvolvimento foi feito de forma iterativa, onde a cada nova funcionalidade implementada, eu testava e validava a mesma.

### Arte

Todas as artes do projeto foram geradas através de algumas IA's de geração de arte, como o DALL-E e o Artbreeder.

## Autor

- [Yago](https://github.com/yagpdc)
