'use strict';

class ResetPassword {
  get rules () {
    return {
      token: 'required',
      password: 'required|min:6'
    };
  }

  get data () {
    const requestBody = this.ctx.request.all();
    return requestBody;
  }

  async fails (errors) {
    return this.ctx.response.status(400).json({
      message: 'Shoot! Something is wrong with your request.',
      errors
    });
  }

  get messages () {
    return {
      'token.required': 'Token is required',
      'password.required': 'Password is required',
      'password.min': 'Password needs to be at least 6 characters long.'
    };
  }
}

module.exports = ResetPassword;
