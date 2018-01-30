import axios from "axios";
import { FETCH_POST, CREATE_POST } from "./types";

export const fetchPosts = () => async dispatch => {
  const request = await axios.get(`http://reduxblog.herokuapp.com/api/posts?key=PAPERCLIP1234`);
  const { data } = request;
  dispatch({ type: FETCH_POST, payload: data });
}

export const createPost = (values, callback) => async dispatch => {
  const request = await axios.post(`http://reduxblog.herokuapp.com/api/posts?key=PAPERCLIP1234`, values);
  callback();
  dispatch({ type: CREATE_POST, payload: request });
}
