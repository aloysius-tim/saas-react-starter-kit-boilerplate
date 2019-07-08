import { takeEvery, takeLatest } from 'redux-saga/effects'
import {LOGIN_REQUEST, PAYMENT_REQUEST, SOCIAL_LOGIN_REQUEST, REGISTER_REQUEST} from "../constants";
import {socialLoginSaga, loginSaga, registerSaga} from "./authSaga";
import paymentSaga from "./paymentSaga";

function* mySaga() {
  yield takeLatest(LOGIN_REQUEST.TRIGGER, loginSaga);
  yield takeLatest(REGISTER_REQUEST.TRIGGER, registerSaga);
  yield takeLatest(SOCIAL_LOGIN_REQUEST.TRIGGER, socialLoginSaga);
  yield takeLatest(PAYMENT_REQUEST.TRIGGER, paymentSaga);
}

export default mySaga;
