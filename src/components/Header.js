import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Header() {
  const [input, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="YouTube Logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          placeholder="Search"
          type="text"
          value={input}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://avatars1.githubusercontent.com/u/56771492?s=460&u=4afd2f2ce7b4b534ffe9ac137326d80d511c79d7&v=4"
        />
      </div>
    </div>
  );
}
