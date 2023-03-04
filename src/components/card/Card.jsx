import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card__box">
      <a href="#"></a>
      <div className="card__thumbnail">
        <img
          src="https://tonu-next-light.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.7f344d00.jpg&w=640&q=75"
          alt="Project Thumbnail"
        />
      </div>
      <div className="card__content">
        <h3>Business Website Design</h3>
        <p>Web Design</p>
      </div>
    </div>
  );
};

export default Card;
