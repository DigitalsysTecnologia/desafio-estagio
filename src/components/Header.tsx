import '../styles/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {

    return (
        <header className="Header">
            <Link to='/' className='LogoContainer'>
                <div className="Logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <h1>Grimório do Mestre das Ilusões</h1>
            </Link>
            <nav>
                <Link className={window.location.pathname === "/characters" ? "ActiveLink" : ""} to="/characters">Personagens</Link>
                <Link className={window.location.pathname === "/adventures" ? "ActiveLink" : ""}to="/adventures">Aventuras</Link>
            </nav>
        </header>
    );
}

export default Header;