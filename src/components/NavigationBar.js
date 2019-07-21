import React from "react";

const NavigationBar = ({ about, home, projects }) => {
  return (
    <div>
      <div className={""}>
        <div className="profileSec">
          <button className="profileSec__offClick6" onClick={this.offClick6}>
            X
          </button>
          <img
            className="profileSec__face"
            src={require("../Images/part1.gif")}
          />
        </div>
        <div className="contactSec">
          <span className="contactSec__message">
            You can reach me at any of my socials below
          </span>
          <div>
            <img
              className="contactSec__eLogo"
              src={require("../Images/email.png")}
            />
            <span className="contactSec__email">michaeldoho@hotmail.com</span>
          </div>
          <div className="sButtons">
            <a href="https://github.com/Mike2081" target="_blank">
              <img
                className="contactSec__sLogo"
                src={require("../Images/git.png")}
              />
            </a>
            <a href="https://www.linkedin.com/in/michaeldoho/" target="_blank">
              <img
                className="contactSec__sLogo"
                src={require("../Images/linkedin.png")}
              />
            </a>
            <a href="https://www.instagram.com/doh0/" target="_blank">
              <img
                className="contactSec__sLogo"
                src={require("../Images/ig.png")}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="App__nav">
        <div className="App__nav__box">
          <button
            className="App__nav__box__switch"
            onClick={() =>
              scrollToComponent(home, {
                offset: 0,
                align: "top",
                duration: 1500
              })
            }>
            Home
          </button>
          <button
            className="App__nav__box__switch"
            onClick={() =>
              scrollToComponent(about, {
                offset: 0,
                align: "top",
                duration: 1500
              })
            }>
            About
          </button>
          <button
            className="App__nav__box__switch"
            onClick={() =>
              scrollToComponent(projects, {
                offset: 0,
                align: "top",
                duration: 1500
              })
            }>
            Projects
          </button>
          <button className="App__nav__box__switch" onClick={this.onClick6}>
            Contact
          </button>
        </div>
        <div className="App__nav__line" />
      </div>
    </div>
  );
};

export default NavigationBar;
