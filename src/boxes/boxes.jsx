import React from "react";
import "./boxes.css";

const BoxComponent = () => {
  return (
    <div className="parent">
      <div className="child"></div>
      <div className="child__two"></div>
      <div className="child__three"></div>
      <div className="child__four"></div>
    </div>
  );
};

export default BoxComponent;