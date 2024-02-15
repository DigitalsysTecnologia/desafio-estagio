import React, { useState } from "react";
import Styles from "../style/Herois/herois.module.css";
import Bubble from "../components/Bubble.jsx";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import ArrowLeft from "../assets/arrowLeft.svg";
import ArrowRight from "../assets/arrowRight.svg";

import personagens from "../helpers/data/personagensData.js";

function Herois() {
  const [selectedId, setSelectedId] = useState(0);

  const handleBubbleClick = (id) => {
    setSelectedId(id);
    console.log("Bubble clicado:", id);
  };

  const handleNextClick = () => {
    const nextId = (selectedId + 1) % personagens.length;
    setSelectedId(nextId);
  };

  const handlePrevClick = () => {
    const prevId = (selectedId - 1 + personagens.length) % personagens.length;
    setSelectedId(prevId);
  };

  return (
    <div className={Styles.herois}>
      <Navbar></Navbar>
      <div className={Styles.titulo}>
        <h1 className={Styles.tituloPersonagens}>
          Personagens <span className="roxo">DEV</span>
          <span className="verde">RPG</span>
        </h1>
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
          <div className={Styles.navigationButtons}>
            <button className={Styles.btn} onClick={handlePrevClick}><img className={Styles.img} src={ArrowLeft} alt="" /></button>
            <button className={Styles.btn}onClick={handleNextClick}><img className={Styles.img} src={ArrowRight} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herois;
