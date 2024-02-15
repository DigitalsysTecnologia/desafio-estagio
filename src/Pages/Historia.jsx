import React from "react";
import Navbar from "../components/Navbar";
import Styles from "../style/Historia/historia.module.css";

function Historia() {
  return (
    <>
      <Navbar></Navbar>
      <div className={Styles.historia}>
        <div className={Styles.container}>
          <h1 className={Styles.titulo}>
            Historia do {""}
            <span className={Styles.gameLogo}>
              <span id="text" className="roxo">
                DEV<span className="verde">RPG</span>
              </span>
              <span className={Styles.second}></span>
            </span>
          </h1>

          <div className={Styles.textos}>
            <h2> Lore do universo</h2>
            <p>
              O DEV RPG é um universo de fantasia que se passa em um mundo onde
              a programação e a magia se misturam. Neste mundo, a programação é
              uma forma de magia, e os programadores são os magos. Eles usam
              seus conhecimentos para criar feitiços e encantamentos que podem
              ser usados para proteger ou atacar.
            </p>

            <p>
              O mundo do DEV RPG é dividido em vários reinos, cada um com sua
              própria cultura e história. Cada reino é governado por um rei ou
              rainha, e cada um deles é responsável por manter a paz e a ordem
              em seu reino.
            </p>
          </div>

          <div>
            <h2>Mestre</h2>
            <p>
              Descrição: Os Mestres são os sábios do reino da programação. Eles
              dominam todas as linguagens e algoritmos, sendo capazes de
              conjurar códigos complexos com facilidade. Seu conhecimento é
              vasto e sua habilidade em resolver problemas é incomparável.
            </p>
            <h2>Desenvolvedor</h2>
            <p>
              Descrição: Os Desenvolvedores são os guerreiros do mundo digital.
              Eles usam suas habilidades para criar aplicações poderosas e sites
              interativos. Seu código é afiado como uma espada, e eles enfrentam
              desafios de programação com confiança.
            </p>
            <h2>Hacker</h2>
            <p>
              Descrição: Os Hackers são os furtivos do reino da cibernética.
              Eles exploram sistemas com maestria, encontrando vulnerabilidades
              e quebrando barreiras digitais. Sua destreza em navegar pelos bits
              e bytes é lendária.
            </p>
            <h2>Cybersecurity</h2>
            <p>
              Descrição: Os Cybersecurity são os guardiões do reino digital. Sua
              missão é proteger contra ameaças e manter a ordem na internet.
              Armados com firewalls e algoritmos defensivos, eles são a última
              linha de defesa contra invasões.
              <h2>Engenheiro</h2>
              <p>
                Descrição: Os Engenheiros são os construtores do código. Eles
                projetam e arquitetam sistemas complexos, garantindo que as
                estruturas digitais sejam sólidas e eficientes. Seus códigos são
                como blueprints para o mundo virtual.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historia;
