import React from "react";
import "./ButtonPink.css";

const ButtonPink = ({ text, type, onClickHandler, id }) => {
  return (
    <button className="ButtonPink" type={type} id={id} onClick={onClickHandler}>
      {text}{" "}
    </button>
  );
};

export default ButtonPink;
