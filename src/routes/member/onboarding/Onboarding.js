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
import s from './Onboarding.css';
import { Steps, Icon } from 'antd';
import Card from "../../../components/Layout/Card";
import Pricing from "./Pricing";
import {toastr} from "react-redux-toastr";
const { Step } = Steps;
import {Elements, StripeProvider} from 'react-stripe-elements';
import stripe from '../../../config/stripe'
import {paymentAction} from "../../../actions/paymentActions";
import {connect} from "react-redux";

class Onboarding extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stripe: null,
    };
  }

  componentDidMount(){
    if (localStorage.getItem('onboarded') === "true")
      window.location = '/member';

    if (window.Stripe) {
      this.setState({stripe: window.Stripe(stripe.pk)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe(stripe.pk)});
      });
    }
    toastr.info('Please select a plan to continue');
  }

  render() {
    return (
        <>
          <Card header={
            <Steps current={this.props.onboarding.step}>
              <Step title="Signup" icon={<Icon type="user" />} />
              <Step title="Pay" icon={this.state.step === 1 ? <Icon type="loading" /> : <Icon type="dollar" />} />
              <Step title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
          }>

            {
              this.props.onboarding.step === 1 &&
              <StripeProvider stripe={this.state.stripe}>
                <Elements>
                  <Pricing/>
                </Elements>
              </StripeProvider>
            }

            {
              this.props.onboarding.step === 2 &&
              <h1>DONE !</h1>
            }
          </Card>
        </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  paymentAction: data => dispatch(paymentAction(data)),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    onboarding: state.onboarding
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Onboarding));
