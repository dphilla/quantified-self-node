

exports.seed = function(knex, Promise) {
return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {name:"Breafast"},
        {name: "Snack"},
        {name: "Lunch"},
        {name: "Dinner"}
      ]);
    });

};

