import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PickCharacter.css';
import CharactersData from '../data/CharactersData.jsx';

const initialHovered = null; // Track hovered character initially

function PickCharacter(){
    const [hoveredCharacter, setHoveredCharacter] = useState(initialHovered);
    const [selectedCharacter, setSelectedCharacter] = useState(null); // Track selected character
  
    const handleMouseEnter = (index) => setHoveredCharacter(index);
    const handleMouseLeave = () => setHoveredCharacter(initialHovered); // Reset hover on leave
    const handleClick = (index) => {
      // Correctly handle character selection and deselection logic
      if (selectedCharacter === index) {
        // Deselect on second click
        setSelectedCharacter(null);
      } else {
        // Select the character
        setSelectedCharacter(index);
      }
    };
  
    // Ensure all necessary animation variants are defined:
    const cardVariants = {
      unselected: {
        opacity: 1,
      },
      hovered: {
        boxShadow: '0 0 5px 1px #aaa', // Subtle hover shadow
        opacity: 1.1, // Slightly increase opacity on hover
      },
      selected: {
        opacity: 1,
      },
    };
  
    const textVariants = {
      hidden: {
        opacity: 0,
        height: '100%',
        padding: 0,
      },
      visible: {
        opacity: 1,
        height: '100%',
        padding: '10px',
      },
    };
    return(
        <>
            <div className="character-welcome">
                <h1 style={{
                  margin: "0", 
                  fontWeight: "200",   
                  padding: "0",
                  fontSize: "74px", 
                  lineHeight: "115%",
                }}>Escolha seu Personagem</h1>
            </div>
        <div className="characterSelection-container">
      {CharactersData.map((character, index) => (
        <motion.div
          className="character-container"
        >
            <motion.div className="character-classes">
                {character.class}
            </motion.div>
          <motion.div
          key={index}
          className="icon-container"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          variants={cardVariants}
          animate={
            (selectedCharacter === index ? 'selected' : hoveredCharacter === index)
              ? 'hovered'
              : 'unselected'
          }>
          <motion.img
            className="icons"
            src={character.imageSrc}
            alt={character.alt}
            whileHover={{ scale: 1 }} // Optional hover scale animation
          />
          </motion.div>
          
          <motion.div
            className="character-description"
            variants={textVariants}
            animate={
              hoveredCharacter === index || selectedCharacter === index
                ? 'visible'
                : 'hidden'
            }
          >
            <h2>{character.title}</h2>
            <p className="character-label">{character.description}</p>
            <div className="character-status">
              <h3 style={{ fontStyle: 'italic', color: '#DD2D97' }}>Dificuldade</h3>
              <h3 className="character-label">{character.difficulty}</h3>
              <h3 style={{ fontStyle: 'italic', color: '#DD2D97' }}>Status</h3>
              <h3 className="character-label">{character.status}</h3>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
    </>
    );  
}

export default PickCharacter