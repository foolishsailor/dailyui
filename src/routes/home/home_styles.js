import styled from "styled-components";
import breakpoints from "../../utils/globalStyles/breakpoints";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0%;
  right: 0%;
  height: 100%;
  width: 70%;

  overflow: auto;

  @media ${breakpoints.tabletPortrait} {
    height: 60%;
    width: 50%;
  }
`;

export const MainContent = styled.div`
  align-self: flex-end;
  width: 100%;
  max-height: 100%;
  padding: 10px 30px;
  overflow: auto;
`;

export const LargeText = styled.div`
  position: absolute;
  top: 0%;
  right: -40%;
  font-size: 13em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  transform: rotate(-90deg) translateX(-10%);
  text-shadow: 10px 10px rgba(0, 0, 0, 0.1), 20px 270px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.mobileLandscape} {
    right: 0%;
    transform: rotate(-90deg) translateX(-10%);
    text-shadow: 10px 10px rgba(0, 0, 0, 0.1), 20px 270px rgba(0, 0, 0, 0.1);
  }

  @media ${breakpoints.tabletPortrait} {
    right: 10%;
    transform: rotate(-90deg) translateX(-30%);
    text-shadow: 10px 10px rgba(0, 0, 0, 0.1), 20px 470px rgba(0, 0, 0, 0.1);
  }

  @media ${breakpoints.tabletLandscape} {
    right: 30%;
    transform: rotate(-90deg) translateX(-30%);
    text-shadow: 10px 10px rgba(0, 0, 0, 0.1), 20px 470px rgba(0, 0, 0, 0.1);
  }
`;

export const BackgroundText = styled.div`
  position: absolute;
  top: 0%;
  left: 0;

  font-size: 40em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.275);
  transform: rotate(-90deg) translateY(-25%);
`;
