import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  title,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">(</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">)</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{title.skills}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{title.experience}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{title.opensource}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{title.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{title.blogs}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{title.talks}</a>
            </li>
          )}
          <li>
            <a href="#contact">{title.contact}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
