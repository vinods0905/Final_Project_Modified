import React from "react";
import WidgetbarTop from "../WidgetbarTop/WidgetbarTop";
import "./Widget.css";
import { FiberManualRecord, Info, ExpandMore } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import WidgetbarBottom from "../WidgetbarBottom/WidgetbarBottom";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__top">
        <WidgetbarTop titleheading="LinkedIn News" Icon={Info} />
        <WidgetbarTop
          Icon={FiberManualRecord}
          titledark="Boosting women entrepreneurship"
        />
        <WidgetbarTop titlelight="1d ago . 800 readers" />
        <WidgetbarTop
          Icon={FiberManualRecord}
          titledark="A new airline is coming"
        />
        <WidgetbarTop titlelight="1d ago . 8,380 readers" />
        <WidgetbarTop
          Icon={FiberManualRecord}
          titledark="Feeling stressed? Best to speak up"
        />
        <WidgetbarTop titlelight="1d ago . 380 readers" />
        <WidgetbarTop
          Icon={FiberManualRecord}
          titledark="Carreer switch: What stops you?"
        />
        <WidgetbarTop titlelight="8h ago . 240 readers" />

        <IconButton>
          <WidgetbarTop titlelight="Show more" />
          <ExpandMore className="expandmore" />
        </IconButton>
      </div>

      <div className="widget__bottom">
        <WidgetbarBottom titleheading="Today's top courses" Icon={Info} />
        <WidgetbarBottom
          Icon={FiberManualRecord}
          titledark="Agile Foundations"
        />
        <WidgetbarBottom titlelight="Doug Rose" />
        <WidgetbarBottom
          Icon={FiberManualRecord}
          titledark="Communication Foundations
          "
        />
        <WidgetbarBottom titlelight="Brenda Bailey-Hughes and Tatiana Kolovou" />
        <WidgetbarBottom
          Icon={FiberManualRecord}
          titledark="Communicating with Confidence"
        />
        <WidgetbarBottom titlelight="Jeff Ansell" />
        <WidgetbarBottom
          Icon={FiberManualRecord}
          titledark="Full Stack Web Development"
        />
        <WidgetbarBottom titlelight="react" />

        <IconButton>
          <WidgetbarBottom titlelight="Show more on LinkedIn Learning" />
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Widget;
