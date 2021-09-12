import React from "react";
import "./App.css";
import Navigaton from "./components/Navigaton";
import { Route, Switch} from "react-router-dom"; 
import Home from "./components/homepage";
import RecipePage from "./OpenRecipeComponents/RecipePage";
import SignUp from "./ProfileComponents/SignUp";
function App() {

  return (
    <div className="App">
    <Navigaton />
    <Switch>
        <Route exact path='/'  >
            <Home/>
        </Route>
        <Route path='/recipe'>
            <RecipePage/>
        </Route>
        <Route path='/profile'>
            <SignUp/>
        </Route>
    </Switch>

    </div >
  );
}

export default App;
