import CardMission from "../components/CardMission.jsx";
import Navbar from "../components/Navbar";
import Styles from "../style/Missao/missao.module.css";
import missoes from "../helpers/data/missoesData.js";

function Missoes() {
  return (
    <>
      <Navbar></Navbar>
      <div className={Styles.missao}>
        <div className={Styles.header}>
          <div>
            <h1>
              Missões <span className="roxo"> DEV</span>
              <span className="verde">RPG</span>
            </h1>
          </div>
        </div>
        <div className={Styles.grid}>
          {missoes.map((missao) => (
            <CardMission
              key={missao.id}
              img={missao.img}
              title={missao.title}
              description={missao.description}
              nivel={missao.nivel}
            ></CardMission>
          ))}
        </div>
      </div>
    </>
  );
}

export default Missoes;
