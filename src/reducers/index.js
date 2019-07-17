import { combineReducers } from 'redux';
import {user} from './userReducer';
import runtime from './runtime';
import {auth} from './authReducer'
import {onboarding} from './onboardingReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {payment} from "./paymentReducer";

export default combineReducers({
  userReducer: user,
  auth,
  runtime,
  onboarding,
  payment,
  toastr: toastrReducer
});
