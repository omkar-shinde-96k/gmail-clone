import React, { useEffect, useState } from "react";
import "./inbox.scss";

import SingleMail from "../../Components/SingleMail/SingleMail";

import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailIcon from "@mui/icons-material/Email";

import { useSelector, useDispatch } from "react-redux";

export const Inbox = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("primary");
  const [page, setPage] = useState(1);
  const Mails = useSelector((state) => state.DataReducer || []);

  let FilteredMails = Mails.filter((val) => {
    if (val.category === filter && !val.trash && !val.archive) {
      return val;
    }
  });

  let limit = 15;
  let skip = limit * (page - 1);

  let FinalFilteredMails = FilteredMails.filter((FinalVal, index) => {
    if (index >= skip && index < skip + limit) {
      return FinalVal;
    }
  });

  let totalPages = Math.ceil(FilteredMails.length / limit);

  const pageInc = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const pageDec = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <div className="AllMails">
        <div className="AllMails-header-pagination">
          <div className="AllMails-header-left-group">
            <div className="AllMails-Checkall-checkbox">
              <input type="checkbox" />
            </div>
            <div className="AllMails-refresh">
              <RefreshIcon onClick={() => refreshPage()} />
            </div>
            <div className="AllMails-header-menu">
              <MoreVertIcon />
            </div>
          </div>
          <div className="AllMails-header-right-group">
            <div className="AllMails-header-pages">
              {skip + 1} -
              {skip + limit >= FilteredMails.length
                ? FilteredMails.length
                : skip + limit}{" "}
              of {FilteredMails.length}
            </div>
            <div className="AllMails-header-pagination-icons">
              <ArrowBackIosIcon onClick={pageDec} />
            </div>
            <div className="AllMails-header-pagination-icons">
              <ArrowForwardIosIcon onClick={pageInc} />
            </div>
          </div>
        </div>
        <div className="AllMails-filters">
          <div
            onClick={() => setFilter("primary")}
            className={
              filter == "primary"
                ? "AllMails-filters-item primary"
                : "AllMails-filters-item "
            }
          >
            <span>
              <EmailIcon />
            </span>
            <p> Primary </p>
          </div>
          <div
            onClick={() => setFilter("social")}
            className={
              filter == "social"
                ? "AllMails-filters-item social"
                : "AllMails-filters-item "
            }
          >
            <span>
              <PeopleIcon />
            </span>
            <p>Social</p>
          </div>
          <div
            onClick={() => setFilter("promotions")}
            className={
              filter == "promotions"
                ? "AllMails-filters-item promotions"
                : "AllMails-filters-item "
            }
          >
            <span>
              <LocalOfferIcon />
            </span>
            <p>Promotions</p>
          </div>
        </div>
        <div className="AllMails-scroll">
          {FinalFilteredMails?.map((curr, index) => {
            return <SingleMail key={curr?.id} index={index} curr={curr} />;
          })}
        </div>
      </div>
    </>
  );
};
