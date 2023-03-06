import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import GlobalStyles from "@/styled/GlobalStyles";
import ThemeProvider from "@/themes/ThemeProvider";
import ReactQueryProvider from "@/lib/react-query";

import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);
