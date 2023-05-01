import React from "react";
import "../style/btn.css";

const Btn = ({ titleBtn }) => {
  return (
    <div className="btn">
      <button type="button ">
        <a href="#"> {titleBtn}</a>
      </button>
    </div>
  );
};

export default Btn;
