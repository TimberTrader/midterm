
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('menus', function (table) {
      table.increments('id');
      table.string('item_name').notNullable;
      table.string('description').notNullable;
      table.integer('price').notNullable
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('order_items');
};
