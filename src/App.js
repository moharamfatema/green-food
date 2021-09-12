import React, { useState } from "react";
import "./App.css";
import Axios,{AxiosStatic } from 'axios';
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Navigaton from "./components/Navigaton";
import {InputGroup, FormControl,Button, Container, TabContainer,TabPane} from 'react-bootstrap'
import { Tab, Tabs } from "react-bootstrap";
import {BrouserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/homepage";
import RecipeParent from "./OpenRecipeComponents/RecipePage";

// import SavedRecipes from './components/SavedRecipes'

function App() {

  return (
    <div className="App">
    <Navigaton />
    <Switch>
        <Route exact path='/'  >
            <Home/>
        </Route>
    </Switch>
      {/*<Tab.Container defaultActiveKey="profile" id="tab" className="mb-3">
        <Tab.Content>
          <Switch>

          <Route exact path='/home'>
            <Tab.Pane eventKey="home" title="Home">

              <h1>Recipes</h1>
              <form onSubmit={onSubmit} className="search-form">
                <InputGroup className="mb-3">
                  <FormControl
                      placeholder="Search"
                      aria-describedby="basic-addon2"
                      onChange={onChange}
                      type="text"
                      value={query}
                      autoComplete="off"
                  />

                  <Button variant="outline-primary" id="search" type="submit">
                    <i class="fas fa-search"></i>
                  </Button>
                </InputGroup>
              </form>
              <Container className="recipes" fluid>
                {recipes !== [] &&
                recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe}/>)}
              </Container>
            </Tab.Pane>
          </Route>
          <Route>
            <Tab.Pane eventKey="Saved" title="Saved">


            </Tab.Pane>
          </Route>
        </Switch></Tab.Content>

        <Tab eventKey="Saved" title="Saved" >


      <Tab eventKey="Profile" title="Profile" >

        </Tab>
        </Tab.Container>*/}


    </div >
  );
}

export default App;
