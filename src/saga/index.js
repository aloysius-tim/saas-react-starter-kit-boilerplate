import { takeEvery, takeLatest } from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  PAYMENT_REQUEST,
  SOCIAL_LOGIN_REQUEST,
  REGISTER_REQUEST,
  FETCH_CUSTOMER,
  FETCH_USER_ME
} from "../constants";
import {socialLoginSaga, loginSaga, registerSaga} from "./authSaga";
import {paymentSaga, fetchCustomerSaga} from "./paymentSaga";
import {userMeSaga} from "./userSaga";

function* mySaga() {

  /**
   * AUTH
   */
  yield takeLatest(LOGIN_REQUEST.TRIGGER, loginSaga);
  yield takeLatest(REGISTER_REQUEST.TRIGGER, registerSaga);
  yield takeLatest(SOCIAL_LOGIN_REQUEST.TRIGGER, socialLoginSaga);

  /**
   * PAYMENT
   */
  yield takeLatest(PAYMENT_REQUEST.TRIGGER, paymentSaga);
  yield takeLatest(FETCH_CUSTOMER.TRIGGER, fetchCustomerSaga);

  /**
   * USER
   */
  yield takeLatest(FETCH_USER_ME.TRIGGER, userMeSaga);
}

export default mySaga;
