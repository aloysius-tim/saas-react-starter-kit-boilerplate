import { takeEvery, takeLatest } from 'redux-saga/effects'
import {LOGIN_REQUEST, PAYMENT_REQUEST} from "../constants";
import loginSaga from "./authSaga";
import paymentSaga from "./paymentSaga";

function* mySaga() {
  yield takeLatest(LOGIN_REQUEST.TRIGGER, loginSaga);
  yield takeLatest(PAYMENT_REQUEST.TRIGGER, paymentSaga);
}

export default mySaga;
