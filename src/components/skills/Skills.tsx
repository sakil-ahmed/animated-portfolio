import React, { useEffect, useState } from "react";
import "./Skills.scss";
import WordCloud from "./WordCloud";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters/index";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Skills".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row line">
          <div style={{ textAlign: "center" }}>
            <span className="subtitle">My Skills</span>
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
        </div>
        <WordCloud />
      </div>
    </section>
  );
};

export default Skills;
