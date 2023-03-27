import React from "react";
import "./Card.scss";
import { HiEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({ item: { img, subTitle, path, git } }) => {
  const [direction, setDirection] = useState("bottom");

  const handleMouseEnter = (event) => {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;

    if (x <= rect.width / 3) {
      setDirection("left");
    } else if (x >= (rect.width * 2) / 3) {
      setDirection("right");
    } else if (y <= rect.height / 3) {
      setDirection("top");
    } else if (y >= (rect.height * 2) / 3) {
      setDirection("bottom");
    } else {
      setDirection("bottom");
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
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
      <div className={`card__content ${direction}`}>
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
