import React from "react";
import "./Sidebar.scss";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import { SendEmail } from "../SendEmail/SendEmail";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const mails = useSelector((state) => state.DataReducer);

  const [composeToggle, setComposeToggle] = React.useState(false);

  const ToggleHandler = () => {
    setComposeToggle(!composeToggle);
  };

  return (
    <>
      <div className="sidebar">
        <div className="compose">
          <div className="compose-btn" onClick={ToggleHandler}>
            <img src="./images/plus-icon.jpg" />
            <p>Compose </p>
          </div>
        </div>

        {composeToggle ? <SendEmail ToggleHandler={ToggleHandler} /> : ""}

        <div className="sidebar-links">
          <NavLink to="" className="side-link ">
            <span>
              <EmailOutlinedIcon />
            </span>
            <p> Indox</p>
            <div className="inbox-count"> {mails.length} </div>
          </NavLink>
          <NavLink to="allmails" className="side-link">
            <span>
              <EmailOutlinedIcon />
            </span>
            <p> All Mails </p>
          </NavLink>
          <NavLink to="starred" className="side-link">
            <span>
              <StarOutlinedIcon />
            </span>
            <p> Starred </p>
          </NavLink>
          <NavLink to="trashed" className="side-link">
            <span>
              <DeleteIcon />
            </span>
            <p> Trash </p>
          </NavLink>
          <NavLink to="archived" className="side-link">
            <span>
              <DeleteIcon />
            </span>
            <p> Archive </p>
          </NavLink>

          <div className="side-link">
            <span>
              <AccessTimeFilledOutlinedIcon />
            </span>
            <p> Snoozed </p>
          </div>
          <div className="side-link">
            <span>
              <SendIcon />
            </span>
            <p> sent </p>
          </div>
          <div className="side-link">
            <span>
              <DescriptionIcon />
            </span>
            <p> Draft </p>
          </div>

          <div className="side-link">
            <span>
              <ScheduleSendIcon />
            </span>
            <p> Scheduled </p>
          </div>

          <div className="side-link">
            <span>
              <ReportGmailerrorredIcon />
            </span>
            <p> Spam </p>
          </div>

          <div className="side-link">
            <span>
              <LabelIcon />
            </span>
            <p> Categories </p>
          </div>
          <div className="side-link">
            <span>
              <LabelIcon />
            </span>
            <p> Junk </p>
          </div>
        </div>
      </div>
    </>
  );
};
