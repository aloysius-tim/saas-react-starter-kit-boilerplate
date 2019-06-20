/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../../Link';

class NavigationAuth extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
        <div className="container px-4">
          <a className="navbar-brand" href="../index.html">
            <img src="/assets/img/brand/white.png"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbar-collapse-main">
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="../index.html">
                    <img src="/assets/img/brand/blue.png"/>
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse"
                          data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                          aria-label="Toggle sidenav">
                    <span/>
                    <span/>
                  </button>
                </div>
              </div>
            </div>
            {/* Navbar items */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-icon" to={'/'}>
                  <i className="ni ni-planet"/>
                  <span className="nav-link-inner--text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-icon" to={'/auth/register'}>
                  <i className="ni ni-circle-08"/>
                  <span className="nav-link-inner--text">Register</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-icon" to={'/auth/login'} >
                  <i className="ni ni-key-25"/>
                  <span className="nav-link-inner--text">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-icon" to={'/profile'}>
                  <i className="ni ni-single-02"/>
                  <span className="nav-link-inner--text">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withStyles(s)(NavigationAuth);
