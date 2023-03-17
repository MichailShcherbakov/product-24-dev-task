import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";

import "./assets/css/main.css";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
