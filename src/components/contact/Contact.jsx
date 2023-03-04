import React, { useEffect, useState } from "react";
import "./Contact.scss";
import AnimatedLetters from "./../AnimatedLetters/index";
import Form from "./form/Form";

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
            <h2 className="contact__title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={Arrayname}
                idx={15}
              />
            </h2>
            <p className="contact__description">
              Your email address will not be published. All fields are required
            </p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
