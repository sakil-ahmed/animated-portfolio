import React from "react";
import Marquee from "react-fast-marquee";
import "./Marque.scss";

const Marque = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="marque__container line">
        <Marquee speed={50}>
          <p>I always try to put my best service to my client.</p>
          {""}
          <p>I always try to put my best service to my client.</p>
          {""}
          <p>I always try to put my best service to my client.</p>
          {""}
          <p>I always try to put my best service to my client.</p>
          {""}
          <p>I always try to put my best service to my client.</p>
          {""}
          <p>I always try to put my best service to my client.</p>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
