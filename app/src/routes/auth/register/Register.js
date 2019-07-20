/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/forbid-prop-types */
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
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Modal } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';
import AuthService from '../../../services/AuthService';
import Link from '../../../components/Link';
import {
  registerAction,
  resetPasswordAction,
} from '../../../actions/authActions';
import config from '../../../config';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResetForm: false,
      email: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.registerAction(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        {this.props.auth.loading && (
          <div className="loading">Loading&#8230;</div>
        )}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>

        <div className="container mt--8 pb-5">
          {/* Table */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card bg-secondary shadow border-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-4">
                    <small>Sign up with</small>
                  </div>
                  <div className="text-center">
                    {AuthService.getAuthProvider().facebook && (
                      <a
                        href={`${config.api.serverUrl}/auth/facebook`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/facebook.png"
                            alt="facebook logo"
                          />
                        </span>
                        <span className="btn-inner--text">Facebook</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().github && (
                      <a
                        href={`${config.api.serverUrl}/auth/github`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/github.svg"
                            alt="github logo"
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().google && (
                      <a
                        href={`${config.api.serverUrl}/auth/google`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/google.svg"
                            alt="google logo"
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().foursquare && (
                      <a
                        href={`${config.api.serverUrl}/auth/foursquare`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/foursquare.png"
                            alt="foursquare logo"
                          />
                        </span>
                        <span className="btn-inner--text">Foursquare</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().instagram && (
                      <a
                        href={`${config.api.serverUrl}/auth/instagram`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/instagram.png"
                            alt="instagram logo"
                          />
                        </span>
                        <span className="btn-inner--text">Instagram</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().linkedin && (
                      <a
                        href={`${config.api.serverUrl}/auth/linkedin`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/linkedin.svg"
                            alt="linkedin logo"
                          />
                        </span>
                        <span className="btn-inner--text">Linkedin</span>
                      </a>
                    )}
                    {AuthService.getAuthProvider().twitter && (
                      <a
                        href={`${config.api.serverUrl}/auth/twitter`}
                        className="btn btn-neutral btn-icon"
                      >
                        <span className="btn-inner--icon">
                          <img
                            src="/assets/img/icons/common/twitter.png"
                            alt="twitter logo"
                          />
                        </span>
                        <span className="btn-inner--text">Twitter</span>
                      </a>
                    )}
                  </div>
                </div>
                {AuthService.getAuthProvider().password && (
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                      <Form.Item>
                        {getFieldDecorator('email', {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                          ],
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                            }
                            placeholder="Email"
                          />,
                        )}
                      </Form.Item>

                      <Form.Item>
                        {getFieldDecorator('name', {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your full name!',
                            },
                          ],
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                            }
                            placeholder="Name"
                          />,
                        )}
                      </Form.Item>

                      <Form.Item>
                        {getFieldDecorator('password', {
                          rules: [
                            {
                              required: true,
                              message: 'Please input your Password!',
                            },
                            {
                              min: 6,
                              message:
                                'Please provide a stronger password (min 6 characters)',
                            },
                          ],
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="lock"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                              />
                            }
                            type="password"
                            placeholder="Password"
                          />,
                        )}
                      </Form.Item>
                      <Form.Item>
                        <div className="text-center">
                          <Button
                            size="large"
                            type="button"
                            className="btn btn-primary my-4"
                            htmlType="submit"
                          >
                            Register
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                    <i
                      style={{
                        lineHeight: 'none',
                        textAlign: 'center',
                        fontSize: '10px',
                      }}
                    >
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      By clicking the "Register" button, I expressly agree to
                      our <Link to="/terms-and-conditions">Terms of Use</Link>{' '}
                      and understand that my account information will be used
                      according to our{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>.
                    </i>
                  </div>
                )}
              </div>
              <div className="row mt-3">
                {AuthService.getAuthProvider().password && (
                  <div className="col-6">
                    <a
                      onClick={() =>
                        this.setState({ ...this.state, showResetForm: true })
                      }
                      className="text-light"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                )}
                <div className="col-6 text-right">
                  <Link to="/auth/login" className="text-light">
                    <small>Login</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="Reset password"
          visible={this.state.showResetForm}
          onOk={() =>
            this.props.resetPassword(this.state.email) &&
            this.setState({ ...this.state, showResetForm: false })
          }
          onCancel={() =>
            this.setState({ ...this.state, showResetForm: false })
          }
        >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            onChange={e =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerAction: data => dispatch(registerAction(data)),
  resetPassword: email => dispatch(resetPasswordAction(email)),
});

const mapStateToProps = (state /* , ownProps */) => ({
  auth: state.auth,
});

const WrappedNormalRegisterForm = Form.create({ name: 'register_form' })(
  Register,
);

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(WrappedNormalRegisterForm),
);

Register.propTypes = {
  auth: PropTypes.any.isRequired,
  form: PropTypes.any.isRequired,
  registerAction: PropTypes.any.isRequired,
  resetPassword: PropTypes.any.isRequired,
};
