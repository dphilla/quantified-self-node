
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


