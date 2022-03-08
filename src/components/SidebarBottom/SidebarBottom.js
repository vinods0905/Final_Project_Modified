import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarBottom.css";

const SidebarBottom = ({
  titlelight,
  titledark,
  Icon,
  src,
  value,
  titledarkblue,
}) => {
  return (
    <div className="sidebarbottom">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      {value}
      <p className="light">{titlelight}</p>
      <p className="dark">{titledark}</p>
      <p className="darkblue1">{titledarkblue}</p>
    </div>
  );
};

export default SidebarBottom;
