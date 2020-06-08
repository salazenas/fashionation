import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../modules/libs/fontawesome";
import "./App.scss";

import Navbar from "./navbar/Navbar";
import Routes from "../routes/index";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}
