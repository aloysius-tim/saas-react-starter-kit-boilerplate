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
import stripe from '../../../config/stripe'
import {injectStripe} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';
import s from './Subscription.css';
import {Drawer, Button, Input, Form, Icon} from 'antd';
import moment from "moment";
import {toastr} from "react-redux-toastr";
import Card from "../../../components/Layout/Card";
import PricingPlan from "../../../components/Pricing/PricingPlan";
import {paymentAction} from "../../../actions/paymentActions";
import {connect} from "react-redux";
import AuthService from "../../../services/AuthService";

class Pay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      cardError: false,
    }
  }

  componentDidMount(){
    this.props.form.validateFields();
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]) || this.state.cardError;
  };

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

  subscribe = () => {
    let planId = this.props.monthly ? this.props.selectedPlan.id : this.props.selectedPlan.yearly;
    this.props.paymentAction({planId: planId, sourceToken: null});
    this.setState({...this.state, loading: false});
    this.props.close();
  };

  addCardAndSubscribe = (ev) => {
    let planId = this.props.monthly ? this.props.selectedPlan.id : this.props.selectedPlan.yearly;

    ev.preventDefault();

    if (this.hasErrors(this.props.form.getFieldsError()))
      return;

    let firstname, lastname;
    this.setState({...this.state, loading: true});

    this.props.form.validateFields((err, values) => {
      firstname = values.firstname;
      lastname = values.lastname;

      var ownerInfo = {
        owner: {
          name: `${firstname} ${lastname}`,
          email: AuthService.loggedIn().data.user.email
        },
      };

      if (!err && !this.state.cardError){
        // https://stripe.com/docs/stripe-js/reference#stripe-create-token
        this.props.stripe.createToken({type: 'card'}, ownerInfo)
          .then(token => {
            if (token.error){
              this.showCardError(token.error);
              this.setState({...this.state, loading: false});
            } else {
              let paymentRequest = {
                firstname,
                lastname,
                sourceToken: token.token.id,
                planId: planId
              };
              this.props.paymentAction(paymentRequest);
              this.props.close();
              this.setState({...this.state, loading: false});
            }
          });
      } else this.setState({...this.state, loading: false});
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const firstnameError = getFieldError('firstname');
    const lastnameError = getFieldError('lastname');

    return (
      <div className="background" style={{zIndex: '0'}}>
        {
          this.props.selectedPlan &&
          <Drawer
            title={`Subscribe to ${this.props.selectedPlan.title}`}
            placement="right"
            closable={true}
            onClose={this.props.close}
            visible={this.props.visible}
            width={'60%'}
          >
            <Card>
              <div>
                <div>
                  <h3 className={'alignleft'}>Price:</h3>
                  <h3 className={'alignright'}>
                    {
                      this.props.monthly &&
                      this.props.selectedPlan.price
                    }
                    {
                      !this.props.monthly &&
                      this.props.selectedPlan.yearlyPrice
                    }
                    €</h3>
                </div>
                <div style={{clear: 'both'}}></div>

                {
                  !this.props.payment.haveSubscription &&
                  <>
                    <div>
                      <h3 className={'alignleft'}>Trial ends:</h3>
                      <h3 className={'alignright'}>{moment(moment()).add(this.props.selectedPlan.trialDays, 'days').format("MMM Do")}</h3>
                    </div>
                    <div style={{clear: 'both'}}></div>

                    <hr/>

                    <p>Your credit card will not be charged until your trial periods ends.</p>
                    <p>We'll remind you a few days before your trial ends.</p>
                    <p>If you decide Rewardly isn't right for you, contact us within 30 days of being billed and we'll give you a full refund - no questions asked.</p>
                  </>
                }
              </div>
            </Card>

            {
              !this.props.payment.haveCard &&
              <Card>
                <Form style={{width: '100%'}}>
                  <Form.Item validateStatus={firstnameError ? 'error' : ''} help={firstnameError || ''}>
                    {getFieldDecorator('firstname', {
                      rules: [{ required: true, message: 'Please input your first name!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="FirstName"
                      />,
                    )}
                  </Form.Item>

                  <Form.Item validateStatus={lastnameError ? 'error' : ''} help={lastnameError || ''}>
                    {getFieldDecorator('lastname', {
                      rules: [{ required: true, message: 'Please input your Last Name!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Last Name"
                      />,
                    )}
                  </Form.Item>

                  <br/>
                  <CardElement onChange={(event) => {this.showCardError(event.error)}} style={{base: {fontSize: '18px'}, border: '1px solid black'}}/>
                  <p style={{color: 'red'}} id={'card-errors'}></p>
                  <br/>
                  <Form.Item>
                    <Button onClick={this.addCardAndSubscribe} htmlType="submit" disabled={this.hasErrors(getFieldsError()) || this.props.payment.loading || this.state.loading} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.payment.loading || this.state.loading ? 'Wait a sec\', should not take long' : 'Subscribe !'}</Button>
                  </Form.Item>
                </Form>
              </Card>
            }
            {
              /** User have already card but no attached plan **/
              this.props.payment.haveCard && !this.props.payment.haveSubscription &&
              <Button onClick={this.subscribe} disabled={this.props.payment.loading || this.state.loading} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.payment.loading || this.state.loading ? 'Wait a sec\', should not take long' : 'Subscribe !'}</Button>
            }
            {
              /** User upgrade or donwgrade his plan **/
              this.props.payment.haveCard && this.props.payment.haveSubscription &&
              <Button onClick={this.subscribe} htmlType="submit" disabled={this.props.payment.loading || this.state.loading} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.payment.loading || this.state.loading ? 'Wait a sec\', should not take long' : 'Update subscription !'}</Button>
            }

          </Drawer>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  paymentAction: data => dispatch(paymentAction(data)),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    payment: state.payment
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Form.create({ name: 'card' })(injectStripe(Pay))));
