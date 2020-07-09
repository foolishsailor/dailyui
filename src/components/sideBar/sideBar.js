import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import projectsComplete from "../../utils/projectsComplete";

const StyledNav = styled.nav`
  font-family: "Roboto Mono";
  position: fixed;
  left: -250px;
  height: 100vh;
  width: 250px;
  padding: 30px;
  text-align: center;
  color: white;
  background-color: #1a5e63;
  background: linear-gradient(180deg, #028090, #1a5e63);
  overflow-y: auto;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(250px)" : "translateX(0px)"};
  transition: all 200ms ease-in-out;
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
  margin: 3em 0 1em 0;
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

const SideBar = ({ isVisible, onClick }) => {
  return (
    <StyledNav onClick={onClick} isVisible={isVisible}>
      <StyledSpan>Daily UI Challenge</StyledSpan>
      {NavLinks}
    </StyledNav>
  );
};

export default SideBar;
