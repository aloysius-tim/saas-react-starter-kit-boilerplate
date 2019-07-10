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
import s from './Onboarding.css';
import {Drawer, Button, Input, Form, Icon} from 'antd';
import moment from "moment";
import {toastr} from "react-redux-toastr";
import Card from "../../../components/Layout/Card";
import PricingPlan from "../../../components/Pricing/PricingPlan";
import {paymentAction} from "../../../actions/paymentActions";
import {connect} from "react-redux";

class Pricing extends React.Component {

  constructor(props){
    super(props);
    this.selectPlan = this.selectPlan.bind(this);
    this.state = {
      selectedPlan: null,
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

  selectPlan(plan) {
    this.setState({
      selectedPlan: plan,
      visible: true
    });
    console.log('Selected Plan: ', plan)
  };

  handlePayment = (ev) => {
    ev.preventDefault();

    if (this.hasErrors(this.props.form.getFieldsError()))
      return;

    let firstname;
    let lastname;
    this.setState({...this.state, loading: true});

    this.props.form.validateFields((err, values) => {
      firstname = values.firstname;
      lastname = values.lastname;

      if (!err && !this.state.cardError){

        // https://stripe.com/docs/stripe-js/reference#stripe-create-token
        this.props.stripe.createToken({type: 'card'})
          .then(token => {
            if (token.error){
              this.showCardError(token.error);
              this.setState({...this.state, loading: false});
            } else {
              let paymentRequest = {
                firstname,
                lastname,
                token: token.token.id,
                plan: this.state.selectedPlan
              };
              console.log(token);

              this.props.paymentAction(paymentRequest);
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
        <div className="container">
          <div className="panel pricing-table">
            {stripe.plans.map(plan => <PricingPlan plan={plan} key={plan.id} selectPlan={this.selectPlan}/>)}
          </div>
        </div>


        {
          this.state.selectedPlan &&
          <Drawer
            title={`Subscribe to ${this.state.selectedPlan.title}`}
            placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible && !this.props.onboarding.subscribed}
            width={'60%'}
          >
            <Card>
              <div>
                <div>
                  <h3 className={'alignleft'}>Price:</h3>
                  <h3 className={'alignright'}>{this.state.selectedPlan.price} €</h3>
                </div>
                <div style={{clear: 'both'}}></div>

                <div>
                  <h3 className={'alignleft'}>Trial ends:</h3>
                  <h3 className={'alignright'}>{moment(moment()).add(1, 'days').format("MMM Do")}</h3>
                </div>
                <div style={{clear: 'both'}}></div>

                <hr/>

                <p>Your credit card will not be charged until your trial periods ends.</p>
                <p>We'll remind you a few days before your trial ends.</p>
                <p>If you decide Rewardly isn't right for you, contact us within 30 days of being billed and we'll give you a full refund - no questions asked.</p>
              </div>
            </Card>

            <Card>
              <Form onSubmit={this.handlePayment} style={{width: '100%'}}>
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
                  <Button htmlType="submit" disabled={this.hasErrors(getFieldsError()) || this.props.onboarding.loading || this.state.loading} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.onboarding.loading || this.state.loading ? 'Wait a sec\', should not take long' : 'Pay !'}</Button>
                </Form.Item>
              </Form>
            </Card>

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
    onboarding: state.onboarding
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Form.create({ name: 'card' })(injectStripe(Pricing))));
