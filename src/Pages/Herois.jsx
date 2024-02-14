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
    console.log('Bubble clicado:', id);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className={Styles.herois}>
        <div className={Styles.up}>
          <div>
            <h1>Herois ⚔️🖱️</h1>
          </div>
          <div>
            <h1>
              <span className={Styles.roxo}>DEV</span>
              <span className={Styles.verde}>RPG</span>
            </h1>
          </div>
        </div>
        <div className={Styles.down}>
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
          <div>
            {selectedId !== null && (
              <Card
                key={selectedId}
                nome={personagens[selectedId].nome}
                img={personagens[selectedId].img}
                descrição={personagens[selectedId].descrição}
                nivel={personagens[selectedId].nivel}
                class={personagens[selectedId].classe}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herois;
