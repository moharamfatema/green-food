import {Button, Container, FormControl, InputGroup, Tab} from "react-bootstrap";
import Recipe from "./Recipe";
import {v4 as uuidv4} from "uuid";
import React, {useEffect, useState} from "react";
import Axios from "axios";




export default function Home(){
    const [query, setQuery] = useState("salad");
    const [recipes, setRecipes] = useState([]);
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

    useEffect(()=>{
        setQuery('salad')
        getData()
        },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    };
    const onChange = (e) => setQuery(e.target.value);

    return(
        <>
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
                {
                    recipes !== [] &&
                    recipes.map(
                        (recipe) => <Recipe key={uuidv4()} recipe={recipe}/>
                    )
                }
            </Container>
        </>
    )
}