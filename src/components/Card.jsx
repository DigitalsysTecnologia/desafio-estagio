import React from "react";
import Styles from "../style/Herois/card.module.css";

function Card(props) {
  return (
    <div className={Styles.card}>
      <div className={Styles.container}>
        <img className={Styles.imgCard} src={props.img} alt="" />
      </div>
      <div className={Styles.textos}>
        <p className={Styles.nome}>{props.nome}</p>
        <div>
          <p className={Styles.descricao}>{props.descrição}</p>
        </div>
        <div className={Styles.info}>
          <div className={Styles.classes}>
            <img className={Styles.icon} src={props.icon}></img>
            <span>{props.class}</span>
          </div>
          <div>
            <span>
              <img className={Styles.dificuldadeImg} src={props.nivel}></img>
            </span>
            <div className={Styles.containerTextos}>
              <p className={Styles.dificuldadeTexto}>Dificuldade</p>
              <p className={Styles.dificuldadeTexto}>
                {props.dificuldadeTexto}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
