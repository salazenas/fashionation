import { combineReducers } from "redux";

import catalogReducer from "./catalog";

const appReducers = combineReducers({
  catalog: catalogReducer
});

export default appReducers;
