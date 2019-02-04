import React, { Component } from "react";
import axios from "axios";
import _get from "lodash.get";
// import "./page-trello.scss";

class PageTrello extends Component {
  state = {
    members: [],
    boards: []
  };

  componentDidMount() {
    this.getTrelloBoard();
    this.getMembersBoard();
  }

  getTrelloBoard = async () => {
    try {
      const test = await axios.get(
        "http://localhost:3002/1/boards/id/actions",
        { crossdomain: true }
      );
      const boards = test;
      console.log("TEST BOARD ACIONS", boards);
      if (boards) {
        console.log(
          `There are  ${Object.entries(boards).length} return tello boards`
        );
      }
      return this.setState({ boards });
    } catch (error) {
      console.error(error);
    }
  };

  getMembersBoard = async () => {
    try {
      const test = await axios.get("http://localhost:3002/members/v1/boards", {
        crossdomain: true
      });
      const members = test;
      console.log("TEST MEMBERS BOARD", members);
      if (members) {
        console.log(
          `There are  ${Object.entries(members).length} return tello members`
        );
      }
      return this.setState({ members });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { members } = this.state;
    const name = _get(members, "data[0].name", []);

    return (
      <div className="App">
        <header className="App-header">
          <p>TESTING NAME FROM TRELLO API: {name}</p>
        </header>
      </div>
    );
  }
}

export default PageTrello;
