const recipes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Pizza",
    ingredients: ["flour", "chicken", "mozarella cheese", "sauce", "onion"],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Hamburger",
    ingredients: [
      "buns",
      "ground beef",
      "cheese",
      "ketchup",
      "onion",
      "pickels",
      "lettuce"
    ],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Potato Chips",
    ingredients: ["Bag of chips"],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Spaghetti",
    ingredients: ["Angle Hair Noodles", "Spaghetti Sauce", "Ground Beef"],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Chicken Alfredo",
    ingredients: [
      "Chicken Breats",
      "Penne Noodles",
      "Basil",
      "Parmesian Cheese"
    ],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Cake",
    ingredients: ["Cake Mix", "Cream", "Eggs"],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Stir Fry",
    ingredients: [
      "Chicken Breast",
      "Brocolli",
      "Carrots",
      "Onions",
      "Oyster Sauce"
    ],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Chicken & Veggie Soup",
    ingredients: [
      "Chicken Breast",
      "Chicken Stock",
      "Celery",
      "Carrots",
      "Onions",
      "Butter"
    ],
    link: ""
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Tacos",
    ingredients: ["Beef", "Cheese", "Tortillas", "Tomatoes", "Lettuce"],
    link: ""
  }
];

export function getRecipes() {
  return recipes;
}

export function getRecipe(id) {
  return recipes.find(m => m._id === id);
}

export function saveRecipe(recipe) {
  let recipeInDB = recipes.find(r => r._id === recipe._id) || {};
  recipeInDB.name = recipe.name;
  recipeInDB.ingredients = recipe.ingredients;
  recipeInDB.link = recipe.link;

  if (!recipeInDB._id) {
    recipeInDB._id = Date.now().toString();
    recipes.push(recipeInDB);
  }
  console.log(recipes);
  return recipeInDB;
}

export function deleteRecipe(id) {
  let recipeInDB = recipes.find(m => m._id === id);
  recipes.splice(recipes.indexOf(recipeInDB), 1);
  return recipeInDB;
}
