'use strict'

class Forgot {

  get rules () {
    return {
      email: 'required|email'
    }
  }
  
  get data () {
    const requestBody = this.ctx.request.all()
    requestBody.email = (requestBody.email) ? requestBody.email.trim().toLowerCase() : null
    return requestBody
  }
  
  async fails (errors) {
    return this.ctx.response.status(400).json({ 
        message: "Shoot! Something is wrong with your request.",
        errors: errors
    })
  }
  
  get messages () {
    return {
      'email.required': 'Email is required',
      'email.email': 'Enter a valid email address'
    }
  }

}

module.exports = Forgot
