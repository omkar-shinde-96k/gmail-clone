import React from "react";
import SingleMail from "../../Components/SingleMail/SingleMail";
import { useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";

export const SearchMail = () => {
  const Mails = useSelector((state) => state.DataReducer);
  const { searchKey } = useParams();
    console.log("search " , searchKey);
  return (
    <div className="starred" style={{ width: "83%" }}>
      {Mails.map((curr, index) => {
        if (searchKey === "") {
          return <SingleMail key={curr.id} index={index} curr={curr} />;
        } else if (curr.from.name.toLowerCase().includes(searchKey)) {
          return <SingleMail key={curr.id} curr={curr} />; 
        }
      })}
    </div>
  );
};
