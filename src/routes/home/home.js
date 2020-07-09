import React from "react";
import { Defaults } from "../../utils/globalStyles";
import * as Styles from "./home_styles";

const Home = () => {
  return (
    <>
      <Defaults />
      <Styles.Wrapper>
        <Styles.BackgroundText>#DailyUI</Styles.BackgroundText>
        <Styles.LargeText>#DailyUI</Styles.LargeText>
        <Styles.InnerWrapper>
          <Styles.MainContent>
            <p>Another compendium of the #DailyUI projects. </p>
            <p>
              I'm not a designer so I put these together to help refine my
              design skills and to develop a toolbox of efficient and repeatable
              solutions to the same problems that appear again and again in
              design.
            </p>
          </Styles.MainContent>
        </Styles.InnerWrapper>
      </Styles.Wrapper>
    </>
  );
};

export default Home;
