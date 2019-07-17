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
import s from './Sidenav.css';
import Link from '../../Link';
import UserAction from "../Navigation/UserAction";

class Sidenav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div className="container-fluid">
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          <Link className="navbar-brand pt-0" to={'/'}>
            <img src="/assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
          </Link>
          {/* User */}
          <UserAction user={this.props.user} collapsed={true}/>


          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="/assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/member'}>
                  <i className="ni ni-tv-2 text-primary" /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/member/settings/profile'}>
                  <i className="ni ni-single-02 text-yellow" /> User profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/member/settings/billing'}>
                  <i className="ni ni-bullet-list-67 text-red" /> User billing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/auth/login'}>
                  <i className="ni ni-key-25 text-info" /> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/auth/register'}>
                  <i className="ni ni-circle-08 text-pink" /> Register
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
            <h6 className="navbar-heading text-muted">Documentation</h6>
            {/* Navigation */}
            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html">
                  <i className="ni ni-spaceship" /> Getting started
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html">
                  <i className="ni ni-palette" /> Documentation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html">
                  <i className="ni ni-ui-04" /> Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withStyles(s)(Sidenav);
