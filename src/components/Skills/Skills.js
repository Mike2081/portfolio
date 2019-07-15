import React from "react";
import styled from "styled-components";
import { skillsList } from "./skillsList";

const Container = styled.div`
  background-color: rgb(249, 249, 249);
  height: auto;
  width: 80%;
`;
const Header = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: rgb(80, 80, 80);
  font-size: 3em;
  margin: 2% 0% 0% 0%;
`;
const SkillsContainer = styled.div`
  background-color: rgb(249, 249, 249);
  margin: 5% 0% 0% 0%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
  @media (max-width: 791px) {
    height: 34vh;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 960px) {
    width: 80px;
  }
  @media (max-width: 414px) {
    width: 60px;
  }
`;

const Logo = styled.img`
  height: 14vh;
  width: 8vw;
  object-fit: contain;
  object-position: center;
`;

const SkillTitle = styled.span`
  height: 4vh;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  color: #505050;
  display: flex;
  justify-content: space-evenly;
`;

const Skills = () => {
  return (
    <Container>
      <Header>Skills</Header>
      <SkillsContainer>
        {skillsList.map(({ title, img }) => (
          <Skill id={title}>
            <Logo src={img} />
            <SkillTitle>{title}</SkillTitle>
          </Skill>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
