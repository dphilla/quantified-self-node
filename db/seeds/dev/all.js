const foods      = require('../data/foods')
const meals      = require('../data/meals')
const meal_foods = require('../data/meal_foods')

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
  .then(function() {
    return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE')
  })
  .then(function() {
    return knex.raw('TRUNCATE meal_foods RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex('foods').insert(foods['FOODS']);
  })
  .then(function () {
    return knex('meals').insert(meals['MEALS']);
  })
  .then(function () {
    return knex('meal_foods').insert(meal_foods['MEAL_FOODS']);
  })
}