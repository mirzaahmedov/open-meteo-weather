import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import theme from "@/themes/light";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
