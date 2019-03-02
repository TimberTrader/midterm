const knex = require('knex')({
    client     : 'pg',
    connection : require('./knexfile').development.connection
  });
  
  knex('menus')
      .del()
      .then(function() {
        return knex.insert([
          {id: 1, item_name: 'Coffee, Large', description: 'great coffee', price: 195},
          {id: 2, item_name: 'Coffee, Medium', description: 'great coffee', price: 175},
          {id: 3, item_name: 'Coffee, Small', description: 'great coffee', price: 165},
          {id: 4, item_name: 'Honey Cruller', description: 'a good doughnut', price: 95},
          {id: 5, item_name: 'Choclate Glaze', description: 'a good doughnut', price: 95},
          {id: 6, item_name: 'Apple Fritter', description: 'a good doughnut', price: 95},
          {id: 7, item_name: 'Boston Creme', description: 'a good doughnut', price: 95},
          {id: 8, item_name: 'Old Fashioned', description: 'a good doughnut', price: 95}
        ], 'id')
        .into('menus')
      })
      .then(function (result) {
        return knex('menus').select()
        })
      .then((response) => {
        console.log(response)
        })
      .catch((err) => { console.log( err); throw err })
      .finally(() => {
        knex.destroy();
        })