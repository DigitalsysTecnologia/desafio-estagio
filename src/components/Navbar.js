import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar-item">
          <Link to="/characters">PERSONAGENS</Link>
        </li>
        <li className="navbar-item">
          <Link to="/missions">MISSÕES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
