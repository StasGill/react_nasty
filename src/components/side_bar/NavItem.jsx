import React from "react";
import elipse from "../../assets/ellipse.svg";
import elipse_grey from "../../assets/ellipse_grey.svg";
import locked from "../../assets/locked.svg";
import { Link, useMatch } from "react-router-dom";

const NavItem = ({
  url,
  phase,
  name,
  date,
  isComplete,
  setData,
  data,
  index,
  item,
  onClick,
}) => {
  const isRouteMatch = useMatch(url);

  const handleClick = () => {
    const updatedItems = data.map((link, i) => {
      if (link.url === item.url) {
        link.isComplete = true;
        return link;
      }
      return link;
    });

    setData(updatedItems);
  };

  return (
    <li
      className={`side_bar_item ${!!isRouteMatch && "active"}`}
      onClick={handleClick}
    >
      <Link to={url} style={{ color: "inherit", textDecoration: "inherit" }}>
        <div
          className={`side_bar_item ${!!isRouteMatch && "active"}`}
          onClick={onClick}
        >
          <div className="side_bar_item-dot">
            {isComplete ? (
              isRouteMatch ? (
                <img src={elipse} alt="elipse" />
              ) : (
                <img src={elipse_grey} alt="elipse_grey" />
              )
            ) : (
              <img src={locked} alt="locked" />
            )}
          </div>
          {name}
        </div>
        <div className="side_bar_item-divider">
          <div className="side_bar_item-divider--vertical"></div>
          <div className="side_bar_item-divider--horizontal"></div>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
