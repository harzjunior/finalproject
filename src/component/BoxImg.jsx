import React from "react";

const BoxImg = ({ boxImage }) => {
  return (
    <div className="box_image-wrapper">
      <img src={boxImage} alt="before-and-after" />
    </div>
  );
};

export default BoxImg;
