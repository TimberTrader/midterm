
exports.seed = function(knex, Promise) {

  return knex('orders').del()
    .then(function () {
      return Promise.all([
        knex('orders').insert({order_time: 0830, customer: 'Rocky', customer_phone: 4037775555}),
        knex('orders').insert({order_time: 0831, customer: 'Brayden', customer_phone: 4037776666}),
        knex('orders').insert({order_time: 0832, customer: 'Darren', customer_phone: 4037778888})
      ]);
    });
};
