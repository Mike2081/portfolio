import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 71vh;
  width: 82vw;
  background: white;
  position: fixed;
  bottom: 70px;
  right: 109px;
  border: solid 3px;
  border-color: gainsboro;
  display: flex;
  box-shadow: 30px 30px 7px rgba(0, 0, 0, 0.5);
`;

// The prop children is a way of passing react components or jsx
// from another location

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <Container className="modal">{children}</Container>,
    document.getElementById("modal-root")
  );

export default Modal;
