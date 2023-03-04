import React, { useEffect, useState } from "react";
import "./Project.scss";
import AnimatedLetters from "./../AnimatedLetters/index";
import Card from "./../card/Card";
import { Link } from "react-router-dom";

const card = [
  {
    id: 1,
    title: "",
    subTitle: "",
    path: "",
  },
  {
    id: 2,
    title: "",
    subTitle: "",
    path: "",
  },
  {
    id: 3,
    title: "",
    subTitle: "",
    path: "",
  },
];

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Latest Project".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row line">
          <div style={{ textAlign: "center" }}>
            <span className="subtitle">Projects</span>
          </div>
          <h2 className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </h2>
          <div className="card__container">
            {card.map((item) => {
              return <Card key={item.id} />;
            })}
          </div>
          <div className="project__btns">
            <Link to="/work">View all work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
