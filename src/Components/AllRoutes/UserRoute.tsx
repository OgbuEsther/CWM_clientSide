import React from "react";
import { useRoutes } from "react-router-dom";
import Register from "../Auth/Register";
import Signin from "../Auth/Signin";
import Home from "../LandingPage/Home/Home";

const UserRoute = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return elements;
};

export default UserRoute;
