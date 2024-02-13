import React from "react";
import { Link } from "react-router-dom";
import "../CharacterList/styles.css";

export const characters = [
  {
    id: "arqueira",
    name: "Arqueira",
    description:
      "Arqueiras são as melhores no combate à longa distância e na técnica com o arco e flecha, possuindo excelente agilidade.",
    difficulty: "Média",
    status: {
      Força: 68,
      Inteligência: 22,
      Talento: 67,
      Agilidade: 80,
      Vitalidade: 10,
    },
    image: "/assets/img/arqueira.png",
  },
  {
    id: "assassina",
    name: "Assassina",
    description:
      "Assassinas utilizam Adagas como arma primária. Elas são especialistas em habilidades de assassinos, como se esconder, envenenar etc.",
    difficulty: "Alta",
    status: {
      Força: 89,
      Inteligência: 12,
      Talento: 57,
      Agilidade: 60,
      Vitalidade: 30,
    },
    image: "/assets/img/assassina.png",
  },

  {
    id: "pike",
    name: "Pike",
    description:
      "Pikes são guerreiros resistentes, armados com longas lanças, perfeitos para manter inimigos à distância. Combinam força bruta com habilidades de defesa.",
    difficulty: "Média",
    status: {
      Força: 86,
      Inteligência: 22,
      Talento: 70,
      Agilidade: 40,
      Vitalidade: 22,
    },
    image: "/assets/img/pike.png",
  },
  {
    id: "lutador",
    name: "Lutador",
    description:
      "Lutadores são mestres do combate corpo a corpo, usando seus punhos e técnicas de luta para derrotar os inimigos. Equilíbrio entre ataque e defesa.",
    difficulty: "Baixa",
    status: {
      Força: 91,
      Inteligência: 20,
      Talento: 60,
      Agilidade: 30,
      Vitalidade: 10,
    },
    image: "/assets/img/lutador.png",
  },
  {
    id: "cavaleiro",
    name: "Cavaleiro",
    description:
      "Cavaleiros são os defensores clássicos, armados com armaduras pesadas e escudos. Especialistas em proteger aliados e aguentar muito dano.",
    difficulty: "Baixa",
    status: {
      Força: 92,
      Inteligência: 22,
      Talento: 80,
      Agilidade: 30,
      Vitalidade: 40,
    },
    image: "/assets/img/cavaleiro.png",
  },
  {
    id: "atalanta",
    name: "Atalanta",
    description:
      "Atalantas são caçadoras ágeis, armadas com lanças e habilidades de rastreamento. Elas são rápidas e letais, especializadas em ataques rápidos e precisos.",
    difficulty: "Alta",
    status: {
      Força: 48,
      Inteligência: 34,
      Talento: 66,
      Agilidade: 40,
      Vitalidade: 28,
    },
    image: "/assets/img/atalanta.png",
  },
];

function CharacterList() {
  return (
    <div className="CharacterList-container">
      <h1 className="CharacterList-title">Personagens</h1>
      <ul className="CharacterList-ul">
        {characters.map((character) => (
          <li key={character.id} className="CharacterList-li">
            <Link to="/MissionList" className="CharacterList-link">
              <h2 className="CharacterList-name">{character.name}</h2>
              <p className="CharacterList-description">
                {character.description}
              </p>
              <img
                src={character.image}
                alt={character.name}
                className="CharacterList-img"
              />
              <div className="CharacterList-info">
                <p className="Character-dificuldade">
                  Dificuldade: {character.difficulty}
                </p>
                <div className="CharacterList-status">
                  <ul className="list-status">
                    <h1 className="status">Status:</h1>
                    <li>
                      Ataque: <span> {character.status.Força}</span>
                    </li>
                    <li>
                      Defesa: <span>{character.status.Inteligência}</span>
                    </li>
                    <li>
                      Talento: <span>{character.status.Talento}</span>
                    </li>
                    <li>
                      Agilidade: <span>{character.status.Agilidade}</span>
                    </li>
                    <li>
                      Vitalidade: <span>{character.status.Vitalidade}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/MissionList"
                  className="CharacterList-link"
                  title="Clique para ver as missões"
                >
                  <button className="CharacterList-button">Ver Missões</button>
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
