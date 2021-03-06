import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "./hamburger";
import SideBar from "./sideBar";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const StyledMain = styled.main`
  position: relative;
  background-color: #091f20;
  width: 100%;
  height: 100%;
`;

const Main = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    console.log("trigger");
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <Hamburger isVisible={isVisible} onClick={handleClick} />
      <StyledMain>{children}</StyledMain>
      <SideBar onClick={handleClick} isVisible={isVisible} />
    </Wrapper>
  );
};

export default Main;
