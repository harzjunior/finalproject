import React from "react";
import BoxImg from "./BoxImg";
import "../style/detailupdate.css";

const DetailUpdate = ({ title, msg, titleBtn }) => {
  return (
    <section className="request_warpper">
      <div className="detail_data">
        <h1>{title}</h1>
        <p>{msg}</p>
      </div>
    </section>
  );
};

export default DetailUpdate;
