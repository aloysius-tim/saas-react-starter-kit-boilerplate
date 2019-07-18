import { FETCH_USER_ME } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export function fetchUserAction() {
  return {
    type: FETCH_USER_ME.TRIGGER,
    payload: {},
  };
}
