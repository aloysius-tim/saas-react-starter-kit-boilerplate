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
import AuthService from "../../services/AuthService";
import history from "../../history";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this._checkAndRedirect();
  }

  _updateUserContext(){
    if (AuthService.loggedIn()) {
      this.props.context.user.loggedIn = true;

      this.authService.fetchUser().then(
        (fetchedUser) => {
          this.props.context.user = {
            loggedIn: true,
            populated: true,
            ...fetchedUser
          };
          console.log(fetchedUser)
          this.setState({...this.state, name: fetchedUser.username, avatar: fetchedUser.profile.avatar});
          console.log('User context updated', this.props.context.user);
          this._checkAndRedirect();
          this.setState({isLoading: false});
        }
      );
    } else {
      history.push('/auth/login');
    }
  }

  _checkAndRedirect() {
    console.log("Check & Redirect");
    if (AuthService.loggedIn()) {
      let populated = this.props.context.user.role;
      if (!populated)
        return this._updateUserContext();

      switch (this.props.context.user.role) {
        case 'admin':
        case 'superadmin':
          return history.push('/admin');
        case 'member':
          if (localStorage.getItem('onboarded') === "false")
            return history.push('/member/onboarding');
          else
            return history.push('/member');
        default:
          return this.setState({ isLoading: false });
      }
    } else {
      this.setState({ isLoading: false })
      return history.push('/auth/login');
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="loading">Loading&#8230;</div>
        ) : (
          <div>{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
