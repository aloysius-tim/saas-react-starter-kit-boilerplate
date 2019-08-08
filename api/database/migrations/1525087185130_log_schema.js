'use strict';

const Schema = use('Schema');

class LogSchema extends Schema {
  up () {
    this.create('logs', table => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users')
        .onDelete('CASCADE');
      table.string('level').defaultTo('debug');
      table.string('event');
      table.text('description');
      table.string('ref_id');
      table.string('row_id');
      table.timestamps();
    });
  }

  down () {
    this.drop('logs');
  }
}

module.exports = LogSchema;
