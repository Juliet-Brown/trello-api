import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PageTrello from "./PageTrello";
import { createStore } from "redux";
import trelloApi from "./ReduxStore/trello.reducer";
import { getTrelloMembers } from "./ReduxStore/trello.actions";
const store = createStore(trelloApi);
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// Dispatch some actions
store.dispatch(getTrelloMembers("Learn about actions"));
store.dispatch(getTrelloMembers("Learn about reducers"));
store.dispatch(getTrelloMembers("Learn about store"));
// Stop listening to state updates
unsubscribe();

ReactDOM.render(<PageTrello />, document.getElementById("root"));
