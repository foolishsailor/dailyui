import styled from "styled-components";
import { motion } from "framer-motion";
import ElephantImage from "../assets/elephant.jpg";
import WWFLogo from "../assets/wwf_logo.svg";
import breakpoints from "../../../../utils/globalStyles/breakpoints";

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${ElephantImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 0%;

  @media ${breakpoints.tabletPortrait} {
    background-position: 70% 0%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InnerWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0;
  border: none;
  width: 100%;

  @media ${breakpoints.mobileLandscape} {
    flex-direction: row;
  }

  @media ${breakpoints.tabletPortrait} {
    flex-direction: column;
    width: unset;
    height: unset;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid white;
  }
`;

export const WWFLogoContainer = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 60%;
  opacity: 1;
  background-image: url(${WWFLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IntroHeader = styled(motion.h2)`
  position: relative;
  margin: 10px;
  margin-top: 10%;
  text-align: center;
  opacity: 1;
  color: #ffffff;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
`;

export const CTA = styled(motion.h5)`
  position: relative;
  text-align: center;
  margin: 10px;
  opacity: 1;
  color: #ffffff;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
`;

export const SignUpForm = styled(motion.form)`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  bottom: 0px;
  width: 100%;
  max-width: 350px;
  padding: 20px 20px;
  border-radius: 20px;
  opacity: 1;
`;

export const Button = styled.button`
  border: none;
  font-size: 1.4em;
  padding: 10px 20px;
  margin: 10px 0;
  transition: all 200ms;
`;

export const PrimaryButton = styled(Button)`
  border: solid 2px #ffffff;
  background-color: transparent;
  color: #ffffff;

  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
`;

export const TextButton = styled(Button)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
`;
