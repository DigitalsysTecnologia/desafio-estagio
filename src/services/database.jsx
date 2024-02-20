import missao1 from "../img/missao1.jpg";
import missao2 from "../img/missao2.jpg";
import missao3 from "../img/missao3.jpg";
import missao4 from "../img/missao4.jpg";
import missao5 from "../img/missao5.jpg";
import missao6 from "../img/missao6.jpg";

import pers1 from "../img/pers1.jpg";
import pers2 from "../img/pers2.jpg";
import pers3 from "../img/pers3.png";
import pers4 from "../img/pers4.jpg";
import pers5 from "../img/pers5.jpg";
import pers6 from "../img/pers6.jpg";

const missions = [
  {
    id: 1,
    img: missao1,
    title: "Roubo da Relíquia Sagrada",
    description:
      "Os Templários roubaram uma relíquia sagrada dos Vikings e a esconderam em seu forte. Sua missão é infiltrar-se nas defesas inimigas, enfrentar os guardas templários e recuperar a relíquia antes que ela caia nas mãos erradas.",
    level: "Fácil",
    status: "Disponível",
  },
  {
    id: 2,
    img: missao2,
    title: "Pacto com os Deuses",
    description:
      "Os Deuses Antigos convocaram os Vikings para realizar um ritual antigo e garantir sua proteção contra os avanços dos Templários. Sua tarefa é acompanhar o sacerdote viking em uma jornada perigosa até o local sagrado e protegê-lo dos ataques dos templários enquanto ele realiza o ritual.",
    level: "Médio",
    status: "Concluída",
  },
  {
    id: 3,
    img: missao3,
    title: "Batalha pela Supremacia",
    description:
      "Uma grande batalha se aproxima entre os exércitos Viking e Templário pelo controle de uma fortaleza estratégica. Você é encarregado de liderar as tropas vikings no campo de batalha, coordenando ataques e defesas para garantir a vitória e estabelecer a supremacia sobre o inimigo.",
    level: "Difícil",
    status: "Em Andamento",
  },
  {
    id: 4,
    img: missao4,
    title: "Traição nas Sombras",
    description:
      "Um espião templário infiltrou-se nas fileiras vikings e está planejando um ataque surpresa durante a próxima assembleia do clã. Sua missão é descobrir a identidade do traidor, reunir provas de sua traição e impedir que ele coloque em prática seus planos nefastos.",
    level: "Fácil",
    status: "Disponível",
  },
  {
    id: 5,
    img: missao5,
    title: "Jornada ao Desconhecido",
    description:
      "Os sábios vikings descobriram a existência de uma terra misteriosa além dos mares, repleta de tesouros e perigos desconhecidos. Você é convocado para liderar uma expedição audaciosa até essa terra distante, enfrentando tempestades, monstros marinhos e os próprios Templários que buscam os mesmos segredos.",
    level: "Médio",
    status: "Bloqueada",
  },
  {
    id: 6,
    img: missao6,
    title: "O Artefato Perdido",
    description:
      "Há rumores de um artefato antigo perdido em uma caverna esquecida, que detém poderes místicos capazes de inclinar a balança da guerra a favor de quem o possuir. Sua missão é atravessar territórios hostis, explorar as profundezas da caverna e enfrentar os perigos que guardam o artefato, enquanto os Templários também estão em busca dessa relíquia perdida.",
    level: "Difícil",
    status: "Disponível",
  },
];

const characters = [
  {
    id: 1,
    img: pers1,
    name: "Lyra Shadowcloak",
    class: "Ladina",
    attributes: {
      strength: 10,
      dexterity: 20,
      constitution: 12,
      intelligence: 14,
      wisdom: 10,
      charisma: 16,
    },
    skills: ["Furtividade", "Armadilhas", "Persuasão"],
    description:
      "Um paladino devoto, conhecido por seu compromisso inabalável com a justiça e sua lealdade aos ideais sagrados. Vestindo uma imponente armadura em forma de túnica adornada com símbolos sagrados, ele é uma figura imponente no campo de batalha",
  },
  {
    id: 2,
    img: pers2,
    name: "Elena Nightshade",
    clas: "Ladina",
    attributes: {
      strength: 8,
      dexterit: 18,
      constitution: 12,
      intelligence: 14,
      wisdom: 10,
      charisma: 16,
    },
    skills: ["Furtividade", "Acrobacia", "Enganação"],
    description:
      "Elena Nightshade é uma ladina habilidosa, mestre na arte da furtividade e do combate ágil. Ela maneja uma rapieira com destreza, deslizando entre as sombras para surpreender seus adversários. Vestida com um traje leve e escuro que se mescla perfeitamente à escuridão da noite, Elena é uma figura misteriosa e evasiva. ",
  },
  {
    id: 3,
    img: pers3,
    name: "Ragnar Thunderbeard",
    class: "Bárbaro",
    attributes: {
      strength: 20,
      dexterity: 14,
      constitution: 18,
      intelligence: 10,
      wisdom: 12,
      charisma: 10,
    },
    skills: ["Força Bruta", "Resistência", "Grito de Guerra"],
    description:
      "Ragnar Thunderbeard é um destemido guerreiro viking, conhecido por sua imensa força e coragem inabalável. Ele brande um martelo gigante com facilidade, esmagando seus inimigos com golpes poderosos. Vestido com uma armadura de couro resistente e uma capa de pele de urso, Ragnar é uma figura imponente no campo de batalha.",
  },
  {
    id: 4,
    img: pers4,
    name: "Soren Shadowblade",
    class: "Ladino",
    attributes: {
      strength: 12,
      dexterity: 18,
      constitution: 14,
      intelligence: 16,
      wisdom: 10,
      charisma: 14,
    },
    skills: ["Furtividade", "Enganação", "Precisão"],
    description:
      "Soren Shadowblade é um ladino astuto, especializado na arte da furtividade e do combate rápido. Vestido com uma armadura preta que se mistura às sombras da noite, ele se move silenciosamente pelo campo de batalha. Soren empunha uma lança com maestria, com uma bandeira negra tremulando ao vento, simbolizando sua determinação implacável.",
  },
  {
    id: 5,
    img: pers5,
    name: "Ayla Silverhammer",
    class: "Guerreira",
    attributes: {
      strength: 18,
      dexterity: 14,
      constitution: 16,
      intelligence: 12,
      wisdom: 10,
      charisma: 12,
    },
    skills: ["Combate com Martelo", "Resistência", "Liderança"],
    description:
      "Ayla Silverhammer é uma guerreira destemida, conhecida por sua habilidade impecável com o martelo de batalha. Vestindo uma imponente armadura prateada, ela avança pelo campo de batalha com confiança e determinação. Ayla é uma líder nata, inspirando coragem e bravura em seus aliados com sua presença poderosa.",
  },
  {
    id: 6,
    img: pers6,
    name: "Elena Silvercrest",
    class: "Guerreira",
    attributes: {
      strength: 16,
      dexterity: 14,
      constitution: 16,
      intelligence: 12,
      wisdom: 10,
      charisma: 14,
    },
    skills: ["Combate com Espada e Escudo", "Defesa", "Determinação"],
    description:
      "Elena Silvercrest é uma guerreira corajosa, habilidosa no uso da espada e escudo. Vestindo uma armadura prateada que brilha sob o sol, ela avança destemidamente pelo campo de batalha. Elena é uma defensora incansável de seus aliados, mantendo-se firme em sua posição mesmo nos momentos mais difíceis.",
  },
];

export { missions, characters };
