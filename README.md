## The following endpoints are available. All endpoints will return the data as JSON.


  **Food Endpoints**

  GET /api/v1/foods</code> - returns all foods currently in the database</li>

  GET /api/v1/foods/:id</code> - returns the food object with the specific <code>:id</code> you've passed in or 404 if the food is not found</li>

  POST /api/v1/foods</code> - allows creating a new food with the parameters: <br><code>{ food: { name: "Name of food here", calories: "Calories here"} }</code><br> If food is successfully created, the food item will be returned. If the food is not successfully created, a 400 status code will be returned. Both name and calories are required fields.</li>

  PATCH /api/v1/foods/:id</code> - allows one to update an existing food with the parameters:<br> <code>{ food: { name: "Name of food here", calories: "Calories here"} }</code><br> If food is successfully updated (name and calories are required fields), the food item will be returned. If the food is not successfully updated, a 400 status code will be returned.</li>

  DELETE /api/v1/foods/:id</code> - will delete the food with the id passed in. If the food can't be found, a 404 will be returned.</li>


  **Meal Endpoints**

  GET /api/v1/meals</code> - returns all the meals in the database along with their associated foods</li>

  GET /api/v1/meals/:meal_id/foods</code> - returns all the foods associated with the meal with an id specified by <code>:meal_id</code> or a 404 if the meal is not found</li>

  POST /api/v1/meals/:meal_id/foods/:id</code> - adds the food with <code>:id</code> to the meal with <code>:meal_id</code><br>This creates a new record in the MealFoods table to establish the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.

  DELETE /api/v1/meals/:meal_id/foods/:id</code> - removes the food with <code>:id</code> from the meal with <code>:meal_id</code><br>This deletes the existing record in the MealFoods table that creates the relationship between this food and meal. If the meal/food cannot be found, a 404 will be returned.
