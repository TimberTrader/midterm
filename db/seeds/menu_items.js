
exports.seed = function(knex, Promise) {
  return knex('menus').del()
    .then(function () {
      return Promise.all([
        knex('menus').insert({item_name: 'Coffee, Large', description: 'great coffee, have it with cream or sugar', price: 195}),
        knex('menus').insert({item_name: 'Coffee, Medium', description: 'great coffee, have it with cream or sugar', price: 175}),
        knex('menus').insert({item_name: 'Coffee, Small', description: 'great coffee, have it with cream or sugar', price: 165}),
        knex('menus').insert({item_name: 'Honey Cruller', description: 'a good doughnut', price: 95}),
        knex('menus').insert({item_name: 'Chocolate Glaze', description: 'a good doughnut', price: 95}),
        knex('menus').insert({item_name: 'Apple Fritter', description: 'a good doughnut', price: 95}),
        knex('menus').insert({item_name: 'Boston Creme', description: 'a good doughnut', price: 95}),
        knex('menus').insert({item_name: 'Old Fashioned', description: 'a good doughnut', price: 95})
      ]);
    });
};
