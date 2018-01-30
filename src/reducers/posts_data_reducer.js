import { FETCH_POST, FETCH_SINGLE_POST, DELETE_POST } from "./../actions/types";

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
    case FETCH_SINGLE_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_POST:
      
    default:
      return state;
  }
}
