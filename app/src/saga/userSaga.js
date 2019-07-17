import { put } from 'redux-saga/effects'
import request from '../../tools/request';
import { FETCH_USER_ME } from "../constants";
import {toastr} from "react-redux-toastr";
import userService from "../services/UserService";

export function* userMeSaga(action) {
  let REQUEST_ACTION = FETCH_USER_ME;

  try {
    yield put(REQUEST_ACTION.request());

    const data = yield userService.me();

    yield put(REQUEST_ACTION.success(data));
  } catch (e) {
    console.log(e);
    yield put(REQUEST_ACTION.failure(e));
    toastr.error('Failure', e.message);
  } finally {
    yield put(REQUEST_ACTION.fulfill());
  }
}
