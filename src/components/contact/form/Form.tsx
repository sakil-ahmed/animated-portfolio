import React, { useRef } from "react";
import "./Form.scss";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form: any = useRef();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_28srm6x",
        "template_9taiuii",
        form.current,
        "RYB7CBoTag91d7Zoq"
      )
      .then(
        (result) => {
          toast.success("Email Send Successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("There was an error try again", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <motion.form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="form__input"
      >
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
                message: "Invalid email address",
              },
            })}
          />
          <p className={`error__message ${errors.email && "show"}`}>
            {errors.email?.message
              ? errors.email.message
              : "This field is required"}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="form_group"
      >
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          placeholder="Message"
          {...register("message", { required: true })}
        ></textarea>
        <p className={`error__message ${errors.message && "show"}`}>
          This field is required
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="contact__btns"
      >
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
      </motion.div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.form>
  );
};

export default Form;
