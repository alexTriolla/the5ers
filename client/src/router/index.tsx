import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import routesConfig from "./routesConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routesConfig,
  },
]);

export default router;
