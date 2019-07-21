import React, { Component } from "react";
import "../styles/App.scss";
import scrollToComponent from "react-scroll-to-component";
import Skills from "../components/Skills";
import ToggleButton from "../components/ToggleButton";
import ModalList from "../components/Modal/ModalList";
import Modal from "../components/Modal/Typr/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      typr: "off1",
      stock: "off2",
      brain: "off3",
      band: "off4",
      chefi: "off5",
      contact: "off6"
    };
  }

  onClick1 = e => {
    this.setState({ typr: "on1" });
  };
  offClick1 = e => {
    this.setState({ typr: "off1" });
  };
  onClick2 = e => {
    this.setState({ stock: "on2" });
  };
  offClick2 = e => {
    this.setState({ stock: "off2" });
  };
  onClick3 = e => {
    this.setState({ brain: "on3" });
  };
  offClick3 = e => {
    this.setState({ brain: "off3" });
  };
  onClick4 = e => {
    this.setState({ band: "on4" });
  };
  offClick4 = e => {
    this.setState({ band: "off4" });
  };
  onClick5 = e => {
    this.setState({ chefi: "on5" });
  };
  offClick5 = e => {
    this.setState({ chefi: "off5" });
  };
  onClick6 = e => {
    this.setState({ contact: "on6" });
  };
  offClick6 = e => {
    this.setState({ contact: "off6" });
  };
  render() {
    return (
      <div
        className="App"
        ref={section => {
          this.Home = section;
        }}>
        <div className="container">
          Hi, I'm
          <div className="flip">
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
            <div>
              <div>Michael DoHo.</div>
            </div>
          </div>
          A Front End Developer.
        </div>
        <div className="App__background" />
        <div
          className="App__about"
          ref={section => {
            this.About = section;
          }}>
          <div className="App__about__square">
            <div className="App__about__square__holder">
              <img
                className="App__about__square__holder__face"
                src={require("../Images/part1.gif")}
              />
              <h1 className="App__about__square__holder__description">
                Hi! I'm a Front-End Developer based in Toronto. I'm a recent
                graduate of BrainStation's Full Web Development program. Before
                the program, I was a carpenter who knew nothing about code, so
                I'm not afraid to adapt and rise up to the challenge of learning
                a new skill. I'm always trying to expand my programming
                knowledge and critical thinking by working with others. A highly
                motivated programmer with a passion for bringing ideas to life
                with code.
              </h1>
              <h2 className="App__about__square__holder__award">
                -Received BrainStation Merit Scholarship
              </h2>
            </div>
            <Skills />
          </div>
        </div>

        <div
          className="App__spacer"
          ref={section => {
            this.Projects = section;
          }}
        />
        <div className="App__projects">
          <div className="App__projects__header">Projects</div>
          <div className="App__projects__case">
            {ModalList.map(
              ({ buttonImage, modalvideo, modalTitle, modalDescription }) => (
                <ToggleButton buttonImage={buttonImage}>
                  {hide => (
                    <Modal
                      hide={hide}
                      modalvideo={modalvideo}
                      modalTitle={modalTitle}
                      modalDescription={modalDescription}
                    />
                  )}
                </ToggleButton>
              )
            )}
          </div>
          <div className={this.state.contact}>
            <div className="profileSec">
              <button
                className="profileSec__offClick6"
                onClick={this.offClick6}>
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
                <span className="contactSec__email">
                  michaeldoho@hotmail.com
                </span>
              </div>
              <div className="sButtons">
                <a href="https://github.com/Mike2081" target="_blank">
                  <img
                    className="contactSec__sLogo"
                    src={require("../Images/git.png")}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/michaeldoho/"
                  target="_blank">
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
        </div>
        <div className="App__nav">
          <div className="App__nav__box">
            <button
              className="App__nav__box__switch"
              onClick={() =>
                scrollToComponent(this.Home, {
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
                scrollToComponent(this.About, {
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
                scrollToComponent(this.Projects, {
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
  }
}

export default App;
