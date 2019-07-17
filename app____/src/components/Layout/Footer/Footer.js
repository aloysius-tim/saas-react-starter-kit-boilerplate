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
import s from './Footer.css';
import Link from '../../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className="col-xl-6">
        <ul className="nav nav-footer justify-content-center justify-content-xl-end">
          <li className="nav-item">
            <Link to={'/privacy-policy'} className="nav-link">Privacy</Link>
          </li>
          <li className="nav-item">
            <Link to={'/legal-notice'} className="nav-link">Legal</Link>
          </li>
          <li className="nav-item">
            <Link to={'/refund-policy'} className="nav-link">Refund</Link>
          </li>
          <li className="nav-item">
            <Link to={'/terms-and-conditions'} className="nav-link">Terms</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
