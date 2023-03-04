import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav__menu__items">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <a href={"#about"}>About</a>
      </li>
      <li>
        <a href={"#service"}>Service</a>
      </li>
      <li>
        <a href={"#portfolio"}>Portfolio</a>
      </li>
      <li>
        <a href={"#blog"}>Blog</a>
      </li>
      <li>
        <a href={"#contact"}>Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
