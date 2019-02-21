import React, { Component } from "react";
import _get from "lodash.get";
import { addText, deleteText, deleteItem } from "./actions/index";
// import BookmarksList from "./containers/BookmarksList";
// import PageTrello from "./containers/PageTrello";
// import "./App.css";

class App extends Component {
  state = {
    title: "",
    url: ""
  };

  addText = event => {
    this.props.addText();
  };

  deleteText = result => {
    this.props.deleteText(result);
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.url.trim()) {
      this.props.onAddBookmark(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: "",
      url: ""
    });
  };

  // simpleAction = event => {
  //   this.props.simpleAction();
  // };

  render() {
    const {
      fetching,
      dog,
      onRequestDog,
      onRequestPayload,
      onRequestMembers,
      error,
      payload,
      onDelete,
      members,
      items
    } = this.props;
    console.log("test,", this.state, this.props);
    const member = _get(members, "members.name", []);
    console.log("mem", member, members);

    const options = ["item1", "item2"];
    console.log("deleteText", deleteText);
    return (
      <div className="App">
        <header className="App-header">
          {members}
          <img src={dog} className="App-logo" alt="logo" />
        </header>
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}
        <button onClick={onRequestMembers}>Request a payload</button>
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="URL"
            name="url"
            onChange={this.handleInputChange}
            value={this.state.url}
          />
          <hr />
          <button type="submit">Add bookmark</button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>

          <button onClick={this.addText}>Test redux action</button>
          <pre>{JSON.stringify(this.props)}</pre>

          <button onClick={this.deleteText} className="btn btn-default">
            delete
          </button>
        </form>

        {/* <div>
          // <PageTrello />
          //{" "}
        </div> */}
      </div>
    );
  }
}

export default App;
