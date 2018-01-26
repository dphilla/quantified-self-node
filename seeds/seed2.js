

exports.seed = function(knex, Promise) {
return knex('meals').del()
    .then(function () {
      return knex('meals').insert([
        {name:"Breakfast"},
        {name: "Snack"},
        {name: "Lunch"},
        {name: "Dinner"}
      ])
    .then(function () {
      return knex('meal_foods').insert([
        {meal_id: 1, food_id: 1},
        {meal_id: 1, food_id: 12},
        {meal_id: 1, food_id: 10},
        {meal_id: 2, food_id: 11},
        {meal_id: 2, food_id: 8},
        {meal_id: 3, food_id: 9},
        {meal_id: 3, food_id: 6},
        {meal_id: 3, food_id: 3},
        {meal_id: 4, food_id: 5},
        {meal_id: 4, food_id: 4},
        {meal_id: 4, food_id: 2}
      ]);
    });
    });

};

