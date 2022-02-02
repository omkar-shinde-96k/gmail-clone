import React from "react";
import SingleMail from "../../Components/SingleMail/SingleMail";
import { useSelector } from "react-redux";
export const Starred = () => {
  const Mails = useSelector((state) => state.DataReducer);
  return (
    <div  className="starred" style={{ width:"83%" }}>
    {Mails.map((curr, index) => {
            if (curr.star ===true) {
              return (
                  <SingleMail key={curr.id} curr={curr}  />
              );
            }
          })}
          </div>
  );
};
