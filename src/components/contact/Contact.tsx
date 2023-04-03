import React, { useEffect, useState } from "react";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import Form from "./form/Form";
import { motion } from "framer-motion";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const Arrayname = "Send me a Message".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row line">
          <div className="visible__rotate__text">
            <h1>Contat Me</h1>
          </div>
          <div className="from__wraper">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="contact__title"
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={Arrayname}
                idx={15}
              />
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="contact__description"
            >
              Your email address will not be published. All fields are required
            </motion.p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
