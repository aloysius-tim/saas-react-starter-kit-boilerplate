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
import AuthService from "../../../services/AuthService";

class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to={'/'}>
            {
              !this.props.showLogo && <span>{this.props.title}</span>
            }
            {
              this.props.showLogo &&
              <img src="/assets/img/brand/white.png" className="navbar-brand-img" height={'50px'} />
            }
          </Link>

          <ul className="navbar-nav align-items-center d-none d-md-flex">
            <li className="nav-item dropdown">
              <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src={this.props.user.profile.avatar || '/assets/img/theme/team-4-800x800.jpg'} />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">{this.props.user.username || 'Unknown'}</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" style={{zIndex: '1000000'}}>
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <Link to={'/member/settings/profile'} className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>Update profile</span>
                </Link>
                <Link to={'/member/settings/billing'} className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>Billing</span>
                </Link>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </a>
                <Link to={'/member'} className="dropdown-item">
                  <i className="ni ni-calendar-grid-58" />
                  <span>Dashboard</span>
                </Link>
                <Link to={'/member/onboarding'} className="dropdown-item">
                  <i className="ni ni-support-16" />
                  <span>Onboarding</span>
                </Link>
                <div className="dropdown-divider" />
                <a href="#!" className="dropdown-item" onClick={() => AuthService.logout()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);
