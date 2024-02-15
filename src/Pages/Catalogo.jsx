import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../style/Catalog/catalogo.css";

function Catalog() {
  return (
    <main>
      <Navbar></Navbar>
      <h1 className="titulo">
        Explore o nosso universo <span className="roxo">DEV</span>
        <span className="verde">RPG</span>
      </h1>
      <section className="container">
        <div className="card_outer">
          <div className="card">
            <div className="content">
              <h2 className="title">Explore as missões</h2>
              <p className="copy">
               Clique para conhecer as missões disponíveis
              </p>
              <Link to={`/missao`}>
                <button className="btn">Missões</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Conheça nossos personagens</h2>
              <p className="copy">
                Clique para conhecer os personagens disponíveis
              </p>
              <Link to={`/herois`}>
                <button className="btn">Personagens</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Descubra a história</h2>
              <p className="copy">
                Clique para conhecer a história do DEV RPG
              </p>
              <Link to={`/historia`}>
                <button className="btn">Historia</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
