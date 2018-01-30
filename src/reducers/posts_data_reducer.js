import { FETCH_POST } from "./../actions/types";

const initialState = {
  data: []
};

export default function postsDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
