'use strict'

const Model = use('Model')

class Log extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Log
