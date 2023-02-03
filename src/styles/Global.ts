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
  input,
  button,
  textarea {
    font: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
  body {
    color: ${({ theme }) => theme.colors.white.main};
    background-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export default GlobalStyles;
