var express = require('express')
var app = express()


//set the port to an ENV variable OR localhost:3000
app.set('port', process.env.PORT || 3000)

app.get('/', function(request, response) {
  //landing page with html for documentation
})


//Food REST routes
app.get('/api/v1/foods', function(request, response) {
  //all foods
  var id = request.params.id

  database.raw(`SELECT * FROM secrets WHERE id = ?`, [id])
    .then(function(data) {
      if (!data.rows[0]) {
        response.sendStatus(404)
      } else {
        response.json(data.rows[0])
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

