import React, { useState, useEffect } from "react";
import { Defaults } from "../../../utils/globalStyles";
import { ThemeProvider } from "styled-components";
import * as Elements from "./styles/dailyUI001_styles";
import InputGroup from "./components/inputGroup";
import daily001Theme from "./styles/dailyUI001_theme";

import useLoadFont from "../../../hooks/useLoadFont";

const itemAnimation = {
  first: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100 },
    },
  },
  second: {
    opacity: 0,
    scale: 0.5,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const itemInitial = {
  opacity: 0,
  y: 200,
};

const logoAnimation = {
  second: {
    opacity: 1,
    scale: 1.5,
    transition: {
      delay: 0.6,
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const formAnimation = {
  second: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      y: { type: "spring", stiffness: 100 },
    },
  },
};

const containerAnimation = {
  first: {
    transition: {
      staggerChildren: 1,
      delayChildren: 0.5,
    },
  },

  second: {
    backdropFilter: "blur(4px)",
    transition: {
      backdropFilter: { duration: 1, ease: "easeInOut" },
    },
  },
};

const emailTest = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const DailyUI_001 = () => {
  useLoadFont(["Economica:400,700"]);
  const [animateState, setAnimationState] = useState(null);

  useEffect(() => {
    setAnimationState("first");
  }, []);

  const animatonHandler = () => {
    console.log("TRIGGER");
    setAnimationState("second");
  };
  return (
    <ThemeProvider theme={daily001Theme}>
      <Defaults />
      <Elements.BackgroundImage></Elements.BackgroundImage>
      <Elements.Wrapper>
        <Elements.InnerWrapper
          variants={containerAnimation}
          animate={animateState}
          onAnimationComplete={animatonHandler}
        >
          <Elements.IntroContainer>
            <div>
              <Elements.IntroHeader
                initial={itemInitial}
                variants={itemAnimation}
              >
                You Can Help
              </Elements.IntroHeader>
              <Elements.CTA initial={itemInitial} variants={itemAnimation}>
                Together We Can Make a Change
              </Elements.CTA>
            </div>
            <Elements.WWFLogoContainer
              variants={logoAnimation}
              animate={animateState}
              initial={{ opacity: 0 }}
            />
          </Elements.IntroContainer>

          <Elements.SignUpForm initial={itemInitial} variants={formAnimation}>
            <InputGroup
              name='name'
              placeholder='Username'
              errorMessage='Name required'
              validation={(value) => value.length > 0}
            />
            <InputGroup
              name='email'
              placeholder='Email'
              errorMessage='Please enter a valid email address'
              validation={(value) => value.match(emailTest)}
            />
            <InputGroup
              name='password'
              placeholder='Password'
              errorMessage='Password longer than 6 characters required'
              validation={(value) => value.length > 6}
            />
            <Elements.PrimaryButton>Sign Up</Elements.PrimaryButton>
            <Elements.TextButton>Sign In</Elements.TextButton>
          </Elements.SignUpForm>
        </Elements.InnerWrapper>
      </Elements.Wrapper>
    </ThemeProvider>
  );
};

export default DailyUI_001;
