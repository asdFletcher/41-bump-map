import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import DataReducer from "./reducer.js";

let reducers = combineReducers({
  dataStore: DataReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware()));

export default store;
