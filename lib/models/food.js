const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


const all = () => {
 return database.raw(`select * from foods`)
};

const show = (id) => {
 return database.raw('select * FROM foods WHERE id = ?', [id])
};

const create = (food_params) => {
  return database.raw('INSERT INTO foods (name, calories) VALUES (?, ?)',
    [food_params.name, food_params.calories]
  )
};

module.exports = {
  all,
  show,
  create,
}
