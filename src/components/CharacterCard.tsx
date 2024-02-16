import { CharacterType } from "../types";
import { Link } from "react-router-dom";
import '../styles/CharacterCard.css';

function CharacterCard(props: CharacterType) {
    const name = `${props.name}, ${props.title}`;
    return (
        <Link to={`../character/${props.id}`} className="CharacterCardCotainer">
            <div className="Card">
                <div className="Front">
                    <img src={props.profilePicture} alt={props.name} draggable={false} />
                    <h1>{name}</h1>
                    <p>{props.class}</p>
                </div>
                <div className="Back">
                    <h3>{props.history}</h3>
                </div>
            </div>
        </Link>
    );
}

export default CharacterCard;