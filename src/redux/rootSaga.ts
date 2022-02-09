import { takeEvery, put, call } from "redux-saga/effects";
import { getTents } from "src/redux/frameAndAwning/effects";
import { tentActions } from "src/redux/frameAndAwning/actions";
import { frameAndAwningActions } from "src/redux/frameAndAwning/frameAndAwning";


function* fetchTentSaga():Generator {
  yield put(frameAndAwningActions.getTentsRequest());
  try {
    const data = yield call(getTents);
    yield put(frameAndAwningActions.getTentsSuccess(data));
  } catch (e) {
    yield put(frameAndAwningActions.getTentsFailure(e));
  }
}

export default function* rootSaga():Generator {
  yield takeEvery(tentActions.GET_TENTS_REQUEST, fetchTentSaga);
}
