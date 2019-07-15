'use strict'

class newCreditCard {
  get rules () {
    return {
      token: 'required',
    }
  }

  get data () {
    const requestBody = this.ctx.request.all();
    requestBody.token = (requestBody.token) ? requestBody.token.trim() : null;
    return requestBody
  }
}

module.exports = newCreditCard;
