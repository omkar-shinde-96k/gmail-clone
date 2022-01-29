import React from "react";
import "./AllMailsStyle.scss";

import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailIcon from "@mui/icons-material/Email";

export const AllMails = () => {
  return (
    <>
      <div className="AllMails">
        <div className="AllMails-header-pagination">
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
            <div className="AllMails-header-pagination-icons">
              <ArrowBackIosIcon />
            </div>
            <div className="AllMails-header-pagination-icons">
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>

        <div className="AllMails-filters">
          <div className="AllMails-filters-item Active-Filter">
            <span>
              <EmailIcon />
            </span>
            <p> Primary </p>
          </div>
          <div className="AllMails-filters-item ">
            <span>
              <PeopleIcon />
            </span>
            <p>Social</p>
          </div>
          <div className="AllMails-filters-item ">
            <span>
              <LocalOfferIcon />
            </span>
            <p>Promotions</p>
          </div>
        </div>
      </div>
    </>
  );
};
