const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//set the port to an ENV variable OR localhost:3000
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  //landing page with html for documentation
  response.send("This is a test and will be replaced by the api docs!")
})


//Food REST routes
app.get('/api/v1/foods', function(request, response) {
  //all foods
  //var id = request.params.id

  database.raw(`SELECT * FROM foods`)
  //call Class Food, .all
    .then(function(data) {
      if (!data.rows[0]) {
        response.sendStatus(404)
      } else {
        response.json(data.rows)
      }
    })

})




app.post('/api/v1/foods', function(request, response) {
  //Create food
})

app.get('/api/v1/foods/:id', function(request, response) {
  //show food
})

app.put('/api/v1/foods/:id', function(request, response) {
  //update food
})

//app.patch('/api/v1/foods/:id', function(request, response) {   test the need for both put and patch
  //update food
//})

app.delete('/api/v1/foods/:id', function(request, response) {
  //delete food
})


//Meals
app.get('/api/v1/meals', function(request, response) {
  //all meals
})


//meal-foods
app.get('/api/v1/meals/:meal_id/foods', function(request, response) {
  //all foods for meal
})

app.get('/api/v1/meals/:meal_id/foods/:id', function(request, response) {
  //food for meal
})

app.post('/api/v1/meals/:meal_id/foods/:id', function(request, response) {
  //create food for meal
})

app.delete('/api/v1/meals/:meal_id/foods/:id', function(request, response) {
  //delete food for meal
})


if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`quantified self is running on ${app.get('port')}.`)
  })
}



module.exports = app

