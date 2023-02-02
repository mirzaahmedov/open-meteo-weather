import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: {
        main: string;
        transparent: string;
      };
      blue: {
        200: string;
        300: string;
        400: string;
        500: string;
      };
    };
  }
}
