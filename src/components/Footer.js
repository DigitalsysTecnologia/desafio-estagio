import React from 'react';
import '../css/Footer.css'; // Importe o arquivo CSS para estilizar o rodapé, se necessário

function Footer({show}) {
  return (
    <footer className={show ? 'footer show' : 'footer hide'}>
      <div className="footer-column">
        <h3>Contatos</h3>
          <ul>
            <li>GitHub: 
              <a href ="https://github.com/matheusbuenowb" 
              target="blank_"> matheusbuenowb</a>
            </li>
            <li>Telefone: (43) 99986-2205</li>
            <li>Linkedin: 
              <a href="https://www.linkedin.com/in/matheus-bueno-faria-6438891a4/" 
              target="blank_"> Matheus Bueno Faria</a>
            </li>
          </ul>
      </div>
      <div className="footer-column">
        <h3>Outros RPGs</h3>
          <ul>
            <a href = "https://dnd.wizards.com/pt-BR" 
            target="blank_">
              <li>Dungeons & Dragons</li>
            </a>
            <a href="https://paizo.com/pathfinder" 
            target="blank_">
              <li>Pathfinder</li>
            </a>
            <a href = "https://en.bandainamcoent.eu/dark-souls/dark-souls" 
            target="blank_">
              <li>Dark Souls</li>
            </a>
            <a href ="https://www.chaosium.com/call-of-cthulhu-rpg" 
            target="blank_">
              <li>Call of Cthulhu</li>
            </a>
          </ul>
      </div>
      <div className="footer-column">
        <h3>Política</h3>
          <ul>
            <li>Cookies</li>
            <li>Privacidade</li>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
