'use strict'

class subscription {
  get rules () {
    return {
      firstname: 'required',
      lastname: 'required',
      token: 'required',
      planId: 'required',
    }
  }

  get data () {
    const requestBody = this.ctx.request.all();
    requestBody.firstname = (requestBody.firstname) ? requestBody.firstname.trim().toLowerCase() : null;
    requestBody.lastname = (requestBody.lastname) ? requestBody.lastname.trim().toLowerCase() : null;
    requestBody.token = (requestBody.token) ? requestBody.token.trim() : null;
    requestBody.planId = (requestBody.planId) ? requestBody.planId.trim() : null;
    return requestBody
  }
}

module.exports = subscription;
