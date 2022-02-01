import React from "react";
import "./ViewMail.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ViewMail = () => {
  const mails = useSelector((state) => state.DataReducer);
  const { id } = useParams();
  let navigate = useNavigate();
  const singlemail = mails.filter((cur) => cur.id === Number(id));

  console.log("view", singlemail);

  return (
    <>
      <div className="view-mail">
        <div className="view-mail-header">
          <div className="view-mail-header-icons">
            <ArrowBackIcon onClick={() => navigate(-1)} />
          </div>
          <div className="view-mail-header-icons">
            <DeleteIcon />
          </div>
          <div className="view-mail-header-icons">
            <MarkEmailReadIcon />
          </div>
          <div className="view-mail-header-icons">
            <AccessTimeFilledIcon />
          </div>
          <div className="view-mail-header-icons">
            <StarBorderIcon />
          </div>
        </div>
        <div className="view-mail-title">{singlemail[0].title}</div>
        <div className="view-mail-discription">{singlemail[0].discription}</div>
      </div>
    </>
  );
};
