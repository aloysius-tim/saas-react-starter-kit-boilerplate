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
import ReduxToastr from 'react-redux-toastr';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { fetchUserAction } from '../../actions/userActions';
import s from './Layout.scss';
import Header from './Header';
import Sidenav from './Sidenav';
import Navigation from './Navigation';
import AuthService from '../../services/AuthService';
import history from '../../history';
import Footer from './Footer';
import Link from '../Link';
import Card from './Card';
// eslint-disable-next-line import/first
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// eslint-disable-next-line import/first
import normalizeCss from 'normalize.css';

class MemberLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line react/forbid-prop-types,react/require-default-props,react/no-unused-prop-types
    sidenav: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.user = {};
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    this._updateUserContext();
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-underscore-dangle
    this._checkAndRedirect();
  }

  _updateUserContext() {
    let jwt;
    // eslint-disable-next-line no-cond-assign
    if ((jwt = AuthService.loggedIn())) {
      this.user = jwt.data.user;
      // eslint-disable-next-line react/prop-types
      this.props.fetchUser();
    } else {
      history.push('/auth/login');
    }
  }

  _checkAndRedirect() {
    const jwt = AuthService.loggedIn();

    if (!jwt) {
      history.push('/auth/login');
    } else {
      this.user = jwt.data.user;
      // eslint-disable-next-line prefer-destructuring
      const role = this.user.role;

      if (role !== 'member') {
        history.push('/unauthorized');
      }

      /**
       * Redirect user to billing page if his last payment have failed
       */
      if (
        window.location.pathname !== '/member/settings/billing' &&
        // eslint-disable-next-line react/prop-types
        this.props.member.payment_failed
      )
        history.push('/member/settings/billing');

      /**
       * Redirect user if he do not have any active subscription
       */
      if (
        window.location.pathname !== '/member/subscription' &&
        // eslint-disable-next-line react/prop-types
        !this.props.member.current_plan_name
      )
        history.push('/member/subscription');
    }
  }

  render() {
    return (
      <div>
        {/* eslint-disable-next-line react/prop-types */}
        {this.state.isLoading || this.props.member.loading ? (
          <div className="loading">Loading&#8230;</div>
        ) : (
          <div>
            {this.props.sidenav && (
              <div>
                {// eslint-disable-next-line react/prop-types
                this.props.member.payment_failed && (
                  <Alert
                    message="Your account is suspended"
                    description="We could not process the payment of your subscription. Please check your billing page and update your payment information"
                    type="error"
                    showIcon
                    style={{ display: 'block' }}
                  />
                )}

                {// eslint-disable-next-line react/prop-types
                !this.props.member.current_plan_name && (
                  <Alert
                    message="You do not have any active subscription"
                    description="Please subscribe to a plan"
                    type="error"
                    showIcon
                    style={{ display: 'block' }}
                  />
                )}
              </div>
            )}
            {this.props.sidenav && <Sidenav user={this.props.member} />}
            <div className="main-content">
              <Navigation
                showLogo={!this.props.sidenav}
                user={this.props.member}
                title={this.props.title}
              />
              <Header />
              <div className="container-fluid mt--7">
                {this.props.children}
                <footer className="footer">
                  <div className="row align-items-center justify-content-xl-between">
                    <div className="col-xl-6">
                      <div className="copyright text-center text-xl-left text-muted">
                        © 2019{' '}
                        <Link
                          to="/"
                          className="font-weight-bold ml-1"
                          target="_blank"
                        >
                          SaaStr
                        </Link>
                      </div>
                    </div>
                    <Footer />
                  </div>
                </footer>
              </div>
              <Card>
                <pre>{JSON.stringify(this.props.member, null, 2)}</pre>
              </Card>
            </div>
            <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="bottom-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
              closeOnToastrClick
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUserAction()),
});

const mapStateToProps = (state /* , ownProps */) => ({
  member: state.member,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(normalizeCss, s)(MemberLayout),
);
