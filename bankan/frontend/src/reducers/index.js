import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import errors from "./errorsReducer";
import messages from "./messagesReducer";
import auth from "./authReducer";

export default combineReducers({
  postsReducer,
  errors,
  messages,
  auth
});
