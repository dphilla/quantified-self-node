
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name:"Banana", calories: 150},
        {id: 2, name: "Bagel Bites - Four Cheese", calories: 650},
        {id: 3, name: "Chicken Burrito", calories: 800},
        {id: 4, name: "Grapes", calories: 180},
        {id: 5, name: "Blueberry Muffins", calories: 450},
        {id: 6, name: "Yogurt", calories: 550},
        {id: 7, name: "Macaroni and Cheese", calories: 950},
        {id: 8, name: "Granola Bar", calories: 200},
        {id: 9, name: "Gum", calories: 50},
        {id: 10, name: "Cheese", calories: 400},
        {id: 11, name: "Fruit Snacks", calories: 120},
        {id: 12, name: "Apple", calories: 220}
      ]);
    });
};


exports.seed = function(knex, Promise) {
return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {id: 1, name:"Breafast"},
        {id: 2, name: "Snack"},
        {id: 3, name: "Lunch"},
        {id: 4, name: "Dinner"}
      ]);
    });

};


exports.seed = function(knex, Promise) {
    return knex('meal_foods').del()
    .then(function () {
      return knex('meal_foods').insert([
        {id: 1, meal_id: 1, food_id: 1},
        {id: 2, meal_id: 1, food_id: 12},
        {id: 3, meal_id: 1, food_id: 10},
        {id: 4, meal_id: 2, food_id: 11},
        {id: 5, meal_id: 2, food_id: 8},
        {id: 6, meal_id: 3, food_id: 9},
        {id: 7, meal_id: 3, food_id: 6},
        {id: 8, meal_id: 3, food_id: 3},
        {id: 9, meal_id: 4, food_id: 5},
        {id: 10, meal_id: 4, food_id: 4},
        {id: 11, meal_id: 4, food_id: 2}
      ]);
    });

};
