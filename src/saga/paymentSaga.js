import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../../tools/request';
import {CONST} from "../../env";
import {PAYMENT_REQUEST} from "../constants";

import AuthService from "../services/AuthService";
import {toastr} from "react-redux-toastr";
import StripeService from "../services/StripeService";


function* paymentSaga(action) {
  let REQUEST_ACTION = PAYMENT_REQUEST;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    console.log('IN SAGA');

    const data = yield stripeService.subscribe(action.payload);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'ve been subscibed successfully');
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export default paymentSaga;
