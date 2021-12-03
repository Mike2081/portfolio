import React, { useRef } from "react";
import useOnClickOutside from "./useOnClickOutside";

const ContactModal = ({ onClose }) => {
  const node = useRef();

  useOnClickOutside(node, onClose);
  return (
    <div className="on6" ref={node}>
      <div className="profileSec">
        <button className="profileSec__offClick6" onClick={onClose}>
          X
        </button>
        <img
          className="profileSec__face"
          src={require("../../Images/part1.gif")}
        />
      </div>
      <div className="contactSec">
        <span className="contactSec__message">
          You can reach me at any of my socials below
        </span>
        <div>
          <img
            className="contactSec__eLogo"
            src={require("../../Images/email.png")}
          />
          <span className="contactSec__email">michaeldoho@hotmail.com</span>
        </div>
        <div className="sButtons">
          <a href="https://github.com/Mike2081" target="_blank">
            <img
              className="contactSec__sLogo"
              src={require("../../Images/git.png")}
            />
          </a>
          <a href="https://www.linkedin.com/in/michaeldoho/" target="_blank">
            <img
              className="contactSec__sLogo"
              src={require("../../Images/linkedin.png")}
            />
          </a>
          <a href="https://www.instagram.com/doh0/" target="_blank">
            <img
              className="contactSec__sLogo"
              src={require("../../Images/ig.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
