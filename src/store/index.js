import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducers from "../reducers";

const middlewares = [thunk];

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default createStore(
  appReducers,
  composeEnhancer(applyMiddleware(...middlewares))
);
