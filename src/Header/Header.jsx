import {useState, useRef} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import styles from "./Header.module.css";

function Header() {

    return (
        <>
            <header className={styles.headerr}>
                <div className={styles.itens}>
                    <ul className={styles.itensMenu}>
                        <li><Link to='#personagemAnc' smooth><h3>PESONAGENS</h3></Link></li>
                        <li><Link to='#missoesAnc' smooth><h3>MISSÕES</h3></Link></li>
                    </ul>
                </div>
            </header>
        </>
    );

}

export default Header