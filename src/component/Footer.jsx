import React from "react";
import Navbar from "./Navbar";
import footer from "../img/ALL-PAGES_-LT-Gray-Arrow-BKG.png";
import footerLogo from "../img/realty-mls-logo.png";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_img-wrapper">
        <img src={footer} alt="footer" />
      </div>

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
      </div>

      <div className="footer_copy">
        &copy; ARROW CAPITAL {new Date().getFullYear()} | PRIVACY POLICY | SITE
        BY STANLEY | SUPERVISED BY H-BAH
      </div>
    </div>
  );
};

export default Footer;
