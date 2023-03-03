import React from "react";
import "./Footer.scss";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "./../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer line" id="contact">
      <div className="container">
        <div className="row">
          <div className="animate__animated footer__logo ">
            <a href="#header">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="footer__social__icons">
            <a href="https://www.facebook.com/sakilahmed009" target="_blank">
              <RiFacebookFill />
            </a>
            <a href="#" disabled={true}>
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sakil-ahmed007/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="copyright__text">
            <p>© 2023. All rights reserved by Sakil Ahmed.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
