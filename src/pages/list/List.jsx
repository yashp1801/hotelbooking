import React, { useState } from "react";
import "../list/list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
import SearchBar from "../../components/SearchBar/SearchBar";


const List = () => {
  const location = useLocation();

  const [options, setOptions] = useState(location.state.options);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label> Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="lsItemInput"
              />
            </div>
           

            <h2 className="lsSearchOptionsTitle">Options</h2>
            <div className="lsOptions">
              <label>Min price(per night)</label>
              <input type="text" className="lsOptionsInput" />
            </div>
            <div className="lsOptions">
              <label>Max price(per night)</label>
              <input type="text" className="lsOptionsInput" />
            </div>
            <div className="lsOptions">
              <label>Adult</label>
              <input
                type="text"
                min={1}
                placeholder={options.adult}
                className="lsOptionsInput"
              />
            </div>
            <div className="lsOptions">
              <label>Children</label>
              <input
                type="text"
                placeholder={options.children}
                className="lsOptionsInput"
              />
            </div>
            <div className="lsOptions">
              <label>Room</label>
              <input
                type="text"
                min={1}
                placeholder={options.room}
                className="lsOptionsInput"
              />
            </div>
            <div className="lsButton">
              <button className="lsBtn"> Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
