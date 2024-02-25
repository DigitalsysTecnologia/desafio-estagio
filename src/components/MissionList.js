import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Page.css'

function MissionList({mission}) {
  return (
    <div className='page'>
      <h2>{mission.name}</h2>
      <Link to ={`/missions/${mission.id}`}>
        <button> Detalhes da missão</button>
      </Link>
    </div>
  );
}

export default MissionList;
