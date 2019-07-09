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
    this.state = {
      isLoading: true,
      name: "Initial val",
      avatar: ""
    };
  }

  componentDidMount() {
    this._updateUserContext();
  }

  componentDidUpdate() {
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
    console.log("Check & Redirect")
    if (!AuthService.loggedIn()) {
      this.props.context.user.loggedIn = false;
      this.setState({ isLoading: false })
      history.push('/auth/login');
    } else {
      let populated = this.props.context.user.populated;
      if (!populated)
        return this._updateUserContext();

      let role = this.props.context.user.role;
      console.log(role);

      if (role !== 'admin' && role !== 'superadmin')
        history.push('/');
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="loading">Loading&#8230;</div>
        ) : (
          <div>
            <Sidenav/>
            <div className="main-content">
              <Navigation avatar={this.state.avatar} name={this.state.name}/>
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
