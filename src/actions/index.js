import axios from "axios";
import { FETCH_POST, CREATE_POST, FETCH_SINGLE_POST, DELETE_POST } from "./types";

export const fetchPosts = () => async dispatch => {
  const request = await axios.get(`http://reduxblog.herokuapp.com/api/posts?key=ISAAC1104`);
  const { data } = request;
  dispatch({ type: FETCH_POST, payload: data });
}

export const createPost = (values, callback) => async dispatch => {
  const request = await axios.post(`http://reduxblog.herokuapp.com/api/posts?key=ISAAC1104`, values);
  callback();
  dispatch({ type: CREATE_POST, payload: request });
}

export const fetchSinglePost = id => async dispatch => {
  const request = await axios.get(`http://reduxblog.herokuapp.com/api/posts/${id}?key=ISAAC1104`);
  const { data } = request;
  dispatch({ type: FETCH_SINGLE_POST, payload: data });
}

export const deletePost = (id, callback) => async dispatch => {
  const request = await axios.delete(`http://reduxblog.herokuapp.com/api/posts/${id}?key=ISAAC1104`);
  callback();
  dispatch({ type: DELETE_POST, payload: id });
}
