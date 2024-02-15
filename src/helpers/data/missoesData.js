import Terra from "../../assets/missoes/terra-codificação.png";
import Floresta from "../../assets/missoes/floresta-debugging.png";
import Caverna from "../../assets/missoes/exploração-caverna.png";
import Prisão from "../../assets/missoes/prisao-loop.png";
import Torre from "../../assets/missoes/torre-objetos.png";
import Vale from "../../assets/missoes/vale-variaveis.png";

const missoes = [
  {
    id: 0,
    title: "Vila dos algoritmos mágicos",
    img: Terra,
    description:
      "Explore a vila dos algoritmos e tente encontrar o artefato perdido que pode salvar o reino da programação!",
    nivel: "Facil",
  },
  {
    id: 1,
    title: "Aventura na Floresta de Debugging",
    img: Floresta,
    description: "Encontre o caminho para sair da floresta de bugs!",
    nivel: "Facil",
  },
  {
    id: 2,
    title: "Exploração na caverna de bugs",
    img: Caverna,
    description:
      "Derrote os bugs que habitam a caverna, encontre a causa principal do problema e fuja o mais rápido possível",
    nivel: "Medio",
  },
  {
    id: 3,
    title: "Resgate o prisioneiro do loop infinito",
    img: Prisão,
    description:
      "Resgate o prisioneiro que está preso em um loop infinito e leve-o para a segurança!",
    nivel: "Medio",
  },
  {
    id: 4,
    title: "Sobreviva a torre dos objetos encantados",
    img: Torre,
    description:
      "Sobreviva a torre dos objetos encantados e encontre o artefato mágico que pode salvar o reino da programação!",
    nivel: "Dificil",
  },
  {
    id: 5,
    title: "Jornada pelo vale das variáveis",
    img: Vale,
    description:
      "Encontre o artefato mágico que pode salvar o reino da programação no vale das variáveis!",
    nivel: "Dificil",
  },
];

export default missoes;
