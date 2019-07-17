'use strict';

const Route = use('Route');

module.exports = () => {
  Route.get('/onboarded', 'UserController.userOnboarded').middleware('jwtAuth');
  Route.get('/me', 'AuthController.me').middleware('jwtAuth');
};


