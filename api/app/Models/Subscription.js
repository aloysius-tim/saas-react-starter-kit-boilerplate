'use strict';

const Model = use('Model');

class Subscription extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id');
  }
}

module.exports = Subscription;
