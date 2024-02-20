import missao1 from "../img/missao1.jpg";
import missao2 from "../img/missao2.jpg";
import missao3 from "../img/missao3.jpg";
import missao4 from "../img/missao4.jpg";
import missao5 from "../img/missao5.jpg";
import missao6 from "../img/missao6.jpg";

const missions = [
  {
    id: 1,
    img: missao1,
    title: "Roubo da Relíquia Sagrada",
    description:
      "Os Templários roubaram uma relíquia sagrada dos Vikings e a esconderam em seu forte. Sua missão é infiltrar-se nas defesas inimigas, enfrentar os guardas templários e recuperar a relíquia antes que ela caia nas mãos erradas.",
  },
  {
    id: 2,
    img: missao2,
    title: "Pacto com os Deuses",
    description:
      "Os Deuses Antigos convocaram os Vikings para realizar um ritual antigo e garantir sua proteção contra os avanços dos Templários. Sua tarefa é acompanhar o sacerdote viking em uma jornada perigosa até o local sagrado e protegê-lo dos ataques dos templários enquanto ele realiza o ritual.",
  },
  {
    id: 3,
    img: missao3,
    title: "Batalha pela Supremacia",
    description:
      "Uma grande batalha se aproxima entre os exércitos Viking e Templário pelo controle de uma fortaleza estratégica. Você é encarregado de liderar as tropas vikings no campo de batalha, coordenando ataques e defesas para garantir a vitória e estabelecer a supremacia sobre o inimigo.",
  },
  {
    id: 4,
    img: missao4,
    title: "Traição nas Sombras",
    description:
      "Um espião templário infiltrou-se nas fileiras vikings e está planejando um ataque surpresa durante a próxima assembleia do clã. Sua missão é descobrir a identidade do traidor, reunir provas de sua traição e impedir que ele coloque em prática seus planos nefastos.",
  },
  {
    id: 5,
    img: missao5,
    title: "Jornada ao Desconhecido",
    description:
      "Os sábios vikings descobriram a existência de uma terra misteriosa além dos mares, repleta de tesouros e perigos desconhecidos. Você é convocado para liderar uma expedição audaciosa até essa terra distante, enfrentando tempestades, monstros marinhos e os próprios Templários que buscam os mesmos segredos.",
  },
  {
    id: 6,
    img: missao6,
    title: "O Artefato Perdido",
    description:
      "Há rumores de um artefato antigo perdido em uma caverna esquecida, que detém poderes místicos capazes de inclinar a balança da guerra a favor de quem o possuir. Sua missão é atravessar territórios hostis, explorar as profundezas da caverna e enfrentar os perigos que guardam o artefato, enquanto os Templários também estão em busca dessa relíquia perdida.",
  },
];

const characters = [
  {
    name: "Aldric Stronghammer",
    class: "Guerreiro",
    level: 10,
    skills: ["Espada Longa", "Armadura Pesada", "Liderança"],
  },
  {
    name: "Lyra Shadowcloak",
    class: "Ladina",
    level: 8,
    attributes: {
      strength: 10,
      dexterity: 20,
      constitution: 12,
      intelligence: 14,
      wisdom: 10,
      charisma: 16,
    },
    skills: ["Furtividade", "Armadilhas", "Persuasão"],
    equipment: [
      "Adagas Envenenadas",
      "Armadura Leve",
      "Anel da Invisibilidade",
    ],
    gold: 700,
    experience: 12000,
  },
  {
    name: "Thalgorin Thunderforge",
    class: "Mago",
    level: 12,
    attributes: {
      strength: 8,
      dexterity: 12,
      constitution: 10,
      intelligence: 20,
      wisdom: 14,
      charisma: 10,
    },
    skills: ["Magia Arcana", "Elementalismo", "Alquimia"],
    equipment: ["Cajado Arcano", "Robe de Bruxo", "Livro de Feitiços"],
    gold: 1000,
    experience: 20000,
  },
  {
    name: "Sariel Lightbringer",
    class: "Clériga",
    level: 9,
    attributes: {
      strength: 12,
      dexterity: 10,
      constitution: 14,
      intelligence: 14,
      wisdom: 18,
      charisma: 16,
    },
    skills: ["Cura", "Proteção Divina", "Exorcismo"],
    equipment: ["Cajado Sagrado", "Armadura de Fé", "Tomo Sagrado"],
    gold: 600,
    experience: 16000,
  },
  {
    name: "Drakkar Bloodrage",
    class: "Bárbaro",
    level: 7,
    attributes: {
      strength: 20,
      dexterity: 14,
      constitution: 18,
      intelligence: 8,
      wisdom: 10,
      charisma: 12,
    },
    skills: ["Fúria Berserk", "Ataque Selvagem", "Resistência Imbatível"],
    equipment: [
      "Machado de Batalha",
      "Peitoral de Couro de Dragão",
      "Poção de Força",
    ],
    gold: 400,
    experience: 10000,
  },
  {
    name: "Elara Swiftwind",
    class: "Ranger",
    level: 6,
    attributes: {
      strength: 14,
      dexterity: 18,
      constitution: 16,
      intelligence: 12,
      wisdom: 16,
      charisma: 12,
    },
    skills: ["Arco e Flecha", "Rastreamento", "Furtividade"],
    equipment: ["Arco Élfico", "Túnica de Peles", "Anel do Predador"],
    gold: 300,
    experience: 8000,
  },
];

export { missions, characters };
