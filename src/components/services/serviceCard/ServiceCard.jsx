import React from "react";
import "./ServiceCard.scss";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { HiCode } from "react-icons/hi";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import { motion } from "framer-motion";

const ServiceCard = ({ item: { icon, title, description } }) => {
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
      className="rn-service"
    >
      <div className="inner">
        <div className="icon">
          {icon === "web" ? (
            <HiCode size={"50px"} />
          ) : icon === "res" ? (
            <ImportantDevicesOutlinedIcon />
          ) : (
            ""
          )}
        </div>
        <div className="service__content">
          <h4 className="service__card__title">{title}</h4>
          <p className="service__card__description">{description}</p>
          <Link className="read-more-button" to={"#"}>
            <ImArrowRight2 />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
