import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../../tools/request';
import {CONST} from "../../env";
import {LOGIN_REQUEST, SOCIAL_LOGIN_REQUEST} from "../constants";
var jwtDecode = require('jwt-decode');

import AuthService from "../services/AuthService";
import {toastr} from "react-redux-toastr";
import history from '../history.js'

export function* loginSaga(action) {
  let REQUEST_ACTION = LOGIN_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    let authService = new AuthService();
    const data = yield authService.login(action.payload.email, action.payload.password);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'re logged in');
  } catch (e) {
    console.log('Error ', e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error(e.statusText, e.body.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* registerSaga(action) {
  let REQUEST_ACTION = LOGIN_REQUEST;
  let  data;
  try {
    yield put(REQUEST_ACTION.request());

    let authService = new AuthService();
    data = yield authService.signup(action.payload.email, action.payload.password, action.payload.name);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'re logged in');
  } catch (e) {
    console.log('Error ', e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error(e.body.message, e.body.errors[0].message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* socialLoginSaga(action) {
  let REQUEST_ACTION = SOCIAL_LOGIN_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    let authService = new AuthService();
    console.log(action.payload);
    const data = yield authService.socialLogin(action.payload);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', 'You\'re logged in');
    history.push('/');
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}
