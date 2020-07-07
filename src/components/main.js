import React, { useState } from "react";
import styled from "styled-components";
import breakpoints from "../utils/globalStyles/breakpoints";
import Hamburger from "./hamburger";
import SideBar from "./sideBar";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const StyledMain = styled.main`
  background-color: #091f20;
  width: 100%;
  height: 100%;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(250px)" : "translateX(0px)"};
  transition: all 200ms ease-in-out;
`;

const Main = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    console.log("trigger");
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <SideBar />
      <StyledMain isVisible={isVisible}>
        <Hamburger onClick={handleClick} />
        {children}
      </StyledMain>
    </Wrapper>
  );
};

export default Main;
