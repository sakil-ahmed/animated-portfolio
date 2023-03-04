import React from "react";
import "./Form.scss";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";

const Form = () => {
  return (
    <form>
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
    </form>
  );
};

export default Form;
