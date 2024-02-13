import React from "react";
import Styles from "../style/Herois/herois.module.css";
import Bubble from "../components/Bubble";
function Herois() {
  return (
    <>
      <div className={Styles.herois}>
        <div>
          <h1>Herois</h1>
          <div>
            <Bubble></Bubble>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herois;
