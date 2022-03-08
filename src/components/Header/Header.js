import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
  ExpandMore,
  Apps,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt="logo"
        />
        <div className="header__input">
          <Search />
          <input
            placeholder="search for jobs,skills,companies..."
            type="text"
          />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
          <h3 className="headerOption_title">Home</h3>
        </div>

        <div className="header__option">
          <SupervisorAccount fontSize="large" />
          <h3 className="headerOption_title">My network</h3>
        </div>
        <div className="header__option">
          <BusinessCenter fontSize="large" />
          <h3 className="headerOption_title">jobs</h3>
        </div>
        <div className="header__option">
          <Chat fontSize="large" />
          <h3 className="headerOption_title">Messaging</h3>
        </div>
        <div className="header__option">
          <Notifications fontSize="large" />
          <h3 className="headerOption_title">Notifications</h3>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
        </div>
        <IconButton>
          <h3 className="headerOption_title">Me</h3>
          <ExpandMore />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <h3 className="headerOption_title">work</h3>
          <ExpandMore />
          <h3 className="headerOption_title">Try one month free</h3>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
