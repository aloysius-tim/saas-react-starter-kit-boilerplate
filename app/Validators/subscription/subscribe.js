'use strict'

class subscription {
  get rules () {
    return {
      firstname: 'required',
      lastname: 'required',
      token: 'required',
      plan: 'required',
    }
  }

  get data () {
    const requestBody = this.ctx.request.all();
    requestBody.firstname = (requestBody.firstname) ? requestBody.firstname.trim().toLowerCase() : null;
    requestBody.lastname = (requestBody.lastname) ? requestBody.lastname.trim().toLowerCase() : null;
    requestBody.token = (requestBody.token) ? requestBody.token.trim() : null;
    return requestBody
  }
}

module.exports = subscription;
