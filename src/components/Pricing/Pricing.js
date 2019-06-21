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
import s from './Pricing.css';
import stripe from '../../config/stripe'
import PricingPlan from "./PricingPlan";
import {injectStripe} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';
import { Drawer, Button } from 'antd';
import Card from "../Layout/Card";
import moment from "moment";

class Pricing extends React.Component {

  constructor(props){
    super(props);
    this.pay = this.pay.bind(this);
    this.state = {
      selectedPlan: null,
      visible: false
    }
  }

  pay(plan) {
    this.setState({
      selectedPlan: plan,
      visible: true
    });
    console.log('Selected Plan: ', plan)
  };

  render() {
    return (
      <div className="background" style={{zIndex: '0'}}>
        <div className="container">
          <div className="panel pricing-table">
            {stripe.plans.map(plan => <PricingPlan plan={plan} key={plan.id} pay={this.pay}/>)}
          </div>
        </div>


        {
          this.state.selectedPlan &&
          <Drawer
            title={`Subscribe to ${this.state.selectedPlan.title}`}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
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
              <CardElement style={{base: {fontSize: '18px'}, border: '1px solid black'}}/>
              <br/>
              <Button style={{width: '80%', height: '50px', margin: 'auto', marginTop: '30px'}} type={'primary'}>Pay !</Button>
            </Card>

          </Drawer>
        }
      </div>
    )
  }
}

export default withStyles(s)(injectStripe(Pricing));
