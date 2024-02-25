import React from 'react';
import './css/style.css';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import Footer from './components/Footer';

function Home() {

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
    handleResize(); // Executa a verificação de altura ao carregar a página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <div className='container-inicial'>
      <h1 >O Artesão das Ilusões</h1>
      <p>Bem-vindo ao mundo The Witcher! Escolha uma das opções: </p>
      <Link to="/characters">
        <button > Personagens</button>
      </Link>
      <Link to ="/missions">
        <button> Missões</button>
      </Link>
      <Footer/>
    </div>
  );
}

export default Home;
