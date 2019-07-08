/* eslint-disable import/prefer-default-export */
import { createRoutine } from 'redux-saga-routines';

export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

export const LOGIN_REQUEST = createRoutine('LOGIN_REQUEST');
export const REGISTER_REQUEST = createRoutine('REGISTER_REQUEST');
export const SOCIAL_LOGIN_REQUEST = createRoutine('SOCIAL_LOGIN_REQUEST');
export const PAYMENT_REQUEST = createRoutine('PAYMENT_REQUEST');


//routine.trigger(payload) === { type: 'ACTION_TYPE_PREFIX/TRIGGER', payload };
//routine.request(payload) === { type: 'ACTION_TYPE_PREFIX/REQUEST', payload };
//routine.success(payload) === { type: 'ACTION_TYPE_PREFIX/SUCCESS', payload };
//routine.failure(payload) === { type: 'ACTION_TYPE_PREFIX/FAILURE', payload };
//routine.fulfill(payload) === { type: 'ACTION_TYPE_PREFIX/FULFILL', payload };
