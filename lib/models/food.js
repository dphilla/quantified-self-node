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
  return database.raw('INSERT INTO foods (name, calories) VALUES (?, ?)', //do we need to check for sql injection? (block ;)
    [food_params.name, food_params.calories]
  )
};

const update = (food_params, id) => {
    if (food_params.name && food_params.calories) {
     return database.raw('UPDATE foods SET calories = ?, name = ? WHERE id = ?', [food_params.calories, food_params.name, id])
  } else if (food_params.name && Boolean(food_params.calories) === false) {
     return database.raw('UPDATE "foods" SET "name" = ? WHERE foods.id = ?', [food_params.name, id])
  } else if (food_params.calories && Boolean(food_params.name) === false) {
     return database.raw('UPDATE "foods" SET "calories" = ? WHERE foods.id = ?', [food_params.calories, id])
  } else {return "no record found"}
};

const destroy = (id) => {
 return database.raw('DELETE FROM foods WHERE id = ?', [id])
};


module.exports = {
  all,
  show,
  create,
  update,
  destroy,
}
