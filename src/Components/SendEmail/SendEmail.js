import React from "react";
import "./SendEmail.scss";
import CloseIcon from "@mui/icons-material/Close";
export const SendEmail = ({ ToggleHandler }) => {
  return (
    <>
      <div className="send-mail-box">
        <div className="send-mail-box-header">
          <p> New Message</p>
          <span>
            <CloseIcon onClick={ToggleHandler} />
          </span>
        </div>
        <div className="send-mail-box-inputs">
          <input type="text" placeholder="To" className="to"></input>
          <input type="text" placeholder="Title" className="title"></input>
          <input
            type="text"
            placeholder="discription"
            className="discription"
          ></input>
        </div>
        <div className="send-mail-box-button">
          <button>Send</button>
        </div>
      </div>
    </>
  );
};
