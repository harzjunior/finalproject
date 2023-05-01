import React from "react";
import "../style/imgbox.css";


const ImgBox = ({img,title}) => {
  return (
    <div className="service">
      <a href="#" target="_blank">
        <img src={img} alt="Myxen" />
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default ImgBox;
