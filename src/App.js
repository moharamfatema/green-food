import React from "react";
import "./App.css";
import Navigaton from "./components/Navigaton";
import { Route, Switch} from "react-router-dom";
import Home from "./components/homepage";
import RecipePage from "./OpenRecipeComponents/RecipePage";
import SignUp from "./ProfileComponents/SignUp";
import Login from "./ProfileComponents/Login";
import Profile from "./ProfileComponents/Profile"
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
        <Route path='/signup'>
            <SignUp/>
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
        <Route path='/profile'>

            <Profile/>

        </Route>
    </Switch>

    </div >
  );
}

export default App;
