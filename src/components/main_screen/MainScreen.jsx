import React from "react";
import avatar from "../../assets/Avatars.svg";
import burger from "../../assets/burger.svg";
import logo from "../../assets/logo.svg";
import shevron_rigth from "../../assets/shevron_rigth.svg";
import shevron_left from "../../assets/shevron_left.svg";
import coach from "../../assets/coach.png";
import "./styles.scss";
import MainScreenLink from "./MainScreenLink";
import PhaseItem from "./PhaseItem";
import { Link, useLocation } from "react-router-dom";

const MainScreen = ({ isActive, setActive, data, setData }) => {
  let { pathname } = useLocation();
  const topic = data.find((item) => item.url === pathname);

  return (
    <div className="main_screen_container">
      <div className="main_screen_headers">
        {isActive && (
          <img
            src={logo}
            alt="logo"
            className="main_screen_headers_icon-logo"
          />
        )}
        <img
          src={avatar}
          alt="avatar"
          className="main_screen_headers_icon-profile"
        />
        <img
          src={burger}
          alt="burger"
          className="main_screen_headers_icon-burger"
          onClick={() => setActive(!isActive)}
        />
      </div>
      <div className="main_screen_content">
        <div className="main_screen_content-container">
          {topic.index !== 0 && (
            <Link
              to={data[topic.index - 1].url}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="main_screen_content-shevron">
                <img
                  src={shevron_left}
                  alt="shevron_left"
                  className="main_screen_headers_icon-profile"
                />
              </div>
            </Link>
          )}
          <h1 className="main_screen_header">
            {topic.phase}
            {topic.name}
          </h1>
          {topic.index < 4 && (
            <Link
              to={data[topic.index + 1].url}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="main_screen_content-shevron">
                <img
                  src={shevron_rigth}
                  alt="shevron_rigth"
                  className="main_screen_headers_icon-profile"
                />
              </div>
            </Link>
          )}
        </div>
        {data.map((item, index) => (
          <PhaseItem {...item} data={data} setData={setData} key={index} />
        ))}
        <h2 className="main_screen_title">More Resources</h2>
        <div className="main_screen_link_container">
          <MainScreenLink
            text="Brené Brown on Empathy"
            time="RSA on YouTube (2:53)"
          />
          <MainScreenLink
            text="Leaders Practice Empathy"
            time="Simon Sinek on YouTube (1:14)"
          />
          <MainScreenLink
            text="9 Reasons Why Teams Love Empathetic Managers"
            time="Entrepreneur"
          />
          <MainScreenLink
            text="What's Empathy Got to Do With It?"
            time="MindTools"
          />
        </div>
        <div className="main_screen-mobile">
          <h2 className="main_screen_title">My Coach</h2>
          <div className="main_screen_coach">
            <img src={coach} alt="coach" className="" />
            <h2 className="main_screen_title">Jeanne Smith</h2>
            <span className="main_screen_link_time">CPCC, PCC Certified</span>
            <p className="main_screen_link_text">
              Jeanne believes that how you feel at work is how you will do at
              work. Having spent a number of years working with Marcus
              Buckingham -- a global thought leader on Strengths -- and steeped
              in Positive Intelligence and Positive Psychology, Jeanne has a
              studied appreciation of increasing an individual’s potential when
              you begin with positivity. Jeanne has coached executives in a
              wide-variety of industries, and brings a global experience in
              leadership development, executive presence, team systems coaching,
              training, facilitating, speaking engagements, contributing author
              to Forbes, leading executive career retreats, and coaching leaders
              at all levels within an organization.
            </p>
            <p className="main_screen_coach-btn">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
