import React from "react";
import "./AllMailsStyle.scss";

import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const AllMails = () => {
  return (
    <>
      <div className="AllMails">
        <div className="AllMails-header">
          <div className="AllMails-header-left-group">
            <div className="AllMails-Checkall-checkbox">
              <input type="checkbox" />
            </div>
            <div className="AllMails-refresh">
              <RefreshIcon />
            </div>
            <div className="AllMails-header-menu">
              <MoreVertIcon />
            </div>
          </div>
          <div className="AllMails-header-right-group">
            <div className="AllMails-header-pages">1-10 of 1,000</div>
            <div className="AllMails-header-back-pagination">
              <ArrowBackIosIcon />
            </div>
            <div className="AllMails-header-next-pagination">
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
