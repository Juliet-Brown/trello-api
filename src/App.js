import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
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
      const test = await axios.get("http://localhost:3003/1/boards/id/actions");
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
      const test = await axios.get("http://localhost:3003/members/v1/boards");
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
    console.log("state", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>TESTING</p>
        </header>
      </div>
    );
  }
}

export default App;
