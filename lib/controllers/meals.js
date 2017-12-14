const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const Meals = require('../models/meal')

const getMeals = (request, response, next) => {
  Meals.all()
  .then(function(data) {
    if(!data.rows[0]) {
      response.sendStatus(404)
    } else{
      response.json(data.rows)
    }
  })
}

const getMealFood = (request, response, next) => {
  var mealId = request.params.meal_id
  Meals.mealFood(mealId)
  .then(function(data) {
    if(!data.rows[0]) {
      response.sendStatus(404)
    } else{
      response.json(data.rows)
    }
  })
}

const postMealFood = (request, response, next) => {
  var mealId = request.params.meal_id
  var id = request.params.id
  Meals.postFood(mealId, id)
  .then(function(data) {
    if(!data.rows[0]) {
      response.sendStatus(404)
    } else{
      response.json(data.rows)
    }
  })
}

module.exports = {
  getMeals,
  getMealFood,
  postMealFood
}