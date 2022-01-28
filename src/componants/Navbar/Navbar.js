import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="menu">
          <MenuIcon />
        </div>
        <div className="nav-logo">
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
        </div>
        <div className="nav-search">
          <div className="search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <div className="search-input"></div>
            <div className="search-filter">
              <FilterListIcon />
            </div>
          </div>
        </div>
        <div className="nav-filter">Active</div>
        <div className="nav-support">
          <HelpOutlineIcon />
        </div>
        <div className="nav-setting">
          <SettingsIcon />
        </div>
        <div className="nav-g-apps">
          <AppsIcon />
        </div>
        <div className="nav-google-account">
          <img
            style={{ width: "100%", height: "80%" }}
            src="https://admin.google.com/u/0/ac/images/logo.gif?uid=101344229336829121119&service=google_gsuite"
          />
          {/* <img src="https://lh3.google.com/u/0/ogw/ADea4I6unLzN5nvUvVXwmLeIEtWXCigYZi6Yrf2Lhgdr=s32-c-mo" /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
