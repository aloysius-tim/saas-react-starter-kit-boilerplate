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
import Header from './Header';
import Sidenav from "./Sidenav";
import Navigation from "./Navigation";
import FooterAdmin from "./Footer/FooterAdmin";
import ReduxToastr from 'react-redux-toastr'
import AuthService from "../../services/AuthService";
import history from "../../history";

class MemberLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.user = {};
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this._updateUserContext();
  }

  componentDidUpdate() {
    this._checkAndRedirect();
  }

  _updateUserContext(){
    let jwt;
    if ((jwt = AuthService.loggedIn(this.props.context))) {
      this.user = jwt.data.user;
      this.props.context.user.loggedIn = true;

      this._checkAndRedirect();
      if (this.state.isLoading) this.setState({isLoading: false});
    } else {
      history.push('/auth/login');
    }
  }

  _checkAndRedirect() {
    let jwt = AuthService.loggedIn(this.props.context);

    if (!jwt) {
      if (!this.state.isLoading) this.setState({isLoading: true});
      this.props.context.user.loggedIn = false;
      history.push('/auth/login');
    } else {
      this.user = jwt.data.user;
      console.log(this.user);
      let role = this.user.role;

      if (role !== 'member') {
        if (!this.state.isLoading) this.setState({isLoading: true});
        history.push('/unauthorized');
      }
      else {
        /**
         * If user need onboarding
         */
        if (this.user.onboarded === false && window.location.pathname !== '/member/onboarding') {
          if (!this.state.isLoading) this.setState({isLoading: true});
          history.push('/member/onboarding');
        } else if (this.state.isLoading) this.setState({isLoading: false});
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="loading">Loading&#8230;</div>
        ) : (
          <div>
            {this.props.sidenav && <Sidenav/>}
            <div className="main-content">
              <Navigation showLogo={!this.props.sidenav} context={this.props.context} user={this.user} title={this.props.title}/>
              <Header/>
              <div className="container-fluid mt--7">
                {this.props.children}
                <FooterAdmin/>
              </div>
            </div>
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
        )}
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(MemberLayout);
