import styled from "styled-components";

const SubHeader = styled.h2`
  font-family: "Open Sans", sans-serif;
  width: max-content;
  color: #505050;
  font-size: 3em;
  height: 10vh;
  border-bottom: 5px solid #505050;
  margin: 0 auto;

  @media (max-width: 792px) {
    margin: 0em 1.2em;
  }
`;

export default SubHeader;
