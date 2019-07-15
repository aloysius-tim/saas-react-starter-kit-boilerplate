import {FETCH_CUSTOMER, NEW_CARD_REQUEST, SET_DEFAULT_CARD, DELETE_CARD, CANCEL_SUBSCRIPTION} from "../constants";

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

    /************************************************************
     * SET_DEFAULT_CARD
     */
    case SET_DEFAULT_CARD.SUCCESS:
      state = {
        ...state,
        s_customer: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
      return state;
    case SET_DEFAULT_CARD.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case SET_DEFAULT_CARD.REQUEST, SET_DEFAULT_CARD.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    /************************************************************
     * DELETE_CARD
     */
    case DELETE_CARD.SUCCESS:
      state = {
        ...state,
        s_customer: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
      return state;
    case DELETE_CARD.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case DELETE_CARD.REQUEST, DELETE_CARD.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    /************************************************************
     * CANCEL_SUBSCRIPTION
     */
    case CANCEL_SUBSCRIPTION.SUCCESS:
      state = {
        ...state,
        s_customer: action.payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
      return state;
    case CANCEL_SUBSCRIPTION.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case CANCEL_SUBSCRIPTION.REQUEST, CANCEL_SUBSCRIPTION.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    /************************************************************
     * DEFAULT
     */
    default:
      return state;
  }
}
