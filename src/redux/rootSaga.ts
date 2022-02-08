import { takeEvery, put } from "redux-saga/effects";

import { sagaActions } from "./sagaActions";

function* fetchDataSaga() {
  try {
    yield put({ type: "1" });
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
