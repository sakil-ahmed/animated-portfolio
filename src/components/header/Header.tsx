import React, { useState } from "react";
import "./Header.scss";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Menubar from "./navbar/Navbar";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="container__fluid">
        <div className="row">
          <div className="mobile__menu__bar">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="mobile__menu__bar__btn"
            >
              <HiOutlineMenuAlt1 />
            </button>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Sakil Logo" />
            </Link>
          </div>
          <nav className={`nav__menu ${isMenuOpen && "nav__menu__open"}`}>
            <div className="close__menu">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="close__menu__btn"
              >
                <MdClose />
              </button>
            </div>
            <Menubar setIsMenuOpen={setIsMenuOpen} />
          </nav>
          <div className="header__btn">
            <a className="resume__btn" href="Resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
