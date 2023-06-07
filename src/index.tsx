import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MyArea from "./pages/my-area";
import Login from "./pages/login";
import Agenda from "./pages/agenda";

import moment from "moment";
moment.locale("pt-br");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route Component={Home} path="/" />
        <Route Component={Home} path="/:loja" />
        <Route Component={MyArea} path="/:loja/minha-area" />
        <Route Component={Login} path="/:loja/login" />
        <Route Component={Agenda} path="/:loja/agenda" /> */}
        <Route Component={Home} path="/" />
        <Route Component={MyArea} path="/minha-area" />
        <Route Component={Login} path="/login" />
        <Route Component={Agenda} path="/agenda" />
      </Routes>
    </Router>
  </React.StrictMode>
);
