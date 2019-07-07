'use strict';

const Schema = use('Schema');

class SubscriptionSchema extends Schema {
  up () {
    this.create('subscriptions', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.json('subscription').notNullable();
      table.string('stripe_plan_id');

      table.timestamps();
    })
  }

  down () {
    this.drop('subscriptions');
  }
}

module.exports = SubscriptionSchema;
