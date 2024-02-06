import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { module_data } from "./data/data";

const router = createBrowserRouter([
  ...module_data.map((data) => ({ path: `/${data.url}`, element: <App /> })),
  { path: "*", element: <App /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
