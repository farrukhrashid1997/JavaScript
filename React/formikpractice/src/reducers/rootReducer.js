import { combineReducers } from "redux";
import user from "./userReducer";
import accounts from "./accountsReducer";

export default combineReducers({
  user,
  accounts,
});
