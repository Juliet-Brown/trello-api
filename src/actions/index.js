import uuidv4 from "uuid/v4";
import {
  ADD_BOOKMARK,
  ADD_TEXT,
  DELETE_TEXT,
  GET_TRELLO_MEMBERS_REQUEST,
  GET_TRELLO_MEMBERS_FAILURE,
  GET_TRELLO_MEMBERS_SUCCESS,
  LOAD_BLOG_POSTS_SUCCESS,
  SIMPLE_ACTION,
  DELETE_ITEM
} from "./types";

export const addText = () => dispatch => {
  dispatch({
    type: ADD_TEXT,
    payload: "result_of_simple_action"
  });
};

export const deleteText = id => dispatch => {
  return {
    type: DELETE_TEXT,
    payload: {
      id: uuidv4()
    }
  };
};

export const addBookmark = ({ title, url }) => ({
  type: ADD_BOOKMARK,
  payload: {
    id: uuidv4(),
    title,
    url
  }
});

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  };
}

// export function addText(text) {
//   return { type: ADD_TEXT, text: "result_of_simple_action" };
// }

// export const deleteBookmark = id => ({
//   type: DELETE_BOOKMARK,
//   payload: {
//     id
//   }
// });

// export function getTrelloMembers({ title, url }) {
//   return {
//     type: GET_TRELLO_MEMBERS,
//     payload: {
//       id: uuidv4(),
//       title,
//       url
//     }
//   };
// }

// export function getTrelloMembersSuccess(members) {
//   return {
//     type: GET_TRELLO_MEMBERS_SUCCESS,
//     members
//   };
// }
