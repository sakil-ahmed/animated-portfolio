import React, { useEffect, useState } from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import AnimatedLetters from "./../AnimatedLetters/index";

const Services = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My best services".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="services" id="service">
      <div className="container">
        <div className="row line">
          <div style={{ textAlign: "center" }}>
            <span className="subtitle">Check services</span>
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
        <div className="visible__text">
          <h1>Services</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
