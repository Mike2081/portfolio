import React from "react";
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
const Container1 = styled.div`
  height: auto;
  width: 80%;
  padding: 4rem 0rem 0rem 4rem;
  background-color: yellow;
`;
const Span = styled.span`
  color: blue;
`;
const Container2 = styled.div`
  height: auto;
  width: 80%;
  padding: 4rem 0rem 0rem 4rem;
  background-color: gray;
`;

const Modal = () => {
  return (
    <Container class="on1">
      <Container1>
        <Span>hello</Span>
      </Container1>
      <Container2 />
    </Container>
  );
};

export default Modal;
