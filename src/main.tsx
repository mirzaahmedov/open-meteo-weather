import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "@/styles/Global";
import ThemeProvider from "@/themes/Provider";
import Router from "@/routes/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
