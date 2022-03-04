import { combineReducers } from "redux";
import home from "./home";
import detail from "./detail";

const reducer = combineReducers({
  home,
  detail,
});

export default reducer;
