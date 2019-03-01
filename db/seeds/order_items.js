
exports.seed = function(knex, Promise) {

  return knex('orders').del()
      .then(function () {
      return Promise.all([
        knex('orders').insert({id: 1, order_time: 830, customer: 'Danila', customer_phone: 4037775555}),
        knex('orders').insert({id: 2, order_time: 831, customer: 'Brayden', customer_phone: 4037776666}),
        knex('orders').insert({id: 3, order_time: 832, customer: 'Darren', customer_phone: 4037778888})
      ]);
    }).then(function () {
      return knex('menus').del()
    }).then(function () {
      return Promise.all([
        knex('menus').insert({id: 10, item_name: 'Coffee, Large', description: 'even more good coffee', price: 195}),
        knex('menus').insert({id: 11, item_name: 'Coffee, Medium', description: 'more good coffee', price: 175}),
        knex('menus').insert({id: 12, item_name: 'Coffee, Small', description: 'good coffee', price: 165}),
        knex('menus').insert({id: 13, item_name: 'Honey Cruller', description: 'a good doughnut', price: 95}),
        knex('menus').insert({id: 14, item_name: 'Chocolate Glaze', description: 'a good doughnut', price: 95}),
        knex('menus').insert({id: 15, item_name: 'Apple Fritter', description: 'a good doughnut', price: 95}),
        knex('menus').insert({id: 16, item_name: 'Boston Creme', description: 'a good doughnut', price: 95}),
        knex('menus').insert({id: 17, item_name: 'Old Fashioned', description: 'a good doughnut', price: 95})
      ]);
    }).then(function () {
      return knex('order_items').del()
    })
     .then(function () {
      return Promise.all([
        knex('order_items').insert({order_id: 1, menu_item: 10, quantity: 1}),
        knex('order_items').insert({order_id: 1, menu_item: 15, quantity: 1}),
        knex('order_items').insert({order_id: 2, menu_item: 11, quantity: 1}),
        knex('order_items').insert({order_id: 2, menu_item: 14, quantity: 1}),
        knex('order_items').insert({order_id: 3, menu_item: 12, quantity: 1}),
        knex('order_items').insert({order_id: 3, menu_item: 16, quantity: 1})
      ]);
    });
};
