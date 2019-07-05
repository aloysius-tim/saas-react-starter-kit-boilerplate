'use strict';

const Route = use('Route');

module.exports = () => {
  Route.get('/onboarded', 'UserController.userOnboarded');
};


