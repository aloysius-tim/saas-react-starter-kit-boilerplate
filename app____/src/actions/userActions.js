/* eslint-disable import/prefer-default-export */

import {LOGIN_REQUEST} from "../constants";
import {FETCH_USER_ME} from "../constants";

export function fetchUserAction() {
  return {
    type: FETCH_USER_ME.TRIGGER,
    payload: {}
  };
}
