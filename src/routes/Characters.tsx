import { useEffect, useState } from 'react';
import { CharacterType } from '../types';
import { GetCharacters } from '../data';
import CharacterCard from '../components/CharacterCard';
import Header from '../components/Header';
import Background from '../components/Background';
import '../styles/Characters.css';
import Loading from '../components/Loading';

function Characters() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    useEffect(() => {
        // Fetch characters from API with a delay of 0.5s to simulate a real API call
        GetCharacters().then(result => {
            setCharacters(result);
        });
    }, []);
    if (!characters || characters.length == 0) return <main className='Character'>
        <Header />
        <Background />
        <Loading />
    </main>
    return <main className='Characters'>
        <Header />
        <Background />
        <h1>Personagens</h1>
        <section className='CharacterList'>
            {characters.map((character, index) => {
                return <CharacterCard
                    key={index}
                    {...character}
                />
            })}
        </section>
    </main>
}

export default Characters;