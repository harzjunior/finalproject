import React from "react";
import "../style/Properties.css";
import Btn from "./Btn";
import Property from "../img/Eclipsian.png";

const Properties = () => {
  return (
    <div className="properties-wapper">
      <img src={Property} alt="Eclipsian" />

      <div className="position">
        <h1>Properties For Rent</h1>
        <div className="btn">
          <Btn titleBtn="Apply Today" />
          <Btn titleBtn="View properties" />
        </div>
      </div>
    </div>
  );
};

export default Properties;
