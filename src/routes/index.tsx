import type { RouteObject } from "react-router-dom";
import Main from "@/pages/Main/Main";
import Login from "@/pages/Login";
import Statistics from "@/pages/Statistics/Statistics";

const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/statistics",
      element: <Statistics />,
    },
  ];
};

export default routes;
