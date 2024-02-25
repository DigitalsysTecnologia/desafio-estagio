import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../components/CharacterDetails';
import witcherCharacters from '../data/witcherCharacters';
import '../css/style.css'

const CharacterDetailsPage = () => {

  const { id } = useParams(); // Obtém o ID do parâmetro da URL
  const character = witcherCharacters.find(char => char.id === parseInt(id)); // Encontra o personagem pelo ID

  return (
    <div >  
      <h1 className ='titulo'>Detalhes do Personagem</h1>
        {character ? <CharacterDetails character={character} /> : <p>Personagem não encontrado</p>}
    </div>
  );
};

export default CharacterDetailsPage;
