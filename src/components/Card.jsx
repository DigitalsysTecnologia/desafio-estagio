import React from "react";
import Styles from "../style/Herois/card.module.css";
import João from "../assets/personagens/joão.png";
// import dificil from "../assets/dificuldade/dificil.svg";

function Card(props) {
  return (
    <div className={Styles.card}>
      <div className={Styles.container}>
        <img className={Styles.imgCard} src={props.img ? props.img : João} alt="" />
      </div>
      <div className={Styles.textos}>
        <div>
          <p className={Styles.descricao}>{props.descrição}</p>
        </div>
        <div className={Styles.info}>
          <div>
            <p>Classe</p>
            <span>{props.class}</span>
          </div>
          <div>
            <p>Dificuldade</p>
            <span>
              <img className={Styles.dificuldade} src={props.nivel}></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
