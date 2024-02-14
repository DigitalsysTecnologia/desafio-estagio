import React from "react";
import Styles from "../style/Navbar/navbar.module.css";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Link to="/">
        <img className={Styles.logo} src={Logo} alt="" />
      </Link>
      <div className={Styles.link}>
        <Link to="/missao">
          <a  href="">
            <p className={Styles.links}>Missões</p>
          </a>
        </Link>
        <Link to="/herois">
          <a href="">
            <p className={Styles.links} >Personagens</p>
          </a>
        </Link>
        <Link to="/historia">
            <a href="">
                <p className={Styles.links}>
                    História
                </p>
            </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
