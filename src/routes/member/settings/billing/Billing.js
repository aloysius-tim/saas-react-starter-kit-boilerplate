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
import {
  addNewCardAction, cancelSubscriptionAction,
  deleteCardAction,
  fetchCustomerAction,
  setDefaultCardAction
} from "../../../../actions/paymentActions";
import {connect} from "react-redux";
import {Table, Divider, Tag, Button, Form, Input, Icon, Drawer} from 'antd';
import moment from 'moment';
import stripe from "../../../../config/stripe";
import {CardElement, Elements, injectStripe, StripeProvider} from "react-stripe-elements";
import Pricing from "../../onboarding/Pricing";
import Card from "../../../../components/Layout/Card";
import {toastr} from "react-redux-toastr";
import NewCard from "./NewCard";

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

    this.props.fetchCustomer();
  }

  close = () => {
    this.setState({...this.state, showNewCardForm: false})
  };

  render() {
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
                    <Table pagination={false} columns={[
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
                        render: (text, record) => <Button type="danger" onClick={() => this.props.cancelSubscription(record.id)}>Cancel subscription</Button>
                      },
                    ]} dataSource={this.props.payment.s_customer.subscriptions.data}/>
                    <Button type={'primary'} style={{width: '100%'}}>Subscribe to a plan</Button>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Your payment methods</h6>
                  <div className="pl-lg-4">
                    <Table pagination={false} columns={[
                      {
                        title: 'Credit card',
                        key: 'creditcard',
                        render: (text, record) => <span>{record.brand} ending in {record.last4}</span>
                      },
                      {
                        title: 'Expiration date',
                        key: 'expiration',
                        render: (text, record) => {
                          if (moment(`01/${record.exp_month}/${record.exp_year}`, 'DD/MM/YYYY').isBefore(moment()))
                            return <span style={{color: 'red'}}>Expired</span>;
                          else return <span>{record.exp_month}/{record.exp_year}</span>;
                        }
                      },
                      {
                        title: '',
                        key: 'default',
                        render: (text, record) => {
                          if (record.id === this.props.payment.s_customer.default_source)
                            return <span>Default</span>;
                          else if (moment(`01/${record.exp_month}/${record.exp_year}`, 'DD/MM/YYYY').isBefore(moment()))
                            return <Button type="danger" onClick={() => this.props.deleteCard(record.id)}>Delete</Button>
                          else
                            return (<div>
                                      <Button type="dashed" onClick={() => this.props.setDefaultCard(record.id)}>Make
                                        default</Button>
                                      <Button type="danger" onClick={() => this.props.deleteCard(record.id)}>Delete</Button>
                                    </div>);
                          }
                        }
                    ]} dataSource={this.props.payment.s_customer.sources.data}/>

                    <Button style={{width: '100%'}} type="primary" onClick={()=> this.setState({...this.state, showNewCardForm: true})}>Add new card</Button>
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
            <NewCard showNewCardForm={this.state.showNewCardForm} close={this.close}/>
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCustomer: () => dispatch(fetchCustomerAction()),
  setDefaultCard: (cardId) => dispatch(setDefaultCardAction(cardId)),
  deleteCard: (cardId) => dispatch(deleteCardAction(cardId)),
  cancelSubscription: (subId) => dispatch(cancelSubscriptionAction(subId)),
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
