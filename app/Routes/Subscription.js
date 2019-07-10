'use strict';

const Route = use('Route');

module.exports = () => {
  Route.post('/subscribe', 'SubscriptionController.subscribeNewCustomer')
    .validator('subscription/subscribe')
    .middleware('jwtAuth');

  Route.get('/customer/me', 'SubscriptionController.getCustomer')
    .middleware('jwtAuth');
};


