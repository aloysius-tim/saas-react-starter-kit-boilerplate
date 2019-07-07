'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('uid').notNullable()
      table.string('username', 40).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).nullable()
      table.string('role')
      table.boolean('verified').defaultTo(false)
      table.string('confirmation_token')
      table.string('reset_token')
      table.boolean('banned')

      table.boolean('onboarded').defaultTo(false);
      table.json('customer');
      table.string('stripe_cus_id');

      table.string('facebook_id').nullable();
      table.string('google_id').nullable();
      table.string('github_id').nullable();
      table.string('instagram_id').nullable();
      table.string('foursquare_id').nullable();
      table.string('twitter_id').nullable();
      table.string('linkedin_id').nullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
