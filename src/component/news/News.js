import React from "react";
import "./news.css";
import { NewsList } from "../../helper/news";
import GavelIcon from "@material-ui/icons/Gavel";
function News() {
  return (
    <div className="news">
        <div className="news__title">
        <h3>Latest News</h3>
        <div>
          ------------
          <GavelIcon fontSize="large" />
          ------------
        </div>
      </div>
     <div className="news__container">
     {NewsList.map((news) => (
        <div key={news.id} className="news__box">
          <img src={news.image} alt="" />
          <div className="news__content">
            <h4>{news.title}</h4>
            <p>{news.para}</p>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
}

export default News;
