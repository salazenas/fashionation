import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducers from "../reducers";

export default createStore(appReducers, applyMiddleware(thunk));
