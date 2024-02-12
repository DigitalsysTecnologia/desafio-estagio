import React from "react";
import Styles from "../style/Navbar/navbar.module.css";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import User from "../assets/user.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <button>
        <img className={Styles.icon} src={Menu} alt="" />
      </button>

      <Link to="/">
        <img className={Styles.logo} src={Logo} alt="" />
      </Link>
      <a href="">
        <img className={Styles.icon} src={User} alt="" />
      </a>
    </nav>
  );
}

export default Navbar;
