import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`${input}`);
    }
  };

  const ChangeHandler = (e) => {
    let setinp = e.target.value.toLowerCase();
    setInput(setinp);
  };

  return (
    <>
      <div className="nav-search">
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search Mail"
            className="search-input"
            onChange={ChangeHandler}
            onKeyDown={handleKeyDown}
          ></input>
          <div className="search-filter">
            <TuneIcon />
          </div>
        </div>
      </div>
    </>
  );
};
