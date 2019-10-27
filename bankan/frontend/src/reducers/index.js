import { combineReducers } from "redux";
import leads from "./leadsReducer";
import errors from "./errorsReducer";
import messages from "./messagesReducer";
// import auth from "./authReducer";

export default combineReducers({
  leads,
  errors,
  messages
  // auth
});
