import { combineReducers } from "redux";
import home from "./home";
import detail from "./detail";
import createBlog from "./createBlog";

const reducer = combineReducers({
  home,
  detail,
  createBlog,
});

export default reducer;
