import React from "react";
import { useSelector } from "react-redux";
import SidebarTop from "../SidebarTop/SidebarTop";
import "./Sidebar.css";
import { Bookmark, AddCircle, Add } from "@mui/icons-material";
import SidebarBottom from "../SidebarBottom/SidebarBottom";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarTop titledark={user.displayName} src={user.photoURL} />
        <hr />
        <SidebarTop titlelight="connections" />
        <SidebarTop Icon={AddCircle} />
        <SidebarTop titledark="Grow your Network" />

        <hr />
        <SidebarTop titlelight="Access exclusive tools and insights" />
        <SidebarTop titledark="Try premium for free" />
        <hr />
        <SidebarTop Icon={Bookmark} titlelight="My Items" />
      </div>
      <div className="sidebar__bottom">
        <SidebarBottom titlelight="Recent" />
        <SidebarBottom value="#" titlelight="indiastudents" />
        <SidebarBottom value="#" titlelight="india" />
        <SidebarBottom titledarkblue="Groups" />
        <SidebarBottom titledarkblue="Events" Icon={Add} />
        <SidebarBottom titledarkblue="Followed Hashtags" />
        <SidebarBottom value="#" titlelight="indiastudents" />
        <SidebarBottom value="#" titlelight="india" />
        <SidebarBottom titlelight="see all" />
        <hr />
        <SidebarBottom titlelight="Discover more" />
      </div>
    </div>
  );
};

export default Sidebar;
