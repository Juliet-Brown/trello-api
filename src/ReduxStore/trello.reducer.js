import { combineReducers } from "redux";
import { GET_TRELLO_MEMBERS } from "./trello.actions";

const initialState = {
  trelloMembers: []
};

function trello(state = initialState, action) {
  switch (action.type) {
    case GET_TRELLO_MEMBERS:
      return [
        // ...state,
        // {
        //   members: action.members,
        //   completed: false
        // }
      ];

    default:
      return state;
  }
}

const trelloApi = combineReducers({
  trello
});

export default trelloApi;
