/*
 * action types
 */
export const GET_TRELLO_MEMBERS = "trello@GET_TRELLO_MEMBERS";

/*
 * action creators
 */
export function getTrelloMembers(members) {
  return {
    type: GET_TRELLO_MEMBERS,
    members
  };
}
