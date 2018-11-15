import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import customerItemReducer from "./customerItemReducer";

export default combineReducers({
  item: itemReducer,
  customerItems: customerItemReducer
});
