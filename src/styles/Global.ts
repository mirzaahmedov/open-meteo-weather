import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *::before,
  *,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
