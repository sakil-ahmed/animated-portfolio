import React, { useRef } from "react";
import "./Form.scss";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs
      .sendForm(
        "service_zv7q7mg",
        "template_rch4nmq",
        form.current,
        "RYB7CBoTag91d7Zoq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="form__input">
        <div className="form_group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="form_group">
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="contact__btns">
        <button className="btn" type="submit">
          Submit now
        </button>
        <div className="text">
          <span className="phone">
            <span>
              <MdOutlineWifiCalling3 />
            </span>{" "}
            +880 1729-925644
          </span>
          <span className="email">
            <span>
              <MdOutlineEmail />
            </span>{" "}
            sakilahmed.dev@gmail.com
          </span>
        </div>
      </div>
    </motion.form>
  );
};

export default Form;
