import axios from "axios";
import { FETCH_POST } from "./types";

export const fetchPosts = () => async dispatch => {
  const request = await axios.get(`http://reduxblog.herokuapp.com/api/posts?key=PAPERCLIP1234`);
  const { data } = request;
  dispatch({ type: FETCH_POST, payload: data });
}
