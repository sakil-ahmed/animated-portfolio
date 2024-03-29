import React, { useEffect, useState } from "react";
import "./Project.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import Card from "../card/Card";
import { motion } from "framer-motion";
import { card } from "../../../public/data/CardData";
import { Link } from "react-router-dom";

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
          <motion.div className="card__container">
            {card.map((item: object, i: any) => {
              return <Card key={i} item={item} />;
            })}
          </motion.div>
          <div className="project__btns">
            <Link to={"#work"}>View all work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
