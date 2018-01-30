import { FETCH_POST } from "./../actions/types";

const initialState = [];

export default function postsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return [action.payload, ...state];
    default:
      return state;
  }
}
