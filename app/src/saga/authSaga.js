import { put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import {
  LOGIN_REQUEST,
  RESET_PASSWORD_REQUEST,
  SOCIAL_LOGIN_REQUEST,
} from '../constants';
import AuthService from '../services/AuthService';

export function* loginSaga(action) {
  const REQUEST_ACTION = LOGIN_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    const authService = new AuthService();
    const data = yield authService.login(
      action.payload.email,
      action.payload.password,
    );

    yield put(REQUEST_ACTION.success(data));
    AuthService.redirectUser();
    toastr.success('Success', "You're logged in");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error ', e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error(e.statusText, e.body.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* registerSaga(action) {
  const REQUEST_ACTION = LOGIN_REQUEST;
  let data;
  try {
    yield put(REQUEST_ACTION.request());

    const authService = new AuthService();
    data = yield authService.signup(
      action.payload.email,
      action.payload.password,
      action.payload.name,
    );

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', "You're logged in");
    AuthService.redirectUser();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error ', e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error(e.body.message, e.body.errors[0].message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* socialLoginSaga(action) {
  const REQUEST_ACTION = SOCIAL_LOGIN_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield AuthService.setToken(action.payload);

    yield put(REQUEST_ACTION.success(data));
    toastr.success('Success', "You're logged in");
    AuthService.redirectUser();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}

export function* resetPasswordSaga(action) {
  const REQUEST_ACTION = RESET_PASSWORD_REQUEST;

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield AuthService.resetPassword(action.payload);

    yield put(REQUEST_ACTION.success(data));
    toastr.success(
      'Success',
      'Check your emails, you will receive special link to reset your password',
    );
    AuthService.redirectUser();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.body.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}
