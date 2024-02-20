import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PickMission.css';
import MissionData from '../data/MissionsData.jsx';


function PickMission(){

    const [selectedCard, setSelectedCard] = useState(null); // Use 'selectedCard' for clarity

    const handleClick = (cardIndex) => {
      if (selectedCard === cardIndex) {
        // Deselect card on second click
        setSelectedCard(null);
      } else {
        // Select card
        setSelectedCard(cardIndex);
      }
    };
  
    const cardVariants = {
      unselected: {
        border: 'none', // Default border
        boxShadow: 'none',
      },
      selected: {
        border: '5px solid green', // Permanent green border
      },
    };
  
    return(
        <div className="missions-screen">
      <div className="title-container">
        <h1 className="mission-title">Escolha sua Jornada</h1>
      </div>
      <div className="missionSelection-container">
       
          {MissionData.map((mission, index) => (
            <motion.div
            key={index}
            className="missions-container"
            onClick={() => handleClick(index)}
            variants={cardVariants}
            animate={selectedCard === index ? 'selected' : 'unselected'}
            >
              <div className="missionImages-wraper">
                <img
                  className="mission-cards-images"
                  src={mission.imageSrc}
                  alt={mission.alt}
                />
              </div>
              <div className="missionsDescription-wraper">
                <h2 className="titles">{mission.title}</h2>
                <p className="description">{mission.description}</p>
                <div className="status-wrapper">
                  <h2 className="status">Dificuldade</h2>
                  <p className="itens">{mission.difficulty}</p>
                </div>
                <div className="status-wrapper">
                  <h2 className="status">Status</h2>
                  <p className="itens">{mission.status}%</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
    );
}

export default PickMission