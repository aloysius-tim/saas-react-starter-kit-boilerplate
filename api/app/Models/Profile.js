'use strict';

const Model = use('Model');

class Profile extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeCreate', ['ProfileHook.setDefaults']);
    this.addHook('afterFind', ['ProfileHook.setAvatar']);
    this.addHook('afterFetch', ['ProfileHook.setAvatars']);
  }

  // static getDisplayname() {
  //   return this.first_name + ' ' + this.last_name
  // }

  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id');
  }
}

module.exports = Profile;
