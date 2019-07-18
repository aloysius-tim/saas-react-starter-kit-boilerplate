/* eslint-disable no-param-reassign */
import { FETCH_USER_ME } from '../constants';

const initialState = {
  data: null,

  loading: false,
  error: false,
  errorMessage: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_ME.SUCCESS:
      state = {
        ...state,
        ...action.payload,
        error: false,
        errorMessage: null,
        loading: false,
      };
      return state;
    case FETCH_USER_ME.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false,
      };
      return state;
    case (FETCH_USER_ME.REQUEST, FETCH_USER_ME.TRIGGER):
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;

    default:
      return state;
  }
}
