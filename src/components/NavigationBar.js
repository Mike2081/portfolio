import React, { useEffect } from "react";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import ContactModal from "../components/Modal/ContactModal";
import ToggleButton from "../components/ToggleButton";

const Header = styled.nav`
  height: 8vh;
  width: 100vw;
  background-color: aqua;
  position: fixed;
  margin: -8px 0px 0px -8px;
  z-index: 2000000000;
`;

const NavigationBar = ({ about, home, projects }) => {
  useEffect(() => {}, [about, home, projects]);
  return (
    <Header>
      <div className="App__nav__box">
        <button
          className="App__nav__box__switch"
          onClick={() =>
            scrollToComponent(home.current, {
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
            scrollToComponent(about.current, {
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
            scrollToComponent(projects.current, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }>
          Projects
        </button>
        <ToggleButton
          button={show => (
            <button className="App__nav__box__switch" onClick={show}>
              Contact
            </button>
          )}>
          {hide => <ContactModal onClose={hide} />}
        </ToggleButton>
      </div>
      <div className="App__nav__line" />
    </Header>
  );
};

export default NavigationBar;
