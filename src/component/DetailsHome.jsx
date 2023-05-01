import React from "react";
import DetailUpdate from "./DetailUpdate";
import Btn from "./Btn";
import BoxImg from "./BoxImg";
import ImageBox1 from "../img/Zyris.png";
import ImageBox2 from "../img/Kyrian.png";

const DetailsHome = () => {
  return (
    <div className="details_home-wrapper">
      <div className="details_home">
        <DetailUpdate
          title="Request an Appointment"
          msg="Please fill out the following form to request an appointment with Arrow Capital office staff. Responses to requests will be handled during regular business hours Monday-Friday in the order they were received."
        />
        <div className="detail-home_btn">
          <Btn titleBtn="Request an Appointment" />
        </div>
      </div>

      {/* before & after */}
      <div className="before_home">
        <DetailUpdate
          title="Arrow Before & After"
          msg="Arrow is dedicated to improving Lincoln. Check out some of the incredible before and after work completed by Arrow Working Group."
        />
        <div className="before_image-box">
          <BoxImg boxImage={ImageBox1} />
          <BoxImg boxImage={ImageBox2} />
        </div>
        <div className="Before_btn">
          <Btn titleBtn="View More Before & Afters" />
        </div>
      </div>
    </div>
  );
};

export default DetailsHome;
