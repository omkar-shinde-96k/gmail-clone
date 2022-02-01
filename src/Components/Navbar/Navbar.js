import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="menu">
          <MenuIcon/>
        </div>
        <div className="nav-logo">
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
        </div>
        <div className="nav-search">
          <div className="search">
            <div className="search-icon">
              <SearchIcon/>
            </div>
            <input
              type="text"
              placeholder="Search Mail"
              className="search-input"
            ></input>
            <div className="search-filter">
              <TuneIcon/>
            </div>
          </div>
        </div>
        <div className="nav-right-icons">
          <HelpOutlineIcon />
        </div>
        <div className="nav-right-icons">
          <SettingsOutlinedIcon />
        </div>
        <div className="nav-right-icons">
          <AppsIcon />
        </div>
        <div className="nav-google-account">A</div>
      </div>
    </>
  );
};
