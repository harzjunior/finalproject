import React from "react";
import "../style/testimony.css";
import Testimonice from "../img/Eclipsian.png";

function Testimony() {
  return (
    <div className="testimony_wrapper">
      <div className="testimony-bg">
        <img src={Testimonice} alt="Eclipsian" />
      </div>

      <div className="testimony-title">
        <h1>What Others Are Saying</h1>
      </div>

      <div className="testimony-container">
        <div className="testimony-info">
          <div className="testimony-logo">
            {/* <img src="" alt="" /> */}
            <h1>Stanley</h1>
          </div>
          <div>
            <div className="tenant">
              <h1>Justice Benson</h1>
              <h3>Investor/Property Owner</h3>
            </div>
            <div className="message">
              <p>
                “100% will never rent from anyone else. Arrow Capital is full of
                understanding, friendly people. Not only are they nice but very
                efficient and always quick to solve a problem. I absolutely love
                renting from Arrow, wouldn’t recommend anyone but them.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
