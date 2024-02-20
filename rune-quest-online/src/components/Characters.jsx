import './Characters.css';

function Characters(){

    return(
        <div className="characters-container">
            <h1 className="character-title-container">Trilhe seu caminho Fulano</h1>
            <hr></hr>
            <div className="background-container">
                <img className="characters-background" src="./src/assets/classes-overall.png"></img>
                <div className="text-overlay">
                    <h2 className="text-characters">Descubra os personagens nessa aventura</h2>
                </div>
                <div className="button-container">
                    <a href="http://localhost:5173/selection">
                        <button className="characters-button">Confira todos</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Characters;