import { useEffect, useState } from "react";
import { CharacterType } from "../types";
import { GetCharacter } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import Header from "../components/Header";
import Loading from "../components/Loading";
import '../styles/Character.css';

function Character() {
    const [character, setCharacter] = useState<CharacterType>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch character from API with a delay of 0.5s to simulate a real API call
        if (!id || character) return;

        GetCharacter(id).then(result => {
            setCharacter(result);
        }).catch(err => {
            console.error(err);
            navigate('/404');
        });
    }, [character, id, navigate]);

    if (!character) return <main className='Character'>
        <Header />
        <Background />
        <Loading />
    </main>

    return <main className='Character'>
        <Header />
        <Background />
        <section className="Content">
            <img src={`../${character.picture}`} alt={character.name} />
            <article>
                <h1>{`${character.name}, ${character.title}`}</h1>
                <p>{character.history}</p>
                <h2>{character.class}</h2>
                <p>{character.classDescription}</p>
            </article>
        </section>
    </main>

}

export default Character;