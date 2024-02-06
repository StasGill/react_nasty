import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/logo.svg";
import locked from "../../assets/locked.svg";
import close from "../../assets/close.svg";
import avatar from "../../assets/Avatars.svg";
import "./styles.scss";
import NavItem from "./NavItem";

const SideBar = ({ isActive, setActive, data, setData }) => {
  const [isExpanded, setExpand] = useState(false);
  const barClass = classNames({
    side_bar_container: isActive,
    "side_bar_container-active": !isActive,
  });

  const otherChapter =
    data &&
    data.map((item, index) => {
      if (index === 0) return null;
      return (
        <NavItem
          name={`${++index}: ${item.name}`}
          isComplete={item.isComplete}
          url={item.url}
          setData={setData}
          data={data}
          index={index}
          item={item}
          key={index}
          onClick={() => setActive(true)}
        />
      );
    });

  return (
    <div className={barClass}>
      {!isActive && (
        <img
          src={close}
          alt="close"
          className="side_bar_close_icon"
          onClick={() => setActive(!isActive)}
        />
      )}
      {isActive ? (
        <img src={logo} alt="logo" />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <h2>Modules</h2>
      <div className="side_bar_navigation">
        <ul>
          <NavItem
            name="1: Inner Critic"
            isComplete={data[0].isComplete}
            url={data[0].url}
            setData={setData}
            data={data}
            index={0}
            item={data[0]}
            onClick={() => setActive(true)}
          />
          {isExpanded ? (
            otherChapter
          ) : (
            <li className="side_bar_item" onClick={() => setExpand(true)}>
              <div className="side_bar_item-dot">
                <img src={locked} alt="locked" />
              </div>
              + 4 more
            </li>
          )}
        </ul>
      </div>
      <div className="side_bar_links">
        <ul>
          <li className="side_bar_link">Coaching Session</li>
          <li className="side_bar_link">Diagnostics & Outcomes</li>
          <li className="side_bar_link">Profile & Settings</li>
          <li className="side_bar_link">Help</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
