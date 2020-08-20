import { createStore, applyMiddleWare } from "redux";
import userReducer from "./user/userReducer";
import logger from "redux-logger";

const store = createStore(
  userReducer)


export default store; 