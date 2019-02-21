import React from "react";
import { connect } from "react-redux";
import Trello from "../components/Trello";
import { getTrelloMembers, addBookmark } from "../actions";

function PageTrello({ bookmarks, onDelete }) {
  return (
    <div>
      {/* {bookmarks.map(bookmark => {
        return ( */}
      <Trello />
      {/* );
      })} */}
    </div>
  );
}
const mapStateToProps = state => {
  console.log("TRELLO STATE", state);
  return {
    bookmarks: state,
    members: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMembers: members => {
      dispatch(getTrelloMembers(members));
    },
    onAddBookmark: bookmark => {
      dispatch(addBookmark(bookmark));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTrello);
