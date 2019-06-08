import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses //more object shorthand syntax
});

export default rootReducer;
