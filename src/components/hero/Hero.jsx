import React, { useEffect, useState } from "react";
import "./Hero.scss";
import AnimatedLetters from "./../AnimatedLetters/index";
import img from "./../../assets/avater-removebg-preview.png";
import Button from "../Button/Button";

const Hero = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const jobArrayname = "Frontend Web".split("");
  const jobArray = "Developer".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="home line" id="home">
      <div className="container">
        <div className="row">
          <div className="hero__left__text animate__animated animate__fadeInLeft">
            <h2 className="hero__title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArrayname}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}
              />
            </h2>
            <div className="subtitle__padding">
              <h5 className="hero__subtitle">Sakil Ahmed</h5>
            </div>
            <div className="btns">
              <Button btnText="Contact Me" btnLink={"#contact"} />
            </div>
          </div>
          <div className="hero__right__img animate__animated animate__fadeInRight">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="visible__text animate__animated animate__zoomIn">
        <h1>Developer</h1>
      </div>
    </section>
  );
};

export default Hero;
