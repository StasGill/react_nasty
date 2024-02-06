import React from "react";
import arrow from "../../assets/arrow.svg";
import "./styles.scss";

const MainScreenLink = ({ text, time }) => {
  return (
    <div className="main_screen_link_container">
      <div className="main_screen_link">
        <div className="main_screen_link_icon">
          <img src={arrow} alt="arrow" />
        </div>
        <span className="main_screen_link_text">{text}</span>
        <span className="main_screen_link_time">{time}</span>
      </div>
    </div>
  );
};

export default MainScreenLink;
