const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../../knexfile')[environment];    // require environment's settings FROM knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const all = () => {
  return database.raw('SELECT * FROM meals')
};

const mealFood = (mealId) => {
  return (database.raw(`SELECT meals.id, meals.name, json_agg((SELECT row_to_json(x.*)
                        FROM (SELECT foods.id, foods.name, foods.calories) x))
                        AS foods
                        FROM meals 
                        JOIN meal_foods ON meals.id=meal_foods.meal_id
                        JOIN foods ON meal_foods.food_id=foods.id
                        WHERE meals.id=${mealId}
                        GROUP BY meals.id`
                      )
         )
}

const postFood = (mealId, id) => {
  return database.raw(`INSERT INTO meal_foods (meal_id, food_id)
                       VALUES (${mealId}, ${id})`)
}

const deleteFood = (mealId, id) => {
  return database.raw(`DELETE FROM meal_foods where meal_foods.meal_id=${mealId} AND meal_foods.food_id=${id}`)
}




module.exports = {
  all,
  mealFood,
  postFood
}