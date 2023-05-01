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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.
                Atque, in omnis aperiam quisquam fugiat dolores id similique
                corrupti, excepturi obcaecati iure accusantium at, natus maiores
                error. Doloribus repellendus, inventore excepturi porro
                similique voluptatum facilis error ut aspernatur, sapiente
                deserunt officiis veritatis molestiae dignissimos iste impedit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
