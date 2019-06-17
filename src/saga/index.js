import { takeEvery, takeLatest } from 'redux-saga/effects'
import {LOGIN_REQUEST} from "../constants";
import loginSaga from "./authSaga";

function* mySaga() {
  yield takeLatest(LOGIN_REQUEST.TRIGGER, loginSaga);
}

export default mySaga;
