const axios = require("axios");
const { Router } = require("express");
const { Recipe, Diet, recipe_diet } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();
const { API_KEY } = process.env;

// const data = async () => {
//         const arrayRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=5`);
//         return arrayRecipes.data.results
// }
router.post("/recipe", async (req, res) => {
  const { name, summary, score, healthScore, instructions, image, diet } =
    req.body;
  //traer por body las dietas

  try {
    let newRecipe = await Recipe.create({
      name,
      summary,
      score,
      healthScore,
      instructions,
      image,
      mine: true,
    });
    await newRecipe.addDiet(diet.id);
    res.json(newRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const { name } = req.query;
    let recipes = await Recipe.findAll();

    if (recipes.length === 0) {
      recipes = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=10`
      );
      recipes.data.results.map(async (obj) => {
        const instructions = JSON.stringify(obj.analyzedInstructions);
        const dietas = JSON.stringify(obj.diets);
        await Recipe.create({
          name: obj.title,
          summary: obj.summary,
          score: obj.spoonacularScore,
          healthScore: obj.healthScore,
          instructions,
          image: obj.image,
          dietas,
        });
      });
    }

    if (!name) {
      const x9recipes = await Recipe.findAll({
        inlcude: { model: Diet },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        limit: 9,
        offset: 0,
      });
      res.json(x9recipes);
    } else {
      const matchRecipe = await Recipe.findAll({
        include: { model: Diet },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      if (matchRecipe.length === 0) {
        res.json({ message: "THE RECIPE DOES NOT EXIST" });
      } else {
        res.json(matchRecipe);
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});

//nombre foto dieta  agregar en la base y id
router.get("/recipes/:id", async (req, res) => {
  let { id } = req.params;
  let query = await Recipe.findByPk(id, {
    include: { model: Diet },
  });

  res.json(query);

  if (query === null) {
    try {
      let recipeApi = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const obj = {
        name: recipeApi.data.title,
        summary: recipeApi.data.summary,
        score: recipeApi.data.spoonacularScore,
        healthScore: recipeApi.data.healthScore,
        instructions: recipeApi.data.instructions,
      };
      if (recipeApi) return res.json(obj);
    } catch (error) {
      res.json("ID NOT EXISTS");
    }
  }
});

module.exports = router;
