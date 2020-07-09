import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { defaultTheme } from "./defaultTheme";

export const BaseStyle = createGlobalStyle`
${normalize}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

`;

export const Defaults = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) =>
      theme ? theme.primaryFont : defaultTheme.defaultFont};
    font-size: 16px;
    background-color: #1a5e63;
    color: ${({ theme }) =>
      theme ? theme.defaultColor : defaultTheme.defaultColor};
  }

  h1{
    font-size:${({ theme }) =>
      theme && theme.h1_fontSize
        ? theme.h1_fontSize
        : defaultTheme.h1_fontSize};
  }

  h2{
    font-size:${({ theme }) =>
      theme && theme.h2_fontSize
        ? theme.h2_fontSize
        : defaultTheme.h2_fontSize};
  }

  h3{
    font-size:${({ theme }) =>
      theme && theme.h3_fontSize
        ? theme.h3_fontSize
        : defaultTheme.h3_fontSize};
  }
  h4{
    font-size:${({ theme }) =>
      theme && theme.h4_fontSize
        ? theme.h4_fontSize
        : defaultTheme.h4_fontSize};
  }
  h5{
    font-size:${({ theme }) =>
      theme && theme.h5_fontSize
        ? theme.h5_fontSize
        : defaultTheme.h5_fontSize};
  }

  p{
    font-size:${({ theme }) =>
      theme && theme.p_fontSize ? theme.p_fontSize : defaultTheme.p_fontSize};
  }

  li {
    padding-left: 0;
    list-style-type: none;
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  `;
