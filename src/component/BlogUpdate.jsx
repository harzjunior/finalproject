import React from "react";
import "../style/blogUpdate.css";
import News from "../img/Zyris.png";
import Btn from "./Btn";

const BlogUpdate = () => {
  return (
    <section className="news_wapper">
      <h1>Stanley News & Updates</h1>
      <div className="news">
        <img src={News} alt="Zyris" />
        <div className="news-details">
          <h3>
            <a href="#">StanleyBNB</a>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            consequatur culpa aut illum veniam ipsam consequuntur beatae dolores
            fugiat architecto perferendis incidunt praesentium a, atque vitae
            ipsum aliquid accusantium nobis.
          </p>
          <div className="news_btn">
            <Btn titleBtn="View Properties" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogUpdate;
