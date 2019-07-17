'use strict'
const { hooks } = use('@adonisjs/ignitor')

hooks.after.providersRegistered(() => {
  const View = use('Adonis/Src/View')
  const Env = use('Env')
  
  View.global('host', function () {
    const address = Env.get('APP_URL', '127.0.0.1:3333')
    return this.safe( address )
  })
  
  View.global('appName', function () {
    const address = Env.get('APP_NAME', 'Adonis API Starter')
    return this.safe( address )
  })
  
})

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('InvalidRefreshToken', (error, { response }) => {
    return response.status(401).json({ message: 'Invalid Refresh Token'});
  })
  
  Exception.handle('HttpException', (error, { response }) => {
    return response.status(404).json({ message: 'Resource not found.'});
  })

  const Env = use('Env')
  const View = use('View')

  View.global('productName', function () {
    return Env.get('APP_NAME')
  });
  View.global('appUrl', function () {
    return Env.get('APP_URL')
  });
  View.global('apiUrl', function () {
    return Env.get('API_URL')
  });
  View.global('docUrl', function () {
    return Env.get('DOC_URL')
  });
  View.global('customerServiceEmail', function () {
    return Env.get('CUSTOMER_SERVICE_EMAIL')
  });
  View.global('emailSenderName', function () {
    return Env.get('EMAIL_SENDER_NAME')
  });
  
});
