import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ setIsMenuOpen }: any) => {
  return (
    <ul className="nav__menu__items">
      <li onClick={() => setIsMenuOpen(false)}>
        <Link to={"/"}>Home</Link>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#about"}>About</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#skills"}>Skills</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#service"}>Service</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#portfolio"}>Portfolio</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#contact"}>Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
