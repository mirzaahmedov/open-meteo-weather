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
    font: inherit;
    margin-top: 40px;
    color: ${({ theme }) => (theme as any).colors.white.main};
    background-color: ${({ theme }) => (theme as any).colors.blue[500]};
  }
  .tick-label > tspan {
    font-size: 0.875rem !important;
    font-family: 'Inter', sans-serif !important;
    font-weight: normal !important;
  }
  .tick-label > tspan:last-child {
    font-size: 0.75rem !important;
    fill: ${({ theme }) => (theme as any).colors.white.transparent} !important;
  }
  .swiper-slide {
    width: 148px;
    margin-bottom: 20px;
    // width: auto;
    // flex-shrink: 0;
    // display: block;
    // height: 100%;
    // max-height: 100%;
  }
  .swiper {
    margin-left: 0;
  }
  // .swiper-wrapper {
  //   max-height: 100%;
  //   height: 100%;
  //   display: flex;
  // }
  // .swiper-container {
  //   width: 100%;
  //   max-width: 100%;
  //   max-height: 100vh;
  //   min-width: 0;
  //   min-height: 0;
  // }
  .loader {
    color: #ffffff;
    font-size: 45px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    transform: translateZ(0);
    animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
  }

  @keyframes mltShdSpin {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em,
      0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 
      0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, 
      -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
      -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
       -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
       -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
       -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
       -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
      0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }

  @keyframes round {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }

`;

export default GlobalStyles;
