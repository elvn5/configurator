import { takeEvery, put, call } from "redux-saga/effects";
import { getModules } from "src/redux/modules/effects";
import { getModulesRequest, getModulesFailure, getModulesSuccess } from "src/redux/modules";

function* fetchTentSaga():Generator {
  try {
    const data = yield call(getModules);
    yield put(getModulesSuccess(data));
  } catch (e) {
    yield put(getModulesFailure(e));
  }
}

export default function* rootSaga():Generator {
  yield takeEvery(getModulesRequest, fetchTentSaga);
}
