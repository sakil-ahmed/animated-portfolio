import React from "react";
import "./ServiceCard.scss";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import { motion } from "framer-motion";

const ServiceCard = ({ icon }) => {
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
            <CodeOffOutlinedIcon />
          ) : icon === "res" ? (
            <ImportantDevicesOutlinedIcon />
          ) : (
            ""
          )}
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
    </motion.div>
  );
};

export default ServiceCard;
