import React from "react";
import Styles from "../style/Hero/button.module.css";

function Button(props) {
  return (
    <>
      <a href="">
        <button
          className={Styles.button}
          style={{
            backgroundColor: props.BGcor ? props.BGcor : "#8035BB",
            color: props.cor ? props.cor : "#fff",
          }}
        >
          {props.nome ? props.nome : "Clique"}
        </button>
      </a>
    </>
  );
}

export default Button;
