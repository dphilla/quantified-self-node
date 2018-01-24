const foods = require('../data/foods')


exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meals RESTART IDENTITY CASCADE')
  .then(function() {
    return knex.raw('TRUCATE foods RESTART IDENTITY CASCADE')
  })
}