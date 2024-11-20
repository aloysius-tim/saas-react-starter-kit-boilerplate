/* eslint-disable react/forbid-prop-types */
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
import { Table, Button } from 'antd';
import moment from 'moment';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { toastr } from 'react-redux-toastr';
import NewCard from './NewCard';
import Link from '../../../../components/Link';
import s from './Billing.css';
import {
  cancelSubscriptionAction,
  deleteCardAction,
  fetchCustomerAction,
  getInvoicesAction,
  setDefaultCardAction,
} from '../../../../actions/paymentActions';
import config from '../../../../config';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      loading: false,
      cardError: false,
      showNewCardForm: false,
    };
  }

  // eslint-disable-next-line react/sort-comp
  showCardError = error => {
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

  componentDidMount() {
    if (window.Stripe) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ stripe: window.Stripe(config.stripe.pk) });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({ stripe: window.Stripe(config.stripe.pk) });
      });
    }

    this.props.fetchCustomer();
    // eslint-disable-next-line react/prop-types
    this.props.getInvoices();
  }

  close = () => {
    this.setState({ ...this.state, showNewCardForm: false });
  };

  render() {
    return (
      <div>
        <div className="row">
          {this.props.payment.loading && (
            <div className="loading">Loading&#8230;</div>
          )}
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
                  <h6 className="heading-small text-muted mb-4">
                    Your subscription
                  </h6>
                  <div className="pl-lg-4">
                    <Table
                      pagination={false}
                      columns={[
                        {
                          title: 'Plan',
                          key: 'plan',
                          render: (text, record) => (
                            <span>
                              {record.plan.nickname} ({record.plan.interval}ly)
                            </span>
                          ),
                        },
                        {
                          title: 'Started on',
                          key: 'startedOn',
                          render: (text, record) => (
                            <span>
                              {moment
                                .unix(record.plan.created)
                                .format('DD/MM/YY')}
                            </span>
                          ),
                        },
                        {
                          title: 'Price',
                          key: 'price',
                          render: (text, record) => (
                            <span>
                              {record.plan.amount / 100}
                              {record.plan.currency} / {record.plan.interval}
                            </span>
                          ),
                        },
                        {
                          title: 'Billing period',
                          key: 'billingPeriod',
                          render: (text, record) => {
                            if (
                              moment.unix(record.trial_end).isAfter(moment()) &&
                              !record.cancel_at_period_end
                            )
                              return (
                                <span>
                                  Trial ends on{' '}
                                  {moment
                                    .unix(record.trial_end)
                                    .format('DD/MM/YY')}
                                </span>
                              );
                            else if (record.cancel_at_period_end)
                              return (
                                <span>
                                  Plan will be canceled the{' '}
                                  {moment
                                    .unix(record.cancel_at)
                                    .format('DD/MM/YY')}
                                </span>
                              );
                            return (
                              <span>
                                Plan renew on{' '}
                                {moment
                                  .unix(record.current_period_end)
                                  .format('DD/MM/YY')}
                              </span>
                            );
                          },
                        },
                        {
                          title: 'Actions',
                          key: 'action',
                          render: (text, record) => (
                            <div>
                              {!record.cancel_at_period_end && (
                                <Button
                                  type="danger"
                                  onClick={() =>
                                    this.props.cancelSubscription(record.id)
                                  }
                                >
                                  Cancel subscription
                                </Button>
                              )}
                              <Link to="/member/subscription">
                                <Button type="primary">
                                  Change subscription
                                </Button>
                              </Link>
                            </div>
                          ),
                        },
                      ]}
                      dataSource={
                        this.props.payment.s_customer.subscriptions.data
                      }
                    />
                    {this.props.payment.s_customer.subscriptions.data.length ===
                      0 && (
                      <Link to="/member/subscription">
                        <Button style={{ width: '100%' }} type="primary">
                          Subscribe to a plan
                        </Button>
                      </Link>
                    )}
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">
                    Your payment methods
                  </h6>
                  <div className="pl-lg-4">
                    <Table
                      pagination={false}
                      columns={[
                        {
                          title: 'Credit card',
                          key: 'creditcard',
                          render: (text, record) => (
                            <span>
                              {record.brand} ending in {record.last4}
                            </span>
                          ),
                        },
                        {
                          title: 'Expiration date',
                          key: 'expiration',
                          render: (text, record) => {
                            if (
                              moment(
                                `01/${record.exp_month}/${
                                  record.exp_year
                                }`,
                                'DD/MM/YYYY',
                              ).isBefore(moment())
                            )
                              return (
                                <span style={{ color: 'red' }}>Expired</span>
                              );
                            return (
                              <span>
                                {record.exp_month}/{record.exp_year}
                              </span>
                            );
                          },
                        },
                        {
                          title: '',
                          key: 'default',
                          render: (text, record) => {
                            if (
                              record.id ===
                              this.props.payment.s_customer.default_source
                            )
                              return <span>Default</span>;
                            else if (
                              moment(
                                `01/${record.exp_month}/${
                                  record.exp_year
                                }`,
                                'DD/MM/YYYY',
                              ).isBefore(moment())
                            )
                              return (
                                <Button
                                  type="danger"
                                  onClick={() =>
                                    this.props.deleteCard(record.id)
                                  }
                                >
                                  Delete
                                </Button>
                              );
                            return (
                              <div>
                                <Button
                                  type="dashed"
                                  onClick={() =>
                                    this.props.setDefaultCard(record.id)
                                  }
                                >
                                  Make default
                                </Button>
                                <Button
                                  type="danger"
                                  onClick={() =>
                                    this.props.deleteCard(record.id)
                                  }
                                >
                                  Delete
                                </Button>
                              </div>
                            );
                          },
                        },
                      ]}
                      dataSource={this.props.payment.s_customer.sources.data}
                    />

                    <Button
                      style={{ width: '100%' }}
                      type="primary"
                      onClick={() =>
                        this.setState({ ...this.state, showNewCardForm: true })
                      }
                    >
                      Add new card
                    </Button>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">
                    Your invoices
                  </h6>
                  <div className="pl-lg-4">
                    <Table
                      pagination={false}
                      columns={[
                        {
                          title: 'Receipt number',
                          key: 'receipt_number',
                          render: (text, record) => (
                            <span>{record.number}</span>
                          ),
                        },
                        {
                          title: 'Status',
                          key: 'status',
                          render: (text, record) => (
                            <span>{record.status}</span>
                          ),
                        },
                        {
                          title: 'Date',
                          key: 'period_end',
                          render: (text, record) => (
                            <span>
                              {moment
                                .unix(record.period_end)
                                .format('DD/MM/YY')}
                            </span>
                          ),
                        },
                        {
                          title: 'Ammunt',
                          key: 'amount_due',
                          render: (text, record) => (
                            <span>
                              {record.amount_due / 100} {record.currency}
                            </span>
                          ),
                        },
                        {
                          title: 'Invoice',
                          key: 'hosted_invoice_url',
                          render: (text, record) =>
                            record.hosted_invoice_url ? (
                              <a
                                href={record.hosted_invoice_url}
                                target="_blank"
                              >
                                {(record.status === 'paid' ||
                                  record.status === 'draft') && (
                                  <span>link</span>
                                )}
                                {record.status !== 'paid' &&
                                  record.status !== 'draft' && (
                                    <Button type="danger">PAY NOW</Button>
                                  )}
                              </a>
                            ) : (
                              <span />
                            ),
                        },
                      ]}
                      dataSource={this.props.payment.invoices}
                    />
                  </div>

                  {
                    <div>
                      <pre>{JSON.stringify(this.props.payment, null, 2)}</pre>
                    </div>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>

        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <NewCard
              showNewCardForm={this.state.showNewCardForm}
              close={this.close}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCustomer: () => dispatch(fetchCustomerAction()),
  setDefaultCard: cardId => dispatch(setDefaultCardAction(cardId)),
  deleteCard: cardId => dispatch(deleteCardAction(cardId)),
  cancelSubscription: subId => dispatch(cancelSubscriptionAction(subId)),
  getInvoices: () => dispatch(getInvoicesAction()),
});

const mapStateToProps = (state /* , ownProps */) => ({
  payment: state.payment,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(Billing),
);

Billing.propTypes = {
  cancelSubscription: PropTypes.any.isRequired,
  deleteCard: PropTypes.any.isRequired,
  fetchCustomer: PropTypes.any.isRequired,
  payment: PropTypes.any.isRequired,
  setDefaultCard: PropTypes.any.isRequired,
};
