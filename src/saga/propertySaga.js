import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../../tools/request';
import {CONST} from "../../env";

function* fetchProperty(action) {

  let requestURL = `${CONST.apiUrl}/properties`;

  try {
    const data = yield call(request, requestURL, 'GET', action.payload);

    yield put({type: '', payload: data});
  } catch (e) {
    yield put({type: '', message: e.message});
  }
}

export default fetchProperty;
