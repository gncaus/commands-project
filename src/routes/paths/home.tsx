import { RouteObject } from "react-router-dom";
import Home from "../../pages/Home/index.tsx";

export const homeRoute: RouteObject = {
  path: "/",
  element: <Home />,
};
