import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import MyArea from "./pages/my-area";
import RegisterView from "./views/home/registerView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <MyArea />
  </React.StrictMode>
);
