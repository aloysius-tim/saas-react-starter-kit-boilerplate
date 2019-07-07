'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      table.string('name');
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
