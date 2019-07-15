/* eslint-disable import/prefer-default-export */
import { createRoutine } from 'redux-saga-routines';

export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

/**
 * AUTH
 */
export const LOGIN_REQUEST = createRoutine('LOGIN_REQUEST');
export const REGISTER_REQUEST = createRoutine('REGISTER_REQUEST');
export const SOCIAL_LOGIN_REQUEST = createRoutine('SOCIAL_LOGIN_REQUEST');

/**
 * PAYMENT
 */
export const PAYMENT_REQUEST = createRoutine('PAYMENT_REQUEST');
export const FETCH_CUSTOMER = createRoutine('FETCH_CUSTOMER');
export const NEW_CARD_REQUEST = createRoutine('NEW_CARD_REQUEST');
export const SET_DEFAULT_CARD = createRoutine('SET_DEFAULT_CARD');
export const DELETE_CARD = createRoutine('DELETE_CARD');
export const CANCEL_SUBSCRIPTION = createRoutine('CANCEL_SUBSCRIPTION');

/**
 * USER
 */
export const FETCH_USER_ME = createRoutine('FETCH_USER_ME');

//routine.trigger(payload) === { type: 'ACTION_TYPE_PREFIX/TRIGGER', payload };
//routine.request(payload) === { type: 'ACTION_TYPE_PREFIX/REQUEST', payload };
//routine.success(payload) === { type: 'ACTION_TYPE_PREFIX/SUCCESS', payload };
//routine.failure(payload) === { type: 'ACTION_TYPE_PREFIX/FAILURE', payload };
//routine.fulfill(payload) === { type: 'ACTION_TYPE_PREFIX/FULFILL', payload };
