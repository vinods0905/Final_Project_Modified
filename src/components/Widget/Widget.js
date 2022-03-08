import React from "react";
import "./Widget.css";
import { FiberManualRecord, Info, ExpandMore } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecord />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("Boosting women entrepreneurship", "1d ago . 800 readers")}
      {newsArticle("A new airline is coming", "1d ago . 8,380 readers")}
      {newsArticle(
        "Feeling stressed? Best to speak up",
        "1d ago . 380 readers "
      )}
      {newsArticle("Carreer switch: What stops you?", "8h ago . 240 readers")}
      <IconButton>
        <h6>Show more</h6>
        <ExpandMore />
      </IconButton>
    </div>
  );
};

export default Widget;
