import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// look for index.html inside ./reducers
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
