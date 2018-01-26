const foods = require('../data/foods')
const meals = require('../data/meals')
const MEAL_FOODS = []
function generateRandomMealFood() {
  return random_meal_food = {
    meal_id: (Math.floor(Math.random() * 4)) + 1,
    food_id: (Math.floor(Math.random() * 12)) + 1,
    created_at: new Date
  }
}

for (var i = 0; i < 12; i ++) {
  MEAL_FOODS.push(generateRandomMealFood(i))
}

module.exports = { MEAL_FOODS }