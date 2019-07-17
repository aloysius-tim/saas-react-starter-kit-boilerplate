import { put } from 'redux-saga/effects'
import request from '../../tools/request';
import {CONST} from "../../env";
import {CANCEL_SUBSCRIPTION, FETCH_CUSTOMER, NEW_CARD_REQUEST, PAYMENT_REQUEST, SET_DEFAULT_CARD} from "../constants";

import {toastr} from "react-redux-toastr";
import StripeService from "../services/StripeService";
import history from '../history'

export function* paymentSaga(action) {
  let REQUEST_ACTION = PAYMENT_REQUEST;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.subscribe(action.payload);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'ve been subscibed successfully');
    history.push('/member');
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* fetchCustomerSaga() {
  let REQUEST_ACTION = FETCH_CUSTOMER;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.customer();

    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* newCardRequestSaga(action) {
  let REQUEST_ACTION = NEW_CARD_REQUEST;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.newCard(action.payload.token);

    toastr.success('Success', 'You can now use this new credit card');
    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* setDefaultCardSaga(action) {
  let REQUEST_ACTION = SET_DEFAULT_CARD;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.setDefaultCard(action.payload.cardId);

    toastr.success('Success', 'Your default credit card have been updated');
    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* deleteCardSaga(action) {
  let REQUEST_ACTION = SET_DEFAULT_CARD;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.deleteCard(action.payload.cardId);

    toastr.success('Success', 'Your card have been deleted');
    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* cancelSubscriptionSaga(action) {
  let REQUEST_ACTION = CANCEL_SUBSCRIPTION;
  const stripeService = new StripeService();

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield stripeService.cancelSub(action.payload.subId);

    toastr.success('Success', 'We canceled your subscription');
    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}
