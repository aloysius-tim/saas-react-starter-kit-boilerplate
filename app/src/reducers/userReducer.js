/* eslint-disable no-param-reassign */
import { FETCH_USER_ME } from '../constants';

const initialState = {
  data: null,

  username: 'loading',
  email: 'loading@loading.com',
  role: '',
  verified: false,
  banned: false,
  onboarded: false,
  stripe_cus_id: '',
  current_plan_name: '_',
  current_plan_id: '_',
  trial: false,
  payment_failed: false,
  subscribed: true,
  profile: {
    remote_avatar:
      'https://s.gravatar.com/avatar/331a00272b6e2d183fc7efd210c5563e?s=100&r=x&d=retro',
  },

  loading: false,
  error: false,
  errorMessage: null,
  subscriptions: [],
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
