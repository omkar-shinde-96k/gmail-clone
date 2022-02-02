import React from "react";
import SingleMail from "../../Components/SingleMail/SingleMail";
import { useSelector } from "react-redux";
export const Allmails = () => {
  const Mails = useSelector((state) => state.DataReducer);
  return (
    <div className="starred" style={{ width: "83%" }}>
      {Mails.map((curr, index) => {
        return <SingleMail key={curr.id} curr={curr} />;
      })}
    </div>
  );
};
