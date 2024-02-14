// Personagens

import João from "../../assets/personagens/joão.png";
import Marcos from "../../assets/personagens/marcos.png";
import Diogo from "../../assets/personagens/diogo.png";
import Ronaldo from "../../assets/personagens/ronaldo.png";
import Tadeu from "../../assets/personagens/tadeu.png";
import Clara from "../../assets/personagens/clara.png";
import Leonardo from "../../assets/personagens/leonardo.png";
import Dalila from "../../assets/personagens/dalila.png";
import Tony from "../../assets/personagens/tony.png";

// Status Bar

import muito_dificil from "../../assets/dificuldade/muito_dificil.svg";
import dificil from "../../assets/dificuldade/dificil.svg";
import medio from "../../assets/dificuldade/medio.svg";
import facil from "../../assets/dificuldade/facil.svg";
import muito_facil from "../../assets/dificuldade/muito_facil.svg";


const personagens = [
  {
    id: 0,
    nome: "João",
    img: João,
    nivel: muito_facil,
    classe: "Guerreiro",
    descrição:
      "João é um guerreiro que luta com espadas e escudos. Ele é um personagem de fácil aprendizado e é muito bom para iniciantes.",
  },
  {
    id: 1,
    nome: "Marcos",
    img: Marcos,
    nivel: medio,
    classe: "Mago",
    descrição:
      "Marcos é um mago que luta com magias e feitiços. Ele é um personagem de dificuldade média e é muito bom para jogadores intermediários.",
  },
  {
    id: 2,
    nome: "Diogo",
    img: Diogo,
    nivel: dificil,
    classe: "Arqueiro",
    descrição:
      "Diogo é um arqueiro que luta com arcos e flechas. Ele é um personagem de dificuldade alta e é muito bom para jogadores avançados.",
  },
  {
    id: 3,
    nome: "Clara",
    img: Clara,
    nivel: muito_dificil,
    classe: "Ladra",
    descrição:
      "Clara é uma ladra que luta com adagas e venenos. Ela é um personagem de dificuldade alta e é muito bom para jogadores avançados.",
  },
  {
    id: 4,
    nome: "Ronaldo",
    img: Ronaldo,
    nivel: medio,
    classe: "Paladino",
    descrição:
      "Ronaldo é um paladino que luta com espadas e escudos. Ele é um personagem de dificuldade média e é muito bom para jogadores intermediários.",
  },
  {
    id: 5,
    nome: "Tadeu",
    img: Tadeu,
    nivel: facil,
    classe: "Bárbaro",
    descrição:
      "Tadeu é um bárbaro que luta com machados e escudos. Ele é um personagem de fácil aprendizado e é muito bom para iniciantes.",
  },
  {
    id: 6,
    nome: "Leonardo",
    img: Leonardo,
    nivel: muito_facil,
    classe: "Clérigo",
    descrição:
      "Leonardo é um clérigo que luta com magias e feitiços. Ele é um personagem de fácil aprendizado e é muito bom para iniciantes.",
  },
  {
    id: 7,
    nome: "Dalila",
    img: Dalila,
    nivel: medio,
    classe: "Feiticeira",
    descrição:
      "Dalila é uma feiticeira que luta com magias e feitiços. Ela é um personagem de dificuldade média e é muito bom para jogadores intermediários.",
  },
  {
    id: 8,
    nome: "Tony",
    img: Tony,
    nivel: dificil,
    classe: "Necromante",
    descrição:
      "Tony é um necromante que luta com magias e feitiços. Ele é um personagem de dificuldade alta e é muito bom para jogadores avançados.",
  },
];

export default personagens;
