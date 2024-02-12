import React from "react";
import Button from "./Button";
import Styles from "../style/Hero/hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={Styles.hero}>
      <div className={Styles.conteudo}>
        <h1 className={Styles.titulo}>Catalogo</h1>
        <h2 className={Styles.subtitulo}>
          Dev <span className={Styles.rpg}>RPG</span>
        </h2>
      </div>
      <div>
        <Link to={`catalog`}>
        <Button nome="Explorar"></Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
