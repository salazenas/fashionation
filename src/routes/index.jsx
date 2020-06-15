import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import Product from "../pages/product/container/ProductContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product/:code_color" component={Product} />
    </Switch>
  );
};

export default Routes;
