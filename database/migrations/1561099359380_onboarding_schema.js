'use strict'

const Schema = use('Schema')

class OnboardingSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.boolean('onboarded').defaultTo(false);
      table.json('customer');
      table.string('stripe_cus_id');
    })
  }

  down () {
    this.drop('users');
  }
}

module.exports = OnboardingSchema;
