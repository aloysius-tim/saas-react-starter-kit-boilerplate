import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import auth from './authReducer'
import onboarding from './onboardingReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  user,
  auth,
  runtime,
  onboarding,
  toastr: toastrReducer
});
