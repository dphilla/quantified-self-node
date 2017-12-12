
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const Foods = require('../models/food')



const getFoods = (request, response, next) => {
    //database.raw(`SELECT * FROM foods`)
  Foods.all()
    .then(function(data) {
      if (!data.rows[0]) {
        response.sendStatus(404)
      } else {
        response.json(data.rows)
      }
    })
}



module.exports = {
  getFoods,
}
