import React from 'react';
import MissionList from '../components/MissionList'
import missionsData from '../data/missionData';
import "../css/style.css"
import Footer from '../components/Footer';
import { useEffect } from 'react';

function MissionsPage() {

  /* Necessário para estilizar o rodapé na home */
  useEffect(() => {
    function handleResize() {
      const contentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
  
      if (contentHeight < viewportHeight) {
        document.querySelector('.footer').classList.add('fixed-bottom');
      } else {
        document.querySelector('.footer').classList.remove('fixed-bottom');
      }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (    
    <div className="container-inicial">
      <h1 className='titulo'>Missões</h1>
        {missionsData.map(mission => (
        <MissionList key={mission.id} mission={mission} />
        ))}
      <Footer/>
    </div>
  );
}

export default MissionsPage;
