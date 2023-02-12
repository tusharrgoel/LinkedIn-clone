import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widgets.css";
import { FiberManualRecord, FiberManualRecordOutlined } from "@mui/icons-material";


function Widgets() {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets_article">
      <div className="widgets_articleleft">
        <FiberManualRecordOutlined />
      </div>
      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2> LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Accenture is Back", "Mass Recruting")}
    </div>
  )
}

export default Widgets;
