import React from "react";
import Styles from "../style/Navbar/navbar.module.css";
import Logo from "../assets/logo.svg";
import Sun from "../assets/sun.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Link to="/">
        <img className={Styles.logo} src={Logo} alt="" />
      </Link>
      <div className={Styles.link}>
        <Link to="/catalog">
          <a  href="">
            <p className={Styles.links}>Catalog</p>
          </a>
        </Link>
        <Link to="/about">
          <a href="">
            <p className={Styles.links} >About</p>
          </a>
        </Link>
        <img className={Styles.icon} src={Sun} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
