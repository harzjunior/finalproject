import React from "react";
import Navbar from "./Navbar";
import footer from "../img/ALL-PAGES_-LT-Gray-Arrow-BKG.png";
import footerLogo from "../img/realty-mls-logo.png";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <img src={footer} alt="footer" />

      <div className="footer_nav_menu ">
        <div className="footerLogo">
          <img src={footerLogo} alt="" />
        </div>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Brokerage</a>
          </li>
          <li>
            <a href="#">Tenant</a>
          </li>
          <li>
            <a href="#">Investment</a>
          </li>
        </ul>

        <div className="footer_copy">
          <span>&copy; ARROW CAPITAL {new Date().getFullYear()}</span>
          <span>PRIVACY POLICY </span> <span>SITE BY STANLEY</span>
          <span>SUPERVISED BY H-BAH</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;