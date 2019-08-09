'use strict';

const Route = use('Route');

module.exports = () => {
  Route.get('/', 'AuthController.me').middleware('jwtAuth');
};

