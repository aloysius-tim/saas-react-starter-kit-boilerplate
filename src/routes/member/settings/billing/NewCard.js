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
import {addNewCardAction} from "../../../../actions/paymentActions";
import {connect} from "react-redux";
import { Button, Drawer } from 'antd';
import stripe from "../../../../config/stripe";
import {CardElement, injectStripe} from "react-stripe-elements";
import Card from "../../../../components/Layout/Card";
import {toastr} from "react-redux-toastr";

class NewCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stripe: null,
      loading: false,
      cardError: false,
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

  addNewCard = (ev) => {
    ev.preventDefault();

    if (!this.state.cardError) {
      // https://stripe.com/docs/stripe-js/reference#stripe-create-token
      this.props.stripe.createToken({type: 'card'})
        .then(token => {
          if (token.error) {
            this.showCardError(token.error);
            this.setState({...this.state, loading: false});
          } else {
            this.props.addNewCardAction(token.token.id);
            this.setState({...this.state, loading: false});
            this.props.close();
          }
        });
    } else this.setState({...this.state, loading: false});
  };

  render() {
    return (
      <div>
        <Drawer
          title={`Update card`}
          placement="right"
          closable={true}
          onClose={() => this.props.close()}
          visible={this.props.showNewCardForm}
          width={'60%'}
        >
          <Card>
            <CardElement onChange={(event) => {this.showCardError(event.error)}} style={{base: {fontSize: '18px'}, border: '1px solid black'}}/>
            <p style={{color: 'red'}} id={'card-errors'}></p>
            <br/>
            <Button htmlType="submit" onClick={this.addNewCard} disabled={this.props.payment.loading || this.state.cardError} style={{width: '100%', height: '50px', margin: 'auto', marginTop: '5px'}} type={'primary'}>{this.props.payment.loading ? 'Wait a sec\', should not take long' : 'Add this new card !'}</Button>
          </Card>

        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewCardAction: (token) => dispatch(addNewCardAction(token)),
});

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    payment: state.payment
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(injectStripe(NewCard)));
