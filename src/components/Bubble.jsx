import React from "react";
import Styles from "../style/Herois/bubble.module.css";

function Bubble(props) {
  function handleClick() {
    console.log("Bubble clicked:", props.nome);
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div
      className={`${Styles.bubble} ${props.isSelected ? Styles.selected : ""}`}
      onClick={handleClick}
    >
      <div className={Styles.profile}>
        <img src={props.img} alt={props.nome} />
      </div>
      <div className={Styles.text}>
        <p>{props.nome ? props.nome : "nome"}</p>
      </div>
    </div>
  );
}

export default Bubble;
