/* eslint-disable react/forbid-prop-types,jsx-a11y/anchor-is-valid,jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
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
import Loader from 'react-loader-advanced';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import s from './Login.scss';
import {
  loginAction,
  resetPasswordAction,
  socialLoginAction,
} from '../../../actions/authActions';
import AuthService from '../../../services/AuthService';
import { CONST } from '../../../../env';
import Link from '../../../components/Link';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResetForm: false,
      email: null,
    };
    this.authService = new AuthService();
  }

  // eslint-disable-next-line react/sort-comp
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginAction(values);
      }
    });
  };

  componentDidMount() {
    if (this.props.token) {
      this.props.socialLoginAction(this.props.token);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        {(this.props.token || this.props.auth.loading) && (
          <div className="loading">Loading&#8230;</div>
        )}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome back!</h1>
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
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <Loader show={this.props.auth.loading} message="loading">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      {AuthService.getAuthProvider().facebook && (
                        <a
                          href={`${CONST.apiUrl}/auth/facebook`}
                          className="btn btn-neutral btn-icon"
                        >
                          <span className="btn-inner--icon">
                            <img
                              src="/assets/img/icons/common/facebook.png"
                              alt="Facebook logo"
                            />
                          </span>
                          <span className="btn-inner--text">Facebook</span>
                        </a>
                      )}
                      {AuthService.getAuthProvider().github && (
                        <a
                          href={`${CONST.apiUrl}/auth/github`}
                          className="btn btn-neutral btn-icon"
                        >
                          <span className="btn-inner--icon">
                            <img
                              src="/assets/img/icons/common/github.svg"
                              alt="Github logo"
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </a>
                      )}
                      {AuthService.getAuthProvider().google && (
                        <a
                          href={`${CONST.apiUrl}/auth/google`}
                          className="btn btn-neutral btn-icon"
                        >
                          <span className="btn-inner--icon">
                            <img
                              src="/assets/img/icons/common/google.svg"
                              alt="Google logo"
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </a>
                      )}
                      {AuthService.getAuthProvider().foursquare && (
                        <a
                          href={`${CONST.apiUrl}/auth/foursquare`}
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
                          href={`${CONST.apiUrl}/auth/instagram`}
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
                          href={`${CONST.apiUrl}/auth/linkedin`}
                          className="btn btn-neutral btn-icon"
                        >
                          <span className="btn-inner--icon">
                            <img
                              src="/assets/img/icons/common/linkedin.svg"
                              alt="Linkedin logo"
                            />
                          </span>
                          <span className="btn-inner--text">Linkedin</span>
                        </a>
                      )}
                      {AuthService.getAuthProvider().twitter && (
                        <a
                          href={`${CONST.apiUrl}/auth/twitter`}
                          className="btn btn-neutral btn-icon"
                        >
                          <span className="btn-inner--icon">
                            <img
                              src="/assets/img/icons/common/twitter.png"
                              alt="Twitter logo"
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
                        <small>Or sign in with credentials</small>
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
                          {getFieldDecorator('password', {
                            rules: [
                              {
                                required: true,
                                message: 'Please input your Password!',
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
                          {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                          })(<Checkbox>Remember me</Checkbox>)}

                          <div className="text-center">
                            <Button
                              size="large"
                              type="button"
                              className="btn btn-primary my-4"
                              htmlType="submit"
                            >
                              Log in
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
                        By continuing, you agree to our{' '}
                        <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                        <Link to="/terms-and-conditions">Terms of Use</Link>.
                      </i>
                    </div>
                  )}
                </div>
              </Loader>
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
                  <Link to="/auth/register" className="text-light">
                    <small>Create new account</small>
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

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);

const mapDispatchToProps = dispatch => ({
  resetPassword: email => dispatch(resetPasswordAction(email)),
  loginAction: data => dispatch(loginAction(data)),
  socialLoginAction: data => dispatch(socialLoginAction(data)),
});

const mapStateToProps = (state /* , ownProps */) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(WrappedNormalLoginForm),
);

Login.propTypes = {
  auth: PropTypes.any.isRequired,
  form: PropTypes.any.isRequired,
  loginAction: PropTypes.any.isRequired,
  resetPassword: PropTypes.any.isRequired,
  socialLoginAction: PropTypes.any.isRequired,
  // eslint-disable-next-line react/require-default-props
  token: PropTypes.any,
};
