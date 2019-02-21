import { takeLatest, call, put } from "redux-saga/effects";
import * as contentful from "contentful";
import axios from "axios";
import _get from "lodash.get";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
  yield takeLatest("GET_TRELLO_MEMBERS_REQUEST", workerSaga);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

function fetchMembers() {
  return axios({
    method: "get",
    // /url: "https://dog.ceo/api/breeds/image/random"
    url: "http://localhost:3002/members/v1/boards"
  });
}

function fetchTrelloBoard() {
  return axios({
    method: "get",
    url: "http://localhost:3002/1/boards/id/actions"

    // console.log("boards", boards.data);
    // if (boards) {
    // //   console.log(
    // //     `There are  ${Object.entries(boards).length} return tello boards`
    // //   );
    // }

    // return boards;
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const member = yield call(fetchMembers);
    // const board = yield call(fetchTrelloBoard);
    const members = _get(member, "data[0].name", []);
    const dog = response.data.message;

    yield put({ type: "GET_TRELLO_MEMBERS_SUCCESS", members });
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
