/* eslint-disable no-param-reassign */
import { PAYMENT_REQUEST } from '../constants';

const initialState = {
  data: null,

  loading: false,
  error: null,
  subscribed: false,
  step: 1,
  errorMessage: null,
};

export default function onboarding(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_REQUEST.SUCCESS:
      state = {
        ...state,
        ...action.payload,
        loading: false,
        subscribed: true,
        step: state.step + 1,
        error: false,
        errorMessage: null,
      };
      return state;
    case PAYMENT_REQUEST.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false,
      };
      return state;
    case (PAYMENT_REQUEST.REQUEST, PAYMENT_REQUEST.TRIGGER):
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
