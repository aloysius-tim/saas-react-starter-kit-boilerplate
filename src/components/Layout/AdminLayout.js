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
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from './Header';
import Sidenav from "./Sidenav";
import Navigation from "./Navigation";
import ReduxToastr from 'react-redux-toastr'
import AuthService from "../../services/AuthService";
import history from "../../history";
import Link from "../Link";
import Footer from "./Footer";

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
    } else {
      history.push('/auth/login');
    }
  }

  _checkAndRedirect() {
    let jwt = AuthService.loggedIn(this.props.context);
    this.user = jwt.data.user;

    if (!jwt) {
      if (!this.state.isLoading) this.setState({isLoading: true});
      this.props.context.user.loggedIn = false;
      history.push('/auth/login');
    } else {
      let role = this.user.role;

      if (role !== 'admin' && role !== 'superadmin')
      {
        if (!this.state.isLoading) this.setState({isLoading: true});
        history.push('/unauthorized');
      } else {
        if (this.state.isLoading) this.setState({isLoading: false});
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
            <Sidenav user={this.user}/>
            <div className="main-content">
              <Navigation user={this.user} title={this.props.title}/>
              <Header/>
              <div className="container-fluid mt--7">
                {this.props.children}
                <footer className="footer">
                  <div className="row align-items-center justify-content-xl-between">
                    <div className="col-xl-6">
                      <div className="copyright text-center text-xl-left text-muted">
                        © 2019 <Link to={'/'} className="font-weight-bold ml-1" target="_blank">SaaStr</Link>
                      </div>
                    </div>
                    <Footer/>
                  </div>
                </footer>
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
