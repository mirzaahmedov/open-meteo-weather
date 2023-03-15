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
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.white.main};
    background-color: ${({ theme }) => theme.colors.blue[500]};
  }
  .tick-label > tspan {
    font-size: 0.875rem !important;
    font-family: 'Inter', sans-serif !important;
    font-weight: normal !important;
  }
  .tick-label > tspan:last-child {
    font-size: 0.75rem !important;
    fill: ${({ theme }) => theme.colors.white.transparent} !important;
  }
  .swiper-slide {
    width: 148px;
    margin-bottom: 20px;
  }
  .swiper {
    margin-left: 0;
  }
`;

export default GlobalStyles;
