import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.scss";

import Navbar from "./navbar/Navbar";
import Home from "../pages/home/Home";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}