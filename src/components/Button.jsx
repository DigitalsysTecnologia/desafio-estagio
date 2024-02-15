import React from "react";
import Styles from "../style/Hero/button.module.css";

function Button(props) {
  return (
    <>
      <div className={Styles.container}>
        <button
          className={Styles.button}
          style={{
            color: props.cor ? props.cor : "#fff",
          }}
        >
          <span>{props.nome ? props.nome : "Clique"}</span>
        </button>
      </div>
    </>
  );
}

export default Button;
