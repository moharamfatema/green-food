import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';



function SavedButton() {

    const [recipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const getDate = async () => {
            const tasksFromServer = await fetchRecipe()
            setSavedRecipes(tasksFromServer)
        }

        getDate()
    }, [])


    const fetchRecipe = async (id) => {
        const rec = await fetch(`http://localhost:3000/recipes/${id}`)
        const data = await rec.json()

        return data
    }

    // Add Task
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

    return (
        <div>
            <Button variant="outline-warning" onClick={addSaved}><i class="far fa-bookmark"></i></Button>
        </div>
    )
}

export default SavedButton
