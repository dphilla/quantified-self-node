
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var food = require('./lib/controllers/foods')
var meal = require('./lib/controllers/meals')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//set the port to an ENV variable OR localhost:3000
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  //landing page with html for documentation
  response.send("This is a test and will be replaced by the api docs!")
})


//Food REST routes
app.get("/api/v1/foods", food.getFoods)

app.post('/api/v1/foods', food.postFood)

app.get('/api/v1/foods/:id', food.getSingleFood)

app.patch('/api/v1/foods/:id', food.updateFood) // confirm this is working and refactor model method

app.delete('/api/v1/foods/:id', food.deleteFood)


//Meals
app.get('/api/v1/meals', meal.getMeals)


//meal-foods
app.get('/api/v1/meals/:meal_id/foods', meal.getMealFood)

app.get('/api/v1/meals/:meal_id/foods/:id', function(request, response) {
  //food for meal
})

app.post('/api/v1/meals/:meal_id/foods/:id', meal.postMealFood)

app.delete('/api/v1/meals/:meal_id/foods/:id', function(request, response) {
  //delete food for meal
})


if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`quantified self is running on ${app.get('port')}.`)
  })
}



module.exports = app

