import { useState } from "react";
import "../header/header.css";
import { useNavigate } from "react-router-dom";
import {
  FaBed,
  FaCalendarDay,
  FaHotel,
  FaPlane,
  FaFortAwesome,
} from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BiTaxi } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/* Header logo list */}
        <div className="header-logo">
          <div className="header-itemlist active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="header-itemlist">
            <FaPlane />
            <span>Fights</span>
          </div>
          <div className="header-itemlist ">
            <AiFillCar />
            <span>Car</span>
          </div>
          <div className="header-itemlist ">
            <FaFortAwesome />
            <span>Attractions</span>
          </div>
          <div className="header-itemlist">
            <BiTaxi />
            <span>Airpost Taxis</span>
          </div>
        </div>

        {/* Header Content */}

        {type !== "list" && (
          <>
            <div className="header-content">
              <h1>A lifetime of discounts? It's Genius</h1>
              <p>
                Get rewarded for your travels - unlock instant savings of 10% or
                <br /> more with free Company booking account.
              </p>
              <button className="headerBtn">Sign/Register</button>
            </div>
          </>
        )}
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
