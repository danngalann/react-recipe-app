import React, { useState } from "react";
import "./App.css";

import { APP_ID, APP_KEY } from "./config";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState();

  const getRecipes = async (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setRecipes(data.hits);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Get free recipes for anything!</h2>
        <form onSubmit={getRecipes} className="searchForm">
          <input
            type="text"
            name="recipe"
            id="recipe-search-bar"
            className="input-field"
            onChange={(e) => setRecipe(e.target.value)}
            placeholder= "I want a recipe with..."
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map((hit) => {
          return <Recipe key={hit.recipe.label} recipe={hit.recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
