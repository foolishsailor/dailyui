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
  padding: 30px 0;
  text-align: center;
  color: white;
  background-color: #1a5e63;
  background: linear-gradient(180deg, #028090, #1a5e63);
  box-shadow: 2px 0 2px rgba(0, 0, 0, 0.1), 4px 0 4px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(250px)" : "translateX(0px)"};
  transition: all 200ms ease-in-out;
`;

const StyledLi = styled.li`
  display: block;
  text-align: left;
  padding: 10px 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

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

const StatusText = styled.div`
  font-size: 0.7em;
`;

const NavLinks = projectsComplete.map((item, i) => {
  return (
    <StyledLi as={NavLink} key={i} exact to={`/dailyUI/${item.day}`}>
      <div>{`DailyUI #${item.day}`}</div>
      <StatusText>{`Status: ${item.status}`}</StatusText>
    </StyledLi>
  );
});

const SideBar = ({ isVisible, onClick }) => {
  return (
    <StyledNav onClick={onClick} isVisible={isVisible}>
      <StyledSpan as={NavLink} exact to='/'>
        Daily UI Challenge
      </StyledSpan>
      {NavLinks}
      <p>More Coming..</p>
    </StyledNav>
  );
};

export default SideBar;
