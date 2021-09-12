import React from "react";
import SavedButton from "./SavedButton";
import { Card } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  const { label, image, calories, mealType } = recipe.recipe;

  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{label}</Card.Title>
          <Card.Text>
            Calories= {Math.round(calories / 5)} <br />
            Meal: {mealType}
          </Card.Text>
          <SavedButton />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
