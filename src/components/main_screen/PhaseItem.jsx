import React from "react";
import cloud from "../../assets/cloud.svg";
import apple from "../../assets/apple.svg";
import link from "../../assets/link.svg";
import locked_2 from "../../assets/locked_2.svg";
import complete from "../../assets/Complete.svg";
import plus from "../../assets/Plus.svg";
import { Link, useMatch } from "react-router-dom";

const PhaseItem = ({ url, phase, name, date, isComplete, data, setData }) => {
  const isRouteMatch = useMatch(url);
  const handleClick = () => {
    const updatedItems = data.map((link, i) => {
      if (link.url === url) {
        link.isComplete = true;
        return link;
      }
      return link;
    });

    setData(updatedItems);
  };
  return (
    <>
      {!!isRouteMatch ? (
        <div className="main_screen_expanded_module">
          <div className="main_screen_expanded_module-topic">
            <p>{`${phase} ${name}`}</p>
            <p>{date}</p>
          </div>
          <div className="main_screen_expanded_module-content">
            <div className="main_screen_expanded_module-item">
              <div className="main_screen_expanded_module-round">
                <img src={cloud} alt="cloud" />
              </div>
              <p className="main_screen_expanded_module-item-title">
                Reflection
              </p>
              <div className="main_screen_expanded_module-item-btn active_btn-container">
                <p className="main_screen_expanded_module-item-btn active_btn">
                  Start
                </p>
              </div>
            </div>
            <div className="main_screen_expanded_module-item">
              <div className="main_screen_expanded_module-round">
                <img src={apple} alt="apple" />
              </div>
              <p className="main_screen_expanded_module-item-title"> Lesson</p>
              <p className="main_screen_expanded_module-item-btn">Locked</p>
            </div>
            <div className="main_screen_expanded_module-item">
              <div className="main_screen_expanded_module-round">
                <img src={link} alt="link" />
              </div>
              <p className="main_screen_expanded_module-item-title">Practice</p>
              <p className="main_screen_expanded_module-item-btn"> Locked</p>
            </div>
          </div>
        </div>
      ) : (
        <Link to={url} style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="main_screen_blocked_module" onClick={handleClick}>
            <div className="main_screen_blocked_module-title">
              {isComplete ? (
                <img
                  src={complete}
                  alt="complete"
                  className="main_screen_blocked_module-icon"
                />
              ) : (
                <img
                  src={locked_2}
                  alt="locked_2"
                  className="main_screen_blocked_module-icon"
                />
              )}
              {phase} {name}
            </div>
            <p className="main_screen_blocked_module-data">
              {isComplete ? (
                <span className="main_screen_blocked_module-span">
                  <img
                    src={plus}
                    alt="plus"
                    className="main_screen_blocked_module-icon"
                  />
                  Track Practice
                </span>
              ) : (
                date
              )}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default PhaseItem;
