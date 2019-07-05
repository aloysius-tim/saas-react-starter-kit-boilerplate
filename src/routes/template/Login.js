/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import {connect} from "react-redux";
import {loginAction} from "../../../actions/authActions";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import AuthService from "../../../services/AuthService";
import {toastr} from 'react-redux-toastr'
import Loader from 'react-loader-advanced';

class Login extends React.Component {
  authService = new AuthService();

  render() {
    return (<div></div>);
  }
}

const mapDispatchToProps = dispatch => ({
  loginAction: data => dispatch(loginAction(data)),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    auth: state.auth
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Login));
