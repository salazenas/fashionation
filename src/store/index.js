import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import appReducers from "../reducers";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: "cart"
};

const persistedReducer = persistReducer(persistConfig, appReducers);

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
