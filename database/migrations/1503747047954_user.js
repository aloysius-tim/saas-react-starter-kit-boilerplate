'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('uid').notNullable()
      table.string('username', 40).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('provider').notNullable()
      table.string('role')
      table.boolean('verified').defaultTo(false)
      table.string('confirmation_token')
      table.string('reset_token')
      table.boolean('banned')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
