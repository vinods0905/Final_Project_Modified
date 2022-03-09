import React from "react";
import "./WidgetbarBottom.css";

const WidgetbarBottom = ({ Icon, titlelight, titledark, titleheading }) => {
  return (
    <div className="widgetbartop">
      {Icon && <Icon />}
      <h3 className="heading">{titleheading}</h3>
      <p className="light">{titlelight}</p>
      <p className="dark">{titledark}</p>
    </div>
  );
};

export default WidgetbarBottom;
