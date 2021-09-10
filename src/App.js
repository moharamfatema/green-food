import './App.css';
import React from 'react'
import {Image} from 'react-bootstrap'
import RecipePage from 'OpenRecipeComponents/RecipePage'

function App() {
    var recipe = {};
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=alfredo&app_id=8fc37a41&app_key=afc4e0d690c5ce190e4a3358bd822131')
        .then(response => response.json())
        .then(data =>{
            let {hits} = data;
            recipe = hits[0].recipe;
        }
    );
  return (
    <div className="App">
      <header className="App-header">
        <div id="edamam-badge" data-color="white"></div>
      </header>
        <RecipePage image={recipe.image}/>
    </div>
  );
}

export default App;
