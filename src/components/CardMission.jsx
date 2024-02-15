import React from "react";
import Terra from "../assets/missoes/terra-codificação.png";
import Styles from "../style/Missao/cardMission.module.css";

function CardMission(props) {

  

  let nivelStyle = {}

  if (props.nivel === "Facil") {
    nivelStyle.color = "green";
  } else if (props.nivel === "Medio") {
    nivelStyle.color = "yellow";
  }
  else if (props.nivel === "Dificil") {
    nivelStyle.color= "red";
  }
  

  return (
    <>
      <div className={Styles.card}>
            <h1 className={Styles.tituloFixo}>{props.title}</h1>
        <img className={Styles.imageStyle} src={props.img} alt="" />
        <div className={Styles.content}>
          <div className={Styles.title}>
            <h2>{props.title}</h2>
            <p style={nivelStyle} className={Styles.nivel}>{props.nivel}</p>
          </div>
          <div className={Styles.textos}>
            <p className={Styles.description}>{props.description}</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMission;
