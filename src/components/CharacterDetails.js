import React from 'react';
import '../css/PageDetails.css';

const CharacterDetails = ({ character }) => {

  return (
    <div className="page-details">
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h2>{character.name}</h2>
          <p><strong>Papel:</strong> {character.profession}</p>
          <p><strong>Descrição:</strong> {character.description}</p>
          <p><strong>Idade:</strong> {character.age}</p>
          <p><strong>Raça:</strong> {character.race}</p>
          <p><strong>Local de Origem:</strong> {character.origin}</p>
          <p><strong>Aparência Física:</strong> {character.appearance}</p>
          <p><strong>Armas e Habilidades:</strong> {character.weaponsAndAbilities}</p>
          <p><strong>Companheiros:</strong> {character.companions}</p>
          <p><strong>História Pessoal:</strong> {character.personalHistory}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
