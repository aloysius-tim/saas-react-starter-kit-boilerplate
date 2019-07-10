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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import NavigationAuth from "./Navigation/NavigationAuth";
import FooterAuth from "./Footer/FooterAuth";
import ReduxToastr from 'react-redux-toastr'
import AuthService from "../../services/AuthService";
import history from "../../history";
import Navigation from "./Navigation";

class AuthLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props){
    super(props);
    this.user = {};
  }

  componentDidMount() {
    this._checkAndRedirect();
  }

  componentDidUpdate() {
    this._checkAndRedirect();
  }

  _checkAndRedirect() {
    let jwt = AuthService.loggedIn(this.props.context);

    if (jwt)
      history.push('/');
  }

  render() {
    return (
      <div>
        <div className="main-content">
          <NavigationAuth title={this.props.title}/>
          {this.props.children}
        </div>
        <FooterAuth/>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick/>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(AuthLayout);
