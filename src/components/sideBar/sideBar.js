import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import projectsComplete from "../../utils/projectsComplete";
import breakpoints from "../../utils/globalStyles/breakpoints";

const StyledNav = styled.nav`
  font-family: "Roboto Mono";
  position: absolute;
  height: 100vh;
  width: 250px;
  padding: 10px;
  text-align: center;
  background-color: #1a5e63;
  background: linear-gradient(180deg, #028090, #1a5e63);
  color: white;
`;

const StyledLi = styled.li`
  display: block;
  padding: 10px;
  &.active {
    background-color: white;
    color: #1a5e63;
  }
`;

const StyledSpan = styled.span`
  display: block;
  font-size: 1.6em;
  margin: 2em auto;
`;

const NavLinks = projectsComplete.map((item, i) => {
  return (
    <StyledLi
      as={NavLink}
      key={i}
      exact
      to={`/dailyUI/${item}`}
    >{`DailyUI #${item}`}</StyledLi>
  );
});

const SideBar = ({ isVisible }) => {
  return (
    <StyledNav>
      <StyledSpan>Daily UI Challenge</StyledSpan>
      {NavLinks}
    </StyledNav>
  );
};

export default SideBar;
