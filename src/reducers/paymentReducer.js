import {FETCH_CUSTOMER, NEW_CARD_REQUEST} from "../constants";

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
    /************************************************************
     * FETCH_CUSTOMER
     */
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


    /************************************************************
     * NEW_CARD_REQUEST
     */
    case NEW_CARD_REQUEST.SUCCESS:
      state = {
        ...state,
        s_customer: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
      return state;
    case NEW_CARD_REQUEST.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case NEW_CARD_REQUEST.REQUEST, NEW_CARD_REQUEST.TRIGGER:
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
