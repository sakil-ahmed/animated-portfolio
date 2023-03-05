import React, { useEffect, useState } from "react";
import "./Project.scss";
import AnimatedLetters from "./../AnimatedLetters/index";
import Card from "./../card/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import minimog from "./../../assets/minimog.png";
import okiro from "./../../assets/okairo.png";
import grover from "./../../assets/grover.png";
import portfolio from "./../../assets/portfolio.webp";
import startbox from "./../../assets/start.png";

const card = [
  {
    id: 1,
    img: minimog,
    title: "",
    subTitle: "Minimog",
    path: "https://minimog.netlify.app/",
  },
  {
    id: 2,
    img: okiro,
    title: "",
    subTitle: "Okiro",
    path: "https://okario.netlify.app",
  },
  {
    id: 3,
    img: grover,
    title: "",
    subTitle: "Grover Store",
    path: "https://groverstore.netlify.app",
  },
  {
    id: 4,
    img: portfolio,
    title: "",
    subTitle: "portfolio V2",
    path: "https://sakilsahmed.netlify.app/",
  },
  {
    id: 5,
    img: "https://tonu-next-light.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-6.6ac3b5b1.jpg&w=640&q=75",
    title: "",
    subTitle: "Start Box",
    path: "https://startbox.netlify.app",
  },
  {
    id: 6,
    img: startbox,
    title: "",
    subTitle: "Start Box",
    path: "https://startbox.netlify.app",
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
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="title"
          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="card__container"
          >
            {card.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </motion.div>
          <div className="project__btns">
            <Link to="/work">View all work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
