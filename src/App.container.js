import { connect } from "react-redux";
import { addText, deleteText } from "./actions/index";
import App from "./App";

const mapStateToProps = state => {
  console.log("state containre", state);
  return {
    result: state.result,
    members: state.members,
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
    items: state.items,
    bookmark: state.bookmark
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
    onRequestMembers: () => dispatch({ type: "GET_TRELLO_MEMBERS_REQUEST" }),
    // onAddBookmark: bookmark => {
    //   dispatch(addBookmark(bookmark));
    // },
    addText: () => dispatch(addText()),
    deleteText: () => dispatch(deleteText())
    // onDelete: id => {
    //   dispatch(deleteBookmark(id));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
