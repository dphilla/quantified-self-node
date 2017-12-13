
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const Foods = require('../models/food')



const getFoods = (request, response, next) => {
  Foods.all()
    .then(function(data) {
      if (!data.rows[0]) {
        response.sendStatus(404)
      } else {
        response.json(data.rows)
      }
    })
}

const getSingleFood = (request, response, next) => {
  var id = request.params.id

  Foods.show(id)
    .then(function(data) {
      if (!data.rows[0]) {
        response.sendStatus(404)
      } else {
        response.json(data.rows[0])
      }
    })
}

const postFood = (request, response, next) => {

  let food_params = request.body
  Foods.create(food_params)
    .then(function(data) {
        response.send("success\n")
    })
}


module.exports = {
  getFoods,
  getSingleFood,
  postFood,
}
