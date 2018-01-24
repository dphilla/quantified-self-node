const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const Foods = require('../models/food');


const getFoods = (request, response, next) => {  //probably don't actually need next here
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
        response.json(data.rows) 
    })
}

const updateFood = (request, response, next) => {
  var id = request.params.id
  let food_params = request.body
  // console.log(food_params)
  Foods.update(food_params, id)
    .then(function(data) {
        response.send(data.rows) //send updated record back
    })
}

const deleteFood = (request, response, next) => {

  let id = request.params.id
  Foods.destroy(id)
    .then(function(data) {
        response.send("success\n") //send updated record back
    })
}

module.exports = {
  getFoods,
  getSingleFood,
  postFood,
  updateFood,
  deleteFood,
}
