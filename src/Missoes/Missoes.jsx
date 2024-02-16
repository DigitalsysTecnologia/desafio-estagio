import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "./Missoes.module.css";
import { IoSkull }  from "react-icons/io5";
import { GiCrownedSkull } from "react-icons/gi";

function Missoes(props){

    const [missao, setMissao] = useState([]);
    const [nivelMissao, setNivelMissao] = useState();
    const [tituloMissao, setTituloMissao] = useState();
    const [textoMissao, setTextoMissao] = useState();
    const [recompensaMissao, setRecompensaMissao] = useState();
    const [menuMss, setMenuMss] = useState(true);

    useEffect(() => {
        mudarNivelM(props.nivelMissao);
        setTituloMissao (props.tituloMissao);
        setTextoMissao (props.textoMissao);
        setRecompensaMissao (props.recompensaMissao);
    });

    function mudarNivelM(i){
        
        let nvlMss = '';

        for(;i>0;i--){
            nvlMss = nvlMss + '☠'; 
        }

        setNivelMissao(nvlMss);
    }


    return(
        <div onClick={() => {setMenuMss(!menuMss)}} className={menuMss ? styles.missoesContainer : styles.missoesContainerAberto}>            
            <div className={menuMss ? styles.nivelGeral : styles.nivelGeralA}>
                <div id='nivelM1' className={menuMss ? styles.nivelM1 : styles.nivelM1A}> {nivelMissao} </div>
            </div>
            <div className={menuMss ? styles.ttl : styles.ttlA}><h2>{tituloMissao}</h2></div>
            <div className={menuMss ? styles.descr : styles.descrA}><p>{textoMissao}</p></div>
            <div className={menuMss ? styles.gold : styles.goldA}><h3>₲  {recompensaMissao}</h3></div>
        </div>
    )


}

Missoes.defaultProps = {
    nivelMissao: 1,
    tituloMissao: "Indefinida",
    textoMissao: "Indefinida",
    recompensaMissao: "00000",
}

export default Missoes