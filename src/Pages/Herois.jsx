import React, { useState } from "react";
import Styles from "../style/Herois/herois.module.css";
import Bubble from "../components/Bubble";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import personagens from "../helpers/data/personagensData.js";

function Herois() {
  const [selectedId, setSelectedId] = useState(0);

  const handleBubbleClick = (id) => {
    setSelectedId(id);
    console.log("Bubble clicado:", id);
  };

  return (
    <div className={Styles.herois}>
      <Navbar></Navbar>
        <div className={Styles.titulo}>
          <h1>Personagens <span className="roxo">DEV</span><span className="verde">RPG</span></h1>
        </div>
        <div className={Styles.container}>
          <div className={Styles.grid}>
            {personagens.map((personagem) => (
              <Bubble
                key={personagem.id}
                img={personagem.img}
                nome={personagem.nome}
                onClick={() => handleBubbleClick(personagem.id)}
              ></Bubble>
            ))}
          </div>
          <div className={Styles.cardContainer}>
            {selectedId !== null && (
              <Card
              
                key={selectedId}
                nome={personagens[selectedId].nome}
                img={personagens[selectedId].img}
                descrição={personagens[selectedId].descrição}
                nivel={personagens[selectedId].nivel}
                class={personagens[selectedId].classe}
                dificuldadeTexto={personagens[selectedId].nivelTexto}
                icon={personagens[selectedId].classeIcon}
              />
            )}
          </div>
        </div>
      </div>
    
  );
}

export default Herois;
