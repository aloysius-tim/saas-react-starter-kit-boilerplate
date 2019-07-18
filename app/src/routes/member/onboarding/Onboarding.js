/* eslint-disable react/forbid-prop-types */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { Steps, Icon } from 'antd';
import s from './Onboarding.scss';
import Card from '../../../components/Layout/Card';
import AuthService from '../../../services/AuthService';

const { Step } = Steps;

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const jwt = AuthService.loggedIn();
    this.user = jwt.data.user;

    /* if (this.user.onboarded === true)
      history.push('/member'); */
  }

  render() {
    return (
      <>
        {this.state.loading && <div className="loading">Loading&#8230;</div>}
        <Card
          header={
            <Steps current={this.props.onboarding.step}>
              <Step title="Signup" icon={<Icon type="user" />} />
              <Step
                title="Pay"
                icon={
                  this.state.step === 1 ? (
                    <Icon type="loading" />
                  ) : (
                    <Icon type="dollar" />
                  )
                }
              />
              <Step title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
          }
        >
          {this.props.onboarding.step === 1 && <div>...</div>}

          {this.props.onboarding.step === 2 && (
            <button onClick={this.onboarded}>DONE !</button>
          )}
        </Card>
      </>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state /* , ownProps */) => ({
  onboarding: state.onboarding,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(Onboarding),
);

Onboarding.propTypes = {
  onboarding: PropTypes.any.isRequired,
};
