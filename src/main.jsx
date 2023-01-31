import React from "react";
import ReactDOM from "react-dom/client";
import GifApp from "./GifApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Render principal Component
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);
