import {
  GET_LEADS,
  DELETE_LEAD,
  ADD_LEAD,
  CLEAR_LEADS
} from "../actions/types.js";

const initialState = {
  posts: []
};

//reducer updates the datastore: store.js
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        posts: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        posts: state.posts.filter(lead => lead.id !== action.payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case CLEAR_LEADS:
      return {
        ...state,
        posts: []
      };
    default:
      return state;
  }
}
