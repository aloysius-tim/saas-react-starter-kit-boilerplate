/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className="header bg-gradient-primary pb-6 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
