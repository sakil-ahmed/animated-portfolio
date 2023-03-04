import React from "react";
import "./Card.scss";

const Card = ({ item: { img, subTitle, path } }) => {
  return (
    <div className="card__box">
      <a href={path} target="_blank"></a>
      <div className="card__thumbnail">
        <img src={img} alt="Project Thumbnail" />
      </div>
      <div className="card__content">
        <h3>Website Development</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
