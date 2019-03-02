
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', function (table) {
      table.increments('id'),
      table.integer('order_time'),
      table.string('customer').notNullable,
      table.bigInteger('customer_phone').notNullable
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orders');
};
