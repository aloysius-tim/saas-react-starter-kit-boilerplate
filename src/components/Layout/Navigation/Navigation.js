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
import UserAction from "./UserAction";

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

          <UserAction user={this.props.user} collapsed={false}/>
        </div>
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);
