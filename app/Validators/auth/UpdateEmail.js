'use strict'

class UpdateEmail {

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get sanitizationRules() {
    return {
      // it has prblm with dots in email
      // me.amitkhare@gmail.com => meamitkhare@gmail.com
      // email: 'normalize_email'
    }
  }
  
  get data () {
    const requestBody = this.ctx.request.all()
    requestBody.email = (requestBody.email) ? requestBody.email.trim().toLowerCase() : null
    return requestBody
  }
  
  get messages () {
    return {
      'email.required': 'Email address can\'t be empty.',
      'email.email': 'Email address is not valid',
      'password.required': 'Password can\'t be empty.'
    }
  }
  
  async fails (errors) {
    return this.ctx.response.status(400).json({ 
        message: "Shoot! Something is wrong with your request.",
        errors: errors
    })
  }

}

module.exports = UpdateEmail
