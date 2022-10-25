import React from "react";
import "../mailList/mailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button  className="mailInputContainerBtn">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
