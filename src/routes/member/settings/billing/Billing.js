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
import s from './Billing.css';
import {fetchCustomerAction} from "../../../../actions/paymentActions";
import {connect} from "react-redux";
import {Table, Divider, Tag, Button, Form, Input, Icon, Drawer} from 'antd';
import moment from 'moment';
import stripe from "../../../../config/stripe";
import {CardElement, Elements, StripeProvider} from "react-stripe-elements";
import Pricing from "../../onboarding/Pricing";
import Card from "../../../../components/Layout/Card";
import {toastr} from "react-redux-toastr";

class Billing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stripe: null,
      loading: false,
      cardError: false,
      showNewCardForm: false
    }
  }

  showCardError = (error) => {
    const displayError = document.getElementById('card-errors');
    if (error) {
      this.setState({
        ...this.state,
        cardError: true,
      });
      displayError.textContent = error.message;
      toastr.error(error.message);
    } else {
      this.setState({
        ...this.state,
        cardError: false,
      });
      displayError.textContent = '';
    }
  };

  componentDidMount(): void {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe(stripe.pk)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe(stripe.pk)});
      });
    }

    this.props.fetchPaymentCustomerInfo();
  }

  render() {
    console.log(this.props.payment);
    return (
      <div>
        <div className="row">
          {this.props.payment.loading && <div className="loading">Loading&#8230;</div>}
          <div className="col-xl-12 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">Billing</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Your subscription</h6>
                  <div className="pl-lg-4">
                    <Table columns={[
                      {
                        title: 'Plan',
                        key: 'plan',
                        render: (text, record) => <span>{record.plan.nickname} ({record.plan.interval}ly)</span>
                      },
                      {
                        title: 'Started on',
                        key: 'startedOn',
                        render: (text, record) => <span>{moment.unix(record.plan.created).format('DD/MM/YY')}</span>
                      },
                      {
                        title: 'Price',
                        key: 'price',
                        render: (text, record) => <span>{record.plan.amount}{record.plan.currency} / {record.plan.interval}</span>
                      },
                      {
                        title: 'Billing period',
                        key: 'billingPeriod',
                        render: (text, record) => {
                          if (moment.unix(record.trial_end).isAfter(moment()))
                            return <span>Trial ends on {moment.unix(record.trial_end).format('DD/MM/YY')}</span>
                          else
                            return <span>Plan renew on {moment.unix(record.current_period_end).format('DD/MM/YY')}</span>
                        }
                      },
                      {
                        title: 'Actions',
                        key: 'action',
                        render: (text, record) => <Button type="danger">Cancel subscription</Button>
                      },
                    ]} dataSource={this.props.payment.s_customer.subscriptions.data}/>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Your payment methods</h6>
                  <div className="pl-lg-4">
                    <Table columns={[
                      {
                        title: 'Credit card',
                        key: 'creditcard',
                        render: (text, record) => <span>{record.brand} ending in {record.last4}</span>
                      },
                      {
                        title: 'Expiration date',
                        key: 'expiration',
                        render: (text, record) => <span>{record.exp_month}/{record.exp_year}</span>
                      },
                      {
                        title: '',
                        key: 'default',
                        render: (text, record) => {
                          if (record.id === this.props.payment.s_customer.default_source)
                            return <span><Button type="primary" onClick={()=> this.setState({...this.state, showNewCardForm: true})}>New payment method</Button></span>
                        }
                      },
                    ]} dataSource={this.props.payment.s_customer.sources.data}/>

                  </div>

                  <div>
                  <pre>
                    {JSON.stringify(this.props.payment, null, 2)}
                  </pre>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <div>
                <Drawer
                  title={`Update card`}
                  placement="right"
                  closable={true}
                  onClose={() => this.setState({...this.state, showNewCardForm: false})}
                  visible={this.state.showNewCardForm}
                  width={'60%'}
                >
                  <Card>
                    <CardElement onChange={(event) => {this.showCardError(event.error)}} style={{base: {fontSize: '18px'}, border: '1px solid black'}}/>
                    <p style={{color: 'red'}} id={'card-errors'}></p>
                    <br/>
                    <Button htmlType="submit" disabled={this.state.cardError} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.payment.loading || this.state.loading ? 'Wait a sec\', should not take long' : 'Add this new card !'}</Button>
                  </Card>

                </Drawer>
            </div>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPaymentCustomerInfo: () => dispatch(fetchCustomerAction()),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    payment: state.payment
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Billing));
