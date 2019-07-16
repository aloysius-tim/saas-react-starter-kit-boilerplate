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
import s from './Subscription.css';
import { Steps, Icon } from 'antd';
import Card from "../../../components/Layout/Card";
import Pay from "./Pay";
import {toastr} from "react-redux-toastr";
const { Step } = Steps;
import {Elements, StripeProvider} from 'react-stripe-elements';
import stripe from '../../../config/stripe'
import {fetchCustomerAction, paymentAction} from "../../../actions/paymentActions";
import {connect} from "react-redux";
import history from "../../../history";
import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import Plans from "../../../components/Pricing/Plans";

class Subscription extends React.Component {
  constructor(props){
    super(props);
    this.user = {};
    this.state = {
      stripe: null,
      loading: false,
      visible: false,
    };
  }

  componentDidMount(){
    let jwt = AuthService.loggedIn();
    this.user = jwt.data.user;

    this.props.fetchCustomer();

    if (window.Stripe) {
      this.setState({stripe: window.Stripe(stripe.pk)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe(stripe.pk)});
      });
    }
  }

  selectPlan = (plan) => {
    this.setState({
      selectedPlan: plan,
      visible: true
    });
  };

  render() {
    return (
        <>
          {this.state.loading || this.props.payment.loading && <div className="loading">Loading&#8230;</div>}

          <div className="background" style={{zIndex: '0'}}>
            <div className="panel pricing-table">
              {stripe.plans.map(plan => <Plans plan={plan} key={plan.id} selectPlan={this.selectPlan} user={this.props.payment.s_customer}/>)}
            </div>
          </div>

          <StripeProvider stripe={this.state.stripe}>
            <Elements>
              <Pay visible={this.state.visible} close={() => this.setState({...this.state, visible: false})} selectedPlan={this.state.selectedPlan}/>
            </Elements>
          </StripeProvider>

          <Card>
            <pre>
              {JSON.stringify(this.props.payment, null, 2)}
            </pre>
          </Card>
        </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCustomer: () => dispatch(fetchCustomerAction()),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    payment: state.payment
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Subscription));
