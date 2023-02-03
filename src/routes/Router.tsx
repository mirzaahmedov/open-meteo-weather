import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
