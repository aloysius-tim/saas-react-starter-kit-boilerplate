import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import auth from './authReducer'
import payment from './paymentReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  user,
  auth,
  runtime,
  payment,
  toastr: toastrReducer
});
