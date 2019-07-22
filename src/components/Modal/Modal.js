import React, { useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "./useOnClickOutside";

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
  z-index: 1000000;
`;

const CloseButton = styled.button`
  cursor: pointer;
`;

const Modal = ({ hide, modalvideo, modalTitle, modalDescription }) => {
  const node = useRef();
  useOnClickOutside(node, hide);

  return (
    <Container ref={node}>
      <div>
        <div className="stockVidSection">
          <CloseButton className="stockVidSection__offClick2" onClick={hide}>
            X
          </CloseButton>
          <video
            src={modalvideo}
            className="stockVidSection__stockDemo"
            controls
            loop
          />
        </div>
        <div className="SumSection">
          <span className="SumSection__stockTitle">{modalTitle}</span>
          <span className="SumSection__stockSum">{modalDescription}</span>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
