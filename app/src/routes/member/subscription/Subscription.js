/* eslint-disable react/no-unescaped-entities,react/forbid-prop-types */
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
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Elements, StripeProvider } from 'react-stripe-elements';
import s from './Subscription.css';
import Card from '../../../components/Layout/Card';
import Pay from './Pay';
import stripe from '../../../config/stripe';
import { fetchCustomerAction } from '../../../actions/paymentActions';
import AuthService from '../../../services/AuthService';
import Plans from '../../../components/Pricing/Plans';

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      stripe: null,
      loading: false,
      visible: false,
      monthly: true,
    };
  }

  componentDidMount() {
    const jwt = AuthService.loggedIn();
    this.user = jwt.data.user;

    this.props.fetchCustomer();

    if (window.Stripe) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ stripe: window.Stripe(stripe.pk) });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe(stripe.pk) });
      });
    }
  }

  selectPlan = plan => {
    this.setState({
      selectedPlan: plan,
      visible: true,
    });
  };

  render() {
    return (
      <>
        {this.state.loading ||
          (this.props.payment.loading && (
            <div className="loading">Loading&#8230;</div>
          ))}

        <Card
          header={
            <div>
              <h2 className="text-center">Choose a plan</h2>
              <p className="text-center">
                Don't worry, you can change plans at any time
              </p>

              {stripe.yearly && (
                <div className="text-center">
                  <Button
                    type={`${this.state.monthly ? 'primary' : 'dashed'}`}
                    onClick={() =>
                      this.setState({ ...this.state, monthly: true })
                    }
                  >
                    Monthy
                  </Button>
                  <Button
                    type={`${!this.state.monthly ? 'primary' : 'dashed'}`}
                    onClick={() =>
                      this.setState({ ...this.state, monthly: false })
                    }
                  >
                    Yearly
                  </Button>
                </div>
              )}
            </div>
          }
        >
          <div className="background" style={{ zIndex: '0' }}>
            <div className="panel pricing-table">
              {stripe.plans.map(plan => {
                if (this.state.monthly && plan.monthly === true)
                  return (
                    <Plans
                      plan={plan}
                      key={plan.id}
                      selectPlan={this.selectPlan}
                      user={this.props.payment.s_customer}
                    />
                  );
                else if (!this.state.monthly && plan.monthly === false)
                  return (
                    <Plans
                      plan={plan}
                      key={plan.id}
                      selectPlan={this.selectPlan}
                      user={this.props.payment.s_customer}
                    />
                  );
              })}
            </div>
          </div>

          <StripeProvider stripe={this.state.stripe}>
            <Elements>
              <Pay
                visible={this.state.visible}
                close={() => this.setState({ ...this.state, visible: false })}
                selectedPlan={this.state.selectedPlan}
              />
            </Elements>
          </StripeProvider>
        </Card>

        <Card>
          <pre>{JSON.stringify(this.props.payment, null, 2)}</pre>
        </Card>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCustomer: () => dispatch(fetchCustomerAction()),
});

const mapStateToProps = (state /* , ownProps */) => ({
  payment: state.payment,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(Subscription),
);

Subscription.propTypes = {
  fetchCustomer: PropTypes.any.isRequired,
  payment: PropTypes.any.isRequired,
};
