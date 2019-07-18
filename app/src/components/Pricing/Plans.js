/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pricing.scss';

class Plans extends React.Component {
  render() {
    return (
      <div className="pricing-plan">
        <img
          src={this.props.plan.img}
          className="pricing-img"
          alt="Plan logo"
        />
        <h2 className="pricing-header">{this.props.plan.title}</h2>
        <ul className="pricing-features">
          {this.props.plan.features.map(feature => (
            <li key={feature} className="pricing-features-item">
              {feature}
            </li>
          ))}
        </ul>
        <span className="pricing-price">{this.props.plan.price}</span>

        {this.props.user.subscriptions.data.length > 0 &&
          this.props.user.subscriptions.data[0].plan.id ===
            this.props.plan.id && <p>Current plan</p>}

        {this.props.user.subscriptions.data.length === 0 && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <a
            href="#"
            className="pricing-button"
            onClick={() => this.props.selectPlan(this.props.plan)}
          >
            Sign up
          </a>
        )}
        {this.props.user.subscriptions.data.length > 0 &&
          this.props.user.subscriptions.data[0].plan.id !==
            this.props.plan.id && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <a
              href="#"
              className="pricing-button"
              onClick={() => this.props.selectPlan(this.props.plan)}
            >
              Change plan
            </a>
          )}
      </div>
    );
  }
}

export default withStyles(s)(Plans);

Plans.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  plan: PropTypes.object.isRequired,
  selectPlan: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
