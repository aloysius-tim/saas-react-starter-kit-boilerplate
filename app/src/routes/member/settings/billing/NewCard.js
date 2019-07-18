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
import { toastr } from 'react-redux-toastr';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { connect } from 'react-redux';
import { Button, Drawer, Form, Icon, Input } from 'antd';
import s from './Billing.css';
import { addNewCardAction } from '../../../../actions/paymentActions';
import Card from '../../../../components/Layout/Card';
import AuthService from '../../../../services/AuthService';

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      loading: false,
      cardError: false,
    };
  }

  hasErrors = fieldsError =>
    Object.keys(fieldsError).some(field => fieldsError[field]) ||
    this.state.cardError;

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

  addCard = ev => {
    ev.preventDefault();

    if (this.hasErrors(this.props.form.getFieldsError())) return;

    let firstname;
    let lastname;
    this.setState({ ...this.state, loading: true });

    this.props.form.validateFields((err, values) => {
      firstname = values.firstname;
      lastname = values.lastname;

      const ownerInfo = {
        owner: {
          name: `${firstname} ${lastname}`,
          email: AuthService.loggedIn().data.user.email,
        },
      };

      if (!err && !this.state.cardError) {
        // https://stripe.com/docs/stripe-js/reference#stripe-create-token
        this.props.stripe
          .createToken({ type: 'card' }, ownerInfo)
          .then(token => {
            if (token.error) {
              this.showCardError(token.error);
              this.setState({ ...this.state, loading: false });
            } else {
              this.props.addNewCardAction(token.token.id);
              this.props.close();
              this.setState({ ...this.state, loading: false });
            }
          });
      } else this.setState({ ...this.state, loading: false });
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
    } = this.props.form;
    const firstnameError = getFieldError('firstname');
    const lastnameError = getFieldError('lastname');

    return (
      <div>
        <Drawer
          title="Add a new card"
          placement="right"
          closable
          onClose={() => this.props.close()}
          visible={this.props.showNewCardForm}
          width="60%"
        >
          <Card>
            <Form style={{ width: '100%' }}>
              <Form.Item
                validateStatus={firstnameError ? 'error' : ''}
                help={firstnameError || ''}
              >
                {getFieldDecorator('firstname', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="FirstName"
                  />,
                )}
              </Form.Item>

              <Form.Item
                validateStatus={lastnameError ? 'error' : ''}
                help={lastnameError || ''}
              >
                {getFieldDecorator('lastname', {
                  rules: [
                    { required: true, message: 'Please input your Last Name!' },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Last Name"
                  />,
                )}
              </Form.Item>

              <br />
              <CardElement
                onChange={event => {
                  this.showCardError(event.error);
                }}
                style={{
                  base: { fontSize: '18px' },
                  border: '1px solid black',
                }}
              />
              <p style={{ color: 'red' }} id="card-errors" />
              <br />
              <Form.Item>
                <Button
                  onClick={this.addCard}
                  htmlType="submit"
                  disabled={
                    this.hasErrors(getFieldsError()) ||
                    this.props.payment.loading ||
                    this.state.loading
                  }
                  style={{
                    width: '100%',
                    height: '50px',
                    margin: 'auto',
                    marginTop: '5px',
                  }}
                  type="primary"
                >
                  {this.props.payment.loading || this.state.loading
                    ? "Wait a sec', should not take long"
                    : 'Add this card !'}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewCardAction: token => dispatch(addNewCardAction(token)),
});

const mapStateToProps = (state /* , ownProps */) => ({
  payment: state.payment,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(Form.create({ name: 'card' })(injectStripe(NewCard))),
);

NewCard.propTypes = {
  addNewCardAction: PropTypes.any.isRequired,
  close: PropTypes.any.isRequired,
  form: PropTypes.any.isRequired,
  payment: PropTypes.any.isRequired,
  showNewCardForm: PropTypes.any.isRequired,
  stripe: PropTypes.any.isRequired,
};
