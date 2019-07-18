/* eslint-disable import/prefer-default-export */

import { LOGIN_REQUEST } from '../constants';
import { REGISTER_REQUEST } from '../constants';
import { SOCIAL_LOGIN_REQUEST } from '../constants';
import { RESET_PASSWORD_REQUEST } from '../constants';

export function loginAction({ email, password }) {
  return {
    type: LOGIN_REQUEST.TRIGGER,
    payload: {
      email,
      password,
    },
  };
}

export function registerAction({ email, password, name }) {
  return {
    type: REGISTER_REQUEST.TRIGGER,
    payload: {
      email,
      password,
      name,
    },
  };
}

export function socialLoginAction(token) {
  return {
    type: SOCIAL_LOGIN_REQUEST.TRIGGER,
    payload: token,
  };
}

export function resetPasswordAction(email) {
  return {
    type: RESET_PASSWORD_REQUEST.TRIGGER,
    payload: { email },
  };
}
