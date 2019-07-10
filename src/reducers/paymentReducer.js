import {FETCH_CUSTOMER} from "../constants";

const initialState = {
  data: null,
  loading: false,
  error: false,
  errorMessage: null,

  s_customer: {
    subscriptions: {
      data: []
    },
    sources: {
      data: []
    },
    default_source: ''
  },
};

export function payment(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMER.SUCCESS:
      state = {
        ...state,
        s_customer: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
      return state;

    case FETCH_CUSTOMER.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;

    case FETCH_CUSTOMER.REQUEST, FETCH_CUSTOMER.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    default:
      return state;
  }
}
