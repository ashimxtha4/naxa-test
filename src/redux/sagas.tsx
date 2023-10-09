// src/redux/sagas.ts
import { all, put, takeEvery, call } from "redux-saga/effects";
import axios, { AxiosResponse, AxiosError } from "axios";
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA } from "./action";

function* fetchDataWorker() {
  // const response = yield call(callApi());
  try {
    //@ts-ignore
    const data = yield call(
      axios.get,
      "https://admin.naxa.com.np/api/projects"
    );
    yield put({ type: FETCH_DATA_SUCCESS, payload: data.data });
  } catch (error: any) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error?.error?.data });
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchDataWorker);
}

export function* rootSaga() {
  yield all([watchFetchData()]);
}
