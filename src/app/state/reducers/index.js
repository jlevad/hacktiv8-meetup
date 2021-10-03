import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers(
  {
    member: accountReducer,
  },
);

export default reducers;
