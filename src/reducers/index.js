import { combineReducers } from "redux";

import catalogReducer from "./catalog";
import appReducer from "./app";
import cartReducer from "./cart";

const appReducers = combineReducers({
  catalog: catalogReducer,
  app: appReducer,
  cart: cartReducer
});

export default appReducers;
