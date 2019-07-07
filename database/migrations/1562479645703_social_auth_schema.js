'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SocialAuthSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('provider_id').nullable();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = SocialAuthSchema
