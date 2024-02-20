import './Navbar.css';

function Navbar(){
    return(
        <header className="header">
        <nav className="nav-container">
            <div className="image-container">
               <a href="http://localhost:5173/home"><img className="logo-yellow" src="./src/assets/logo-yellow.png" alt="Rune Quest"></img></a>
                </div>
        </nav>
        </header>
        
    );
    
}

export default Navbar



