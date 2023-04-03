import React from "react";
import "./Button.scss";

const Button = ({ btnText, btnLink }) => {
  return (
    <>
      {btnLink ? (
        <a className="btn" href={btnLink}>
          {btnText}
        </a>
      ) : (
        <button className="btn">{btnText}</button>
      )}
    </>
  );
};

export default Button;
