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

class Plans extends React.Component {

  render() {
    return (
      <div className="pricing-plan">
        <img src={this.props.plan.img} className="pricing-img" />
        <h2 className="pricing-header">{this.props.plan.title}</h2>
        <ul className="pricing-features">
          {
            this.props.plan.features.map(feature => <li key={feature} className="pricing-features-item">{feature}</li>)
          }
        </ul>
        <span className="pricing-price">{this.props.plan.price}</span>
        {
          this.props.user.subscriptions.data.length > 0 && this.props.user.subscriptions.data[0].plan.id === this.props.plan.id &&
          <p>Current plan</p>
        }
        {
          this.props.user.subscriptions.data.length === 0 &&
          <a href="#" className="pricing-button" onClick={() => this.props.selectPlan(this.props.plan)}>Sign up</a>
        }
        {
          (this.props.user.subscriptions.data.length > 0 && this.props.user.subscriptions.data[0].plan.id !== this.props.plan.id) &&
          <a href="#" className="pricing-button" onClick={() => this.props.selectPlan(this.props.plan)}>Change plan</a>
        }
      </div>
    )
  }
}

export default withStyles(s)(Plans);
