import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
