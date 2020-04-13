import React from "react";
import "./App.css";

import { APP_ID, APP_KEY } from "./config";

function App() {
  const getRecipes = async () => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <form action="" className="searchForm">
        <input type="text" name="" id="" className="searchBar" />
        <button type="submit" className="searchBtn" onClick={getRecipes}>
          Search recipe
        </button>
      </form>
    </div>
  );
}

export default App;
