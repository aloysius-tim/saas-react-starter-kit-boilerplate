import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import auth from './authReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  user,
  auth,
  runtime,
  toastr: toastrReducer
});
