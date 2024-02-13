import React from "react";
import { Link } from "react-router-dom";
import "../MissionList/styles.css";

const missions = [
  {
    levelRange: "0 - 20",
    tasks: [
      {
        title: "Floresta dos Lobos",
        description: "Derrote 10 lobos na Floresta Inicial.",
        map: "floresta-lobos.webp",
      },
      {
        title: "Vale dos Dragões",
        description: "Vença o dragão ancião para obter a escama lendária.",
        map: "vale-dragoes.webp",
      },
    ],
  },
  {
    levelRange: "20 - 60",
    tasks: [
      {
        title: "Ruínas Antigas",
        description: "Colete 20 artefatos das Ruínas Antigas.",
        map: "ruinas.webp",
      },
      {
        title: "Torre Sombria",
        description: "Desative o cristal corrupto no topo da Torre Sombria.",
        map: "torre.webp",
      },
    ],
  },
  {
    levelRange: "60 - 100",
    tasks: [
      {
        title: "Caverna dos Goblins",
        description: "Elimine 15 goblins na Caverna dos Goblins.",
        map: "caverna-globins.webp",
      },
      {
        title: "Abismo Infernal",
        description:
          "Feche o portal demoníaco e impeça a invasão dos demônios.",
        map: "abismo-infernal.webp",
      },
    ],
  },
  {
    levelRange: "100 - 120",
    tasks: [
      {
        title: "Floresta Petrificada",
        description: "Liberte os animais petrificados na Floresta Petrificada.",
        map: "floresta-petrificada.webp",
      },
      {
        title: "Castelo Abandonado",
        description: "Derrote o espectro do rei no Castelo Abandonado.",
        map: "castelo.webp",
      },
    ],
  },
];

function MissionList() {
  return (
    <div className="MissionList-container">
      <h1 className="MissionList-title">Missões</h1>
      {missions.map((missionGroup, index) => (
        <div key={index} className="Mission-group">
          <h2 className="Mission-levelRange">
            Nível {missionGroup.levelRange}
          </h2>
          {missionGroup.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="Mission-card">
              <img
                src={`/assets/img/${task.map}`}
                alt={task.title}
                className="Mission-map"
              />
              <div className="Mission-details">
                <h3 className="Mission-title">{task.title}</h3>
                <p className="Mission-description">{task.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Link to="/" className="MissionList-backButton">
        Voltar
      </Link>{" "}
    </div>
  );
}

export default MissionList;
