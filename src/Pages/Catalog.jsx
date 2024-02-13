import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Styles from "../style/Catalog/catalog.module.css";
import MissionIMG from "../assets/mission-img.png";
import HeroIMG from "../assets/hero-img.png";
import { Link } from "react-router-dom";

function Catalog() {
  const BRANCO = "#fff";
  const ROXO = "#8035BB";

  return (
    <>
      <Navbar></Navbar>
      <div className={Styles.content}>
        <div className={Styles.missao}>
          <img src={MissionIMG} alt="" />
          <Link to={`../missao`}>
          <Button nome="Missões"></Button>
          </Link>
        </div>
        <div className={Styles.hero}>
          <img src={HeroIMG} alt="" />
          <Link to={`../herois`}>
            <Button nome="Herois" BGcor={BRANCO} cor={ROXO}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Catalog;
