import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Product from "../pages/product/container/ProductContainer";

const Routes = ({ history }) => {
  useEffect(() => {
    const historyListener = {
      current: history.listen((location, action) => window.scrollTo(0, 0)),
    };

    return () => historyListener.current();
  }, [history]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product/:code_color" component={Product} />
    </Switch>
  );
};

export default withRouter(Routes);
