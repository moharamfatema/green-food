import './App.css';
import React, {useState,useEffect} from 'react'
import RecipeParent from './OpenRecipeComponents/RecipePage'

function App() {
    let recipes = [];


    fetch('http://localhost:5000')
        .then(response => response.json())
        .then(data =>{
            let {hits} = data;
            recipes=hits;
            console.log(recipes);
        }
    );
    const recipe = recipes[0].recipe;
  return (
    <div className="App">
      <header className="App-header">
          <div id="edamam-badge" data-color="white"></div>
          <RecipeParent label={recipe.label} image = {recipe.image}/>
      </header>

    </div>
  );
}

export default App;
