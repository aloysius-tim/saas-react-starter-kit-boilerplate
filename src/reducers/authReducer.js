import {LOGIN_REQUEST} from "../constants";

const initialState = {
  data: null,

  loading: false,
  error: null,
  errorMessage: null,

  refreshToken: null,
  token: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST.SUCCESS:
      console.log('action.payload',action.payload);

      state = {
        ...state,
        ...action.payload,
        loading: false
      };

      return state;
    case LOGIN_REQUEST.FAILURE:
      console.log('Login failure:', action.payload);
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case LOGIN_REQUEST.REQUEST, LOGIN_REQUEST.TRIGGER:
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
