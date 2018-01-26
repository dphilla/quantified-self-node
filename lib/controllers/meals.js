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

const getMealFoods = (request, response, next) => {
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
  debugger
  var mealId = request.params.meal_id
  var id = request.params.id
  Meals.postFood(mealId, id)
  .then(function(data) {
    // console.log(data.rowCo)
    if(!data.rows[0]) {
      response.sendStatus(404)
    } else{
      // console.log(response);
      // console.log(data);
      response.json(data.rows)
    }
  })
}

const deleteMealFood = (request, response, next) => {
  var mealId = request.params.meal_id
  var id = request.params.id
  Meals.deleteFood(mealId, id)
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
  getMealFoods,
  postMealFood,
  deleteMealFood,
}
