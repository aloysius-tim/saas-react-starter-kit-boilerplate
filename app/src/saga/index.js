import { takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  PAYMENT_REQUEST,
  SOCIAL_LOGIN_REQUEST,
  REGISTER_REQUEST,
  FETCH_CUSTOMER,
  FETCH_USER_ME,
  NEW_CARD_REQUEST,
  SET_DEFAULT_CARD,
  DELETE_CARD,
  CANCEL_SUBSCRIPTION,
  RESET_PASSWORD_REQUEST,
  GET_INVOICES,
} from '../constants';
import {
  socialLoginSaga,
  loginSaga,
  registerSaga,
  resetPasswordSaga,
} from './authSaga';
import {
  paymentSaga,
  fetchCustomerSaga,
  newCardRequestSaga,
  setDefaultCardSaga,
  deleteCardSaga,
  cancelSubscriptionSaga,
  getInvoicesSaga,
} from './paymentSaga';
import userMeSaga from './userSaga';

function* mySaga() {
  /**
   * AUTH
   */
  yield takeLatest(LOGIN_REQUEST.TRIGGER, loginSaga);
  yield takeLatest(REGISTER_REQUEST.TRIGGER, registerSaga);
  yield takeLatest(SOCIAL_LOGIN_REQUEST.TRIGGER, socialLoginSaga);
  yield takeLatest(RESET_PASSWORD_REQUEST.TRIGGER, resetPasswordSaga);

  /**
   * PAYMENT
   */
  yield takeLatest(PAYMENT_REQUEST.TRIGGER, paymentSaga);
  yield takeLatest(FETCH_CUSTOMER.TRIGGER, fetchCustomerSaga);
  yield takeLatest(NEW_CARD_REQUEST.TRIGGER, newCardRequestSaga);
  yield takeLatest(SET_DEFAULT_CARD.TRIGGER, setDefaultCardSaga);
  yield takeLatest(DELETE_CARD.TRIGGER, deleteCardSaga);
  yield takeLatest(CANCEL_SUBSCRIPTION.TRIGGER, cancelSubscriptionSaga);
  yield takeLatest(GET_INVOICES.TRIGGER, getInvoicesSaga);

  /**
   * USER
   */
  yield takeLatest(FETCH_USER_ME.TRIGGER, userMeSaga);
}

export default mySaga;
