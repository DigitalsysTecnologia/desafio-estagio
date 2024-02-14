import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Catalog from "./Pages/Catalog";
import Herois from "./Pages/Herois";
import Missao from "./Pages/Missao";
import Historia from "./Pages/Historia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/catalog",
    element: <Catalog></Catalog>,
  },
  {
    path: "/herois",
    element: <Herois></Herois>,
  },
  {
    path: "/missao",
    element: <Missao></Missao>
  },
  {
    path: "/historia",
    element: <Historia></Historia>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
