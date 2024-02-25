import React from 'react';

function MissionDetails({mission}) {
  return (
    <div className="page-details">
      <div>
        <img src={mission.image} alt={mission.name} />
      </div>
      <div >
        <h2>{mission.name}</h2>
          <p><strong>Dificuldade:</strong> {mission.difficulty}</p>
          <p><strong>Status:</strong> {mission.status}</p>
          <p><strong>Descrição:</strong> {mission.description}</p>
      </div>
    </div>
  );
}

export default MissionDetails;
