import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  padding: 15px;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  z-index: 2;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.05), 2px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 200ms;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05), 1px 1px 2px rgba(0, 0, 0, 0.1);
    transform: scale(0.95);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 13px;
  left: 13px;
  width: 24px;
  height: 24px;
  transition: all 200ms;
`;

const HamburgerImg = styled(StyledImg)`
  ${({ isVisible }) =>
    isVisible ? "transform: rotate(180deg); opacity:0" : "opacity:1"};
`;
const CloseImg = styled(StyledImg)`
  ${({ isVisible }) =>
    isVisible ? "transform: rotate(180deg); opacity:1" : "opacity:0"};
`;

const Hamburger = ({ onClick, isVisible }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <StyledDiv onClick={handleClick}>
      <HamburgerImg isVisible={isVisible} src={hamburger} alt='OpenMenu' />
      <CloseImg isVisible={isVisible} src={cross} alt='OpenMenu' />
    </StyledDiv>
  );
};

export default Hamburger;
