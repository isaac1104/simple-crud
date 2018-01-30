import { combineReducers } from "redux";
import postsDataReducer from "./posts_data_reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: postsDataReducer,
  form: formReducer
});

export default rootReducer;
