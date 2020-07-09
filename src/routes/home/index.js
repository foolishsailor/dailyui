import React from "react";
import styled from "styled-components";
import { Defaults } from "../../utils/globalStyles";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const MainContent = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 35%;
`;

const LargeText = styled.div`
  position: absolute;
  top: 0%;
  left: 0;

  font-size: 13em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(-90deg) translateX(-30%);
  text-shadow: 10px 10px rgba(0, 0, 0, 0.1), 20px 470px rgba(0, 0, 0, 0.1);
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0%;
  left: 0;

  font-size: 40em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.05);
  transform: rotate(-90deg) translateY(-25%);
`;

const Home = () => {
  return (
    <>
      <Defaults />
      <Wrapper>
        <BackgroundText>#DailyUI</BackgroundText>
        <LargeText>#DailyUI</LargeText>
        <MainContent>
          <p>Another compendium of the #DailyUI projects. </p>
          <p>
            I'm not a designer so I put these together to help refine my design
            skills and to develop a toolbox of efficient and repeatable
            solutions to the same problems that appear again and again in
            design.
          </p>
          <p>Notes:</p>
          <ul>
            <li>
              These were built in functional style with React and Styled
              Components
            </li>
            <li>All pages are fully responsive</li>
            <li>Each page has a fully custom theme including fonts</li>
          </ul>
          <p>
            Here is a nifty little hook I wrote to keep bloat down by stripping
            out fonts before loading new ones.
          </p>
        </MainContent>
      </Wrapper>
    </>
  );
};

export default Home;
