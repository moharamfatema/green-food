import React from "react";
import { Card } from "react-bootstrap";


const SavedRecipes = ({ savedRecipe }) => {
    const { label, image, calories, mealType } = savedRecipe.saved;

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{label}</Card.Title>
                    <Card.Text>
                        Calories= {Math.round(calories)} <br />
                        Meal: {mealType}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SavedRecipes;
