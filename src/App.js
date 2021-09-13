import React, { useState } from "react";
import "./App.css";
import Navigaton from "./components/Navigaton";
<<<<<<< HEAD
import { Button, Container } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
// import SavedRecipes from './components/SavedRecipes'
=======
import {BrouserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/homepage";
import RecipePage from "./OpenRecipeComponents/RecipePage";
>>>>>>> main

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

<<<<<<< HEAD
  const onChange = (e) => setQuery(e.target.value);
=======
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

>>>>>>> main

            </Tab.Pane>
          </Route>
        </Switch></Tab.Content>

<<<<<<< HEAD
  return (
    <div className="App">
      <Navigaton />
      <Tabs defaultActiveKey="profile" id="tab" className="mb-3">
        <Tab eventKey="home" title="Home">
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
              recipes.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </Container>
        </Tab>
        <Tab eventKey="Saved" title="Saved">
          <div className="recipes">
            {recipes !== [] &&
              recipes.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </div>
        </Tab>
        <Tab eventKey="Profile" title="Profile"></Tab>
      </Tabs>
    </div>
=======
        <Tab eventKey="Saved" title="Saved" >


      <Tab eventKey="Profile" title="Profile" >

        </Tab>
        </Tab.Container>*/}


    </div >
>>>>>>> main
  );
}

export default App;
