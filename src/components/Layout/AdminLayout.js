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
import withAdminAuth from "./withAdminAuth";

class MemberLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Sidenav/>
        <div className="main-content">
          <Navigation/>
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
    );
  }
}

export default withStyles(normalizeCss, s)(withAdminAuth(MemberLayout));
