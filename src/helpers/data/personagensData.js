// Personagens

import João from "../../assets/personagens/joão.png";
import Myke from "../../assets/personagens/marcos.png";
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

// Classes icon

import engenheiro from "../../assets/classes/engenheiro.svg"
import hacker from "../../assets/classes/hacker.svg"
import mestre from "../../assets/classes/mestre.svg"
import cyberSecurity from "../../assets/classes/cybersecurity.svg"
import desenvolvedor from "../../assets/classes/desenvolvedor.svg"

const personagens = [
  {
    id: 0,
    nome: "João",
    img: João,
    nivel: muito_facil,
    nivelTexto: "Muito Fácil",
    classe: "Desenvolvedor",
    classeIcon: desenvolvedor,
    descrição:
      "Trabalha como suporte criando novas habilidades ofensivas para outros aventureiros através das linhas de código.",
  },
  {
    id: 1,
    nome: "Myke",
    img: Myke,
    nivel: facil,
    nivelTexto: "Fácil",
    classe: "Engenheiro",
    classeIcon: engenheiro,
    descrição:
      "Myke é um engenheiro que desenvolve armas eletrônicas e robôs para combate.",
  },
  {
    id: 2,
    nome: "Diogo",
    img: Diogo,
    nivel: dificil,
    nivelTexto: "Difícil",
    classe: "Hacker",
    classeIcon: hacker,
    descrição:
      "Diogo é um hacker muito habilidoso. Ele consegue penetrar vários sistemas complexos para tirar informação dos seus inimigos.",
  },
  {
    id: 3,
    nome: "Clara",
    img: Clara,
    nivel: muito_dificil,
    nivelTexto: "Muito Difícil",
    classe: "Hacker",
    classeIcon: hacker,
    descrição:
      "Clara é uma hacker astuta que usa suas habilidades para controlar armas dos seus oponentes",
  },
  {
    id: 4,
    nome: "Ronaldo",
    img: Ronaldo,
    nivel: medio,
    nivelTexto: "Médio",
    classe: "CyberSecurity",
    classeIcon: cyberSecurity,
    descrição:
      "Ronaldo é um especialista em segurança cibernética. Protege os sistemas de seus aliados e ataca os inimigos com vírus e malwares.",
  },
  {
    id: 5,
    nome: "Tadeu",
    img: Tadeu,
    nivel: muito_dificil,
    nivelTexto: "Muito Difícil",
    classe: "Mestre",
    classeIcon: mestre,
    descrição:
      "Tadeu é um mestre em programação. Ele é capaz de criar feitiços e encantamentos poderosos que podem ser usados para proteger ou atacar.",
  },
  {
    id: 6,
    nome: "Leonardo",
    img: Leonardo,
    nivel: muito_facil,
    nivelTexto: "Muito Fácil",
    classe: "Desenvolvedor",
    classeIcon: desenvolvedor,
    descrição:
      "Leonardo é um desenvolvedor que cria novas habilidades defensivas para outros aventureiros através das linhas de código.",
  },
  {
    id: 7,
    nome: "Dalila",
    img: Dalila,
    nivel: medio,
    nivelTexto: "Médio",
    classe: "CyberSecurity",
    classeIcon: cyberSecurity,
    descrição:
      "Dalila é uma especialista em segurança cibernética. Ela protege os sistemas de seus aliados tornando-os imunes a ataques inimigos.",
  },
  {
    id: 8,
    nome: "Tony",
    img: Tony,
    nivel: dificil,
    nivelTexto: "Difícil",
    classe: "Engenheiro",
    classeIcon: engenheiro,
    descrição:
      "Tony é um super cachorro que desenvolveu inteligencia. Ele consegue se infiltrar nas fortalezas inimigas e destruí-las por dentro",
  },
];

export default personagens;
