import React, { useRef } from "react";
import "./Form.scss";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful, touchedFields },
  } = useForm();

  const onSubmit = (data) => {
    form.current.reset();
    console.log(data);
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form__input">
        <div className="form_group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />

          <p className={`error__message ${errors.name && "show"}`}>
            This field is required
          </p>
        </div>
        <div className="form_group">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <p className={`error__message ${errors.email && "show"}`}>
            {errors.email ? errors.email.message : "This field is required"}
          </p>
        </div>
      </div>
      <div className="form_group">
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          placeholder="Message"
          {...register("message", { required: true })}
        ></textarea>
        <p className={`error__message ${errors.message && "show"}`}>
          This field is required
        </p>
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
