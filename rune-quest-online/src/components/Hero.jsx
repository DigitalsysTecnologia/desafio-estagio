import './Hero.css';
import React from 'react';

function Hero(){
    return(
    <div className="hero-container">
        <img className="hero-image" src="./src/assets/HomeImage.jpg" alt="Home Image"></img>
        <img className="hero-image-mobile" src="./src/assets/mobile-2.jpg" alt="Home Image "></img>
        <img className="logo-white" src="./src/assets/logo-white.png" alt="White Logo"></img>
        <div className="texts-wrapper">
            <h1 className="welcome-message">Vivencie um novo mundo</h1>
            <h2 className="second-message">Escolha seu personagem e em seguida sua missão!</h2>
        </div>
    </div>
    );
}

export default Hero