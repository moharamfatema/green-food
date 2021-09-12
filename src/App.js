import React, { useState } from "react";
import "./App.css";
import Axios,{AxiosStatic } from 'axios';
import { v4 as uuidv4 } from "uuid";
import Recipe from "./components/Recipe";
import Navigaton from "./components/Navigaton";
import { Button, Container } from 'react-bootstrap'
import { InputGroup, FormControl } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
// import SavedRecipes from './components/SavedRecipes'

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [saved, setSavedRecipes] = useState([]);

  const app_id = "4e9f05eb";
  const app_key = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&calories=10-500`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return alert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      alert("Please, Fill this form!");
    }
  };


  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };


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
              recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
          </Container>
        </Tab>
        <Tab eventKey="Saved" title="Saved" >
        <div className="recipes">
            {recipes !== [] &&
              recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
          </div>
        </Tab>
        <Tab eventKey="Profile" title="Profile" >

        </Tab>
      </Tabs>


    </div >
  );
}

export default App;
