const foods = require('../data/foods')
const meals = require('../data/meals')

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
  .then(function() {
    return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE')
  })
  .then(function () {
    return knex('foods').insert(foods['FOODS']);
  })
  .then(function () {
    console.log()
    return knex('meals').insert(meals['MEALS']);
  })
}