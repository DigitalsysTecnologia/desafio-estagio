import logoCrowBeak from '../assets/logoBrancaCrowBeak.svg';
import styles from './Intro.module.css';

function Introducao(){

    return(
        <div className={styles.introContainer}>
            <img className={styles.logo} src={logoCrowBeak} alt="logo" />
            <h1>Boas vindas ao Crow's Beak, local onde reune informações sobre seu grupo de personagens e também das missões disponíveis.</h1>
        </div>
    )

}

export default Introducao
