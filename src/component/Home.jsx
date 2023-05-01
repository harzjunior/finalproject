import React from "react";
import "../style/home.css";
import Btn from "./Btn";
import hero from "../img/Kyrian.png";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero_section">
        <img src={hero} alt="Kyrian" />
        <div className="hero_position">
          <div className="hero_left"></div>
          <div className="hero_right">
            <h1>
              <span>Stanley Realtor </span>
              is a real estate investment company headquartered in Asaba, Delta
              State
            </h1>
            <div className="hero-btn">
              <Btn titleBtn="View Properties For Rent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
