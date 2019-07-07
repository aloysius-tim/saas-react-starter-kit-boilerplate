'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSocialauthSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('facebook_id').nullable();
      table.string('google_id').nullable();
      table.string('github_id').nullable();
      table.string('instagram_id').nullable();
      table.string('foursquare_id').nullable();
      table.string('twitter_id').nullable();
      table.string('linkedin_id').nullable();
    })
  }

  down () {
    this.drop('users');
  }
}

module.exports = UserSocialauthSchema
