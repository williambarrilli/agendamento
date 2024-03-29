import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./auth";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/home";
import MyArea from "./pages/my-area";
import Login from "./pages/login";
import Agenda from "./pages/agenda";
import HomeShop from "./pages/home-shop";

import moment from "moment";
import Header from "./components/header";
import iconMR from "./assets/images/iconMR.png";
import MyHours from "pages/my-hours";
moment.locale("pt-br");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Router>
      <Header logoImage={iconMR} />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={HomeShop} path="/:loja" />
        <Route Component={Login} path="/login" />
        <Route
          element={
            <>
              <RequireAuth>
                <MyArea />
              </RequireAuth>
            </>
          }
          path="/minha-area"
        />
        <Route
          element={
            <>
              <RequireAuth>
                <MyHours />
              </RequireAuth>
            </>
          }
          path="/minha-area/meus-horarios"
        />
        <Route Component={Agenda} path="/agendar" />
      </Routes>
    </Router>
  </>
);
