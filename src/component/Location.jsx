import React from "react";
import "../style/location.css";
import Btn from "./Btn";

const Location = () => {
  return (
    <div className="location_wrapper">
      <div className="location_title">Location</div>
      <div className="location_main">
        <div className="location_map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1SJ7iTlmVfNJoFTU3dWHsTgu-q7pXRF4&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
        <div className="location_details">
          <h1>Arrow Capital</h1>
          <p>
            2000 South 10th Street <br />
            Lincoln, NE 68502
          </p>
          <div className="location_details-btn">
            <Btn titleBtn="Contact Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;