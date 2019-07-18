import { put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { FETCH_USER_ME } from '../constants';
import userService from '../services/UserService';

export default function* userMeSaga() {
  const REQUEST_ACTION = FETCH_USER_ME;

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield userService.me();

    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}
