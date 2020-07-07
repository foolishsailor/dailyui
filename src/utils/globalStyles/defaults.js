import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { defaultFont } from "./typography";

export const Defaults = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${defaultFont};
    font-size: 16px;
    background-color: #1a5e63;
  }

  li {
    padding-left: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: white;
  }

  `;
