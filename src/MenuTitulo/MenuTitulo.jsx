import styles from './MenuTitulo.module.css';
import PropTypes from 'prop-types';

function MenuTitulo(props){

    return (
        <div id={props.id} className={styles.container}>
            <h1>{props.titulo}</h1>
        </div>
    )
}

MenuTitulo.propsType = {
    id: PropTypes.id,
    titulo: PropTypes.string,
}

MenuTitulo.defaultProps ={
    titulo: "titulo",
}

export default MenuTitulo