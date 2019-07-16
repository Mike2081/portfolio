import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  width: 80%;
  padding: 4rem 0rem 0rem 4rem;
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
    <Container>
      <Container1>
        <Span>hello</Span>
      </Container1>
      <Container2 />
    </Container>
  );
};

export default Modal;
