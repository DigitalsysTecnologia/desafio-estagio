import '../css/Page.css'
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList({ character }) {
  return (
    <div className="page">
      <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><strong>Papel:</strong> {character.profession}</p>
        <p>{character.description}</p>

        <Link to ={`/characters/${character.id}`}>
          <button> Detalhes do personagem</button>
        </Link>
    </div>
  );

}

export default CharacterList;
