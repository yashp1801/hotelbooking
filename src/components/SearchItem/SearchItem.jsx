import React from "react";
import "../SearchItem/searchItem.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Hotel from "../../pages/hotel/Hotel"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg"
        alt=""
      />
      <div className="siContent">
        <div className="siContent-div1">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siSpan">500m from center</span>
          <h2 className="sih2">Free Airport taxi</h2>
          <span className="siSpan">Studio Apartment with  Air conditioning</span>
          <h3 className="sih3">Free Cancellation</h3>
        </div>
        <div className="siContent-div2">
          <div className="siContentSubDiv1">
            <p>Excellent</p>
            <span>8.9</span>
          </div>
          <div className="suContentSubdiv2"> 
          <h3>$145</h3>
          <span>includes taxes and fees </span>
          <Link to={"/hotels/featured"} className="subContentBtn">View Deal <IoIosArrowForward className="subContentBtnIcon"  /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
