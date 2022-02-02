import React from "react";
import SingleMail from "../../Components/SingleMail/SingleMail";
import { useSelector } from "react-redux";
export const Archived = () => {
  const Mails = useSelector((state) => state.DataReducer);
  return (
    <div className="archived" style={{ width: "83%" }}>
      {Mails.map((curr, index) => {
        if (curr.archive === true) {
          return <SingleMail key={curr.id} curr={curr} />;
        }
      })}
    </div>
  );
};
