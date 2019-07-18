'use strict';

class subscription {
  get rules () {
    return {
      // firstname: 'required',
      // lastname: 'required',
      // token: 'required',
      planId: 'required'
    };
  }

  get data () {
    const requestBody = this.ctx.request.all();
    // eslint-disable-next-line max-len
    requestBody.firstname = (requestBody.firstname) ? requestBody.firstname.trim().toLowerCase() : null;
    // eslint-disable-next-line max-len
    requestBody.lastname = (requestBody.lastname) ? requestBody.lastname.trim().toLowerCase() : null;
    requestBody.token = (requestBody.token) ? requestBody.token.trim() : null;
    requestBody.planId = (requestBody.planId) ? requestBody.planId.trim() : null;
    return requestBody;
  }
}

module.exports = subscription;
