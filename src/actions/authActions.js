/* eslint-disable import/prefer-default-export */

import {LOGIN_REQUEST} from "../constants";
import {SOCIAL_LOGIN_REQUEST} from "../constants";

export function loginAction({ email, password }) {
  return {
    type: LOGIN_REQUEST.TRIGGER,
    payload: {
      email, password
    },
  };
}

export function socialLoginAction(token) {
  return {
    type: SOCIAL_LOGIN_REQUEST.TRIGGER,
    payload: token,
  };
}
