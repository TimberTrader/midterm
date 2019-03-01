
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('order_items', function (table) {
      table.increments('id');
      table.bigInteger('order_id').references('id').inTable('orders');
      table.bigInteger('menu_item').references('id').inTable('menus');
      table.integer('quantity')
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('order_items');
};
