import React, { useEffect } from "react";
import Button from "./Button";
import Styles from "../style/Hero/hero.module.css";
import codeGif from "../assets/code.gif";
import { Link } from "react-router-dom";

function Hero() {


  return (
    <>
      <div className={Styles.home}>
        <div className={Styles.hero}>
          <div className={Styles.conteudo}>
            <h1 className={Styles.titulo}>
              Catalogo{" "}
              <span className={Styles.gameLogo}>
                <span id="text" className={Styles.text}>DEV<span className={Styles.verde}>RPG</span></span>
                <span className={Styles.second}></span>
              </span>
            </h1>
            <div className={Styles.subtituloContainer}>
              <h2 className={Styles.subtitulo}>
                <span className={Styles.verde}>1. </span>Bem-vindo ao emocionante
                mundo do <span className={Styles.verde}>DEV RPG</span>
              </h2>
              <h2 className={Styles.subtitulo}>
                <span className={Styles.verde}>2. </span>prepare-se para mergulhar em um{" "}
                <span className={Styles.roxo}>universo</span>
              </h2>
              <h2 className={Styles.subtitulo}>
                <span className={Styles.verde}>3. </span>onde linhas de código se entrelaçam com magia
              </h2>
              <h2 className={Styles.subtitulo}>
                <span className={Styles.verde}>4. </span>e algoritmos se transformam em{" "}
                <span className={Styles.roxo}>feitiços </span> épicos
              </h2>
            </div>
            <div className={Styles.botao}>
              <Link to={`catalog`}>
                <Button nome="Explorar"></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={Styles.heroImage}>
          <img src={codeGif} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
