const axios = require("axios");
const server = require("./src/app.js");
const { conn, Diet, Recipe } = require("./src/db.js");
const { API_KEY } = process.env;

// Syncing all the models at once.


conn.sync({ force: true }).then(() => {



   //carga manual de las dietas
   var dietKetogenic = Diet.create({
    name: "Ketogenic",
  });

  var dietGlutenFree = Diet.create({
    name: "Gluten Free",
  });

  var dietVegetarian = Diet.create({
    name: "Vegetarian",
  });

  var dietLactoVegetarian = Diet.create({
    name: "Lacto Vegetarian",
  });

  var dietVegan = Diet.create({
    name: "Vegan",
  });

  var dietPescetarian = Diet.create({
    name: "Pescetarian",
  });
  var dietPaleo = Diet.create({
    name: "Paleo",
  });
  var dietPrimal = Diet.create({
    name: "Primal",
  });

  var dietWhole30 = Diet.create({
    name: "Whole30",
  });
  
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
