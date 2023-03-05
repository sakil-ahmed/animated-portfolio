import React from "react";
import "./Card.scss";
import { HiEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const Card = ({ item: { img, subTitle, path, git } }) => {
  return (
    <div className="card__box">
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
    </div>
  );
};

export default Card;
