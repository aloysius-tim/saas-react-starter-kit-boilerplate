/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card.css';
import Link from '../../Link';

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card shadow">
            {
              this.props.header &&
              <div className="card-header bg-transparent">
                {this.props.header}
              </div>
            }

            <div className="card-body">
              <div className={'row'}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Card);
