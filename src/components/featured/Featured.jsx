import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1650882/pexels-photo-1650882.jpeg?cs=srgb&dl=pexels-steven-hylands-1650882.jpg&fm=jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1  className="featuredTitles-h1">Dublin</h1>
          <h2  className="featuredTitles-h2">123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/1475125/pexels-photo-1475125.jpeg?cs=srgb&dl=pexels-zhang-kaiyv-1475125.jpg&fm=jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1 className="featuredTitles-h1">Austin</h1>
          <h2  className="featuredTitles-h2">123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?cs=srgb&dl=pexels-pixabay-208745.jpg&fm=jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1  className="featuredTitles-h1">California</h1>
          <h2  className="featuredTitles-h2">123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
