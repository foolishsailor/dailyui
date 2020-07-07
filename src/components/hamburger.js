import React from "react";
import hamburger from "../assets/hamburger.svg";
import styled from "styled-components";
import breakpoints from "../utils/globalStyles/breakpoints";

const StyledDiv = styled.div`
  position: absolute;
  display: none;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 2;

  @media ${breakpoints.tabletLandscape} {
    display: block;
  }
`;

const Hamburger = ({ onClick }) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={hamburger} alt='Menu' />
    </StyledDiv>
  );
};

export default Hamburger;
