'use strict';

const Route = use('Route');

module.exports = () => {
  Route.get('', 'UserController.me').middleware('jwtAuth');
};

