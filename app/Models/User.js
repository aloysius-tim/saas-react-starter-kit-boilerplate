'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', ['UserHook.setDefaults', 'UserHook.hashPassword'])
    this.addHook('afterCreate', ['UserHook.createProfile'])
  }

  static get primaryKey() {
    return 'id'
  }
  // Relations
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  profile () {
    return this.hasOne('App/Models/Profile')
  }

  logs () {
    return this.hasMany('App/Models/Log')
  }

  // roles
  static get roles () {
    return ['superadmin', 'admin', 'manager', 'moderator', 'member']
  }

  // hide fields
  static get hidden () {
    return ['password', 'reset_token', 'confirmation_token']
  }

}

module.exports = User;
