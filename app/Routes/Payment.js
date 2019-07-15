'use strict';

const Route = use('Route');

module.exports = () => {
  Route.post('/subscribe', 'PaymentController.subscribeNewCustomer')
    .validator('payment/subscribe')
    .middleware('jwtAuth');
  Route.post('/newCreditCard', 'PaymentController.newCreditCard')
    .validator('payment/newCreditCard')
    .middleware('jwtAuth');

  Route.get('/customer/me', 'PaymentController.getCustomer')
    .middleware('jwtAuth');
};


