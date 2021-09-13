import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import Data from 'db/json'

function SavedButton() {

    const [recipes, setSavedRecipes] = useState([])


    useEffect(() => {
        const getRecipes = async () => {
            const recipesFromServer = await fetchRecipe()
            setSavedRecipes(recipesFromServer)
        }

        getRecipes()
    }, [])


    const addSaved = async (recipe) => {
        const rec = await fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })

        const data = await rec.json()

        setSavedRecipes([...recipes, data])
    }



    // Fetch Task
    const fetchRecipe = async (id) => {
        const res = await fetch(`http://localhost:3000/recipes/${id}`)
        const data = await res.json()

        return data
    }



    return (
        <div>
            <Button variant="outline-warning" onClick={addSaved}><i class="far fa-bookmark"></i></Button>
        </div>
    )
}

export default SavedButton
