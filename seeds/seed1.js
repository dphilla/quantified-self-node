
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name:"Banana", calories: 155},
        {name: "Bagel Bites - Four Cheese", calories: 650},
        {name: "Chicken Burrito", calories: 800},
        {name: "Grapes", calories: 180},
        {name: "Blueberry Muffins", calories: 450},
        {name: "Yogurt", calories: 550},
        {name: "Macaroni and Cheese", calories: 950},
        {name: "Granola Bar", calories: 200},
        {name: "Gum", calories: 50},
        {name: "Cheese", calories: 400},
        {name: "Fruit Snacks", calories: 120},
        {name: "Apple", calories: 220}
      ]);
    });
};




