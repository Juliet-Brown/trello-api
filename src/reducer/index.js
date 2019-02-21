import {
  ADD_BOOKMARK,
  GET_TRELLO_MEMBERS_REQUEST,
  GET_TRELLO_MEMBERS_SUCCESS,
  GET_TRELLO_MEMBERS_FAILURE,
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  ADD_TEXT,
  DELETE_TEXT,
  SIMPLE_ACTION,
  DELETE_ITEM
} from "../actions/types";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null,
  payload: "",
  members: null,
  posts: []
};

export function reducer(state = initialState, action) {
  console.log("do i get here");
  console.log("ACTION", action);
  //const newState = Object.assign([], state);
  // const indexOfCatToDelete = state.findIndex(payload => {
  //   return payload.id == action.payload.id;
  // });
  // newState.splice(indexOfCatToDelete, 1);

  switch (action.type) {
    // case;LOAD_BLOG_POSTS_SUCCESS:
    //   return {
    //     ...state,
    //     posts: action.posts
    //   };
    case ADD_BOOKMARK:
      return {
        ...state,
        posts: action.posts
      };

    case ADD_TEXT:
      return {
        result: action.payload
      };

    // case ADD_TEXT:
    //   return {
    //     result: action.payload
    //   };
    case DELETE_TEXT:
      const filteredItems = state.filter(payload => payload.id !== action.id);
      //state.filter(city => city !== action.city),

      // newState.splice(indexOfCatToDelete, 1);
      // browserHistory.push("/cats");
      // return newState;
      return filteredItems;
    case GET_TRELLO_MEMBERS_REQUEST:
      return { ...state, fetching: true, error: null };
    case GET_TRELLO_MEMBERS_SUCCESS:
      return { ...state, fetching: false, members: action.members };
    case GET_TRELLO_MEMBERS_FAILURE:
      return { ...state, fetching: false, members: null, error: action.error };
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };

    default:
      return state;
  }
}

// [GET_TRELLO_MEMBERS](state: initialState, { members }) {
//     return {
//       ...state,
//       members,
//       fetching: true
//     };
//   },
//   [GET_TRELLO_MEMBERS_SUCCESS](state: initialState, { members }) {
//     return {
//       ...state,
//       members,
//       fetching: false,
//       error: null
//     };
//   }
