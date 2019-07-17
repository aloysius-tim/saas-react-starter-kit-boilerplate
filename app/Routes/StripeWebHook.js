'use strict';

const Route = use('Route');

module.exports = () => {
  Route.post('/', 'StripeWebHookController.webhook');
};
