import React from "react";
import Styles from "../style/Hero/button.module.css";

function Button(props) {
  return (
    <>
      <a href="">
        <button className={Styles.button} style={{ backgroundColor: props.cor ? props.cor : "#8035BB"}}>
          {props.nome ? props.nome : "Clique"}
        </button>
      </a>
    </>
  );
}

export default Button;
