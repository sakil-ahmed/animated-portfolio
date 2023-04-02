import React from "react";
import "./ServiceCard.scss";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="rn-service">
      <div className="inner">
        <div className="icon">
          <FaLaptopCode size={"50px"} />
        </div>
        <div className="service__content">
          <h4 className="service__card__title">Web Development</h4>
          <p className="service__card__description">
            It uses a dictionary of over 200 Latin words, combined witha handful
            of model sentence.
          </p>
          <Link className="read-more-button" to={"#"}>
            <ImArrowRight2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
