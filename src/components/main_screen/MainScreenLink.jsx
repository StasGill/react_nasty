import React, { useRef } from "react";
import arrow from "../../assets/arrow.svg";
import arrowRed from "../../assets/arrowRed.svg";
import "./styles.scss";

const MainScreenLink = ({ text, time }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="main_screen_link_container">
      <div className="main_screen_link">
        <div className="main_screen_link_icon">
          {windowSize.current[0] > 821 ? (
            <img src={arrow} alt="arrow" />
          ) : (
            <img src={arrowRed} alt="arrow" />
          )}
        </div>
        <span className="main_screen_link_text">{text}</span>
        <span className="main_screen_link_time">{time}</span>
      </div>
    </div>
  );
};

export default MainScreenLink;
