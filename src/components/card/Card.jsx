import React from "react";
import "./Card.scss";
import { HiEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Card = ({ item: { img, subTitle, path, git } }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="card__box"
    >
      <div className="card__thumbnail">
        <img src={img} alt="Project Thumbnail" />
      </div>
      <div className="card__content">
        <h3>Website Development</h3>
        <p>{subTitle}</p>
        <div className="icons">
          <a href={path} target="_blank">
            <HiEye size={"25px"} />
          </a>
          <a href={git} target="_blank">
            <AiFillGithub size={"25px"} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
