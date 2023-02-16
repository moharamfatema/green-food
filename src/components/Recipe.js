import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'



const Recipe = ({ recipe }) => {
  const { label, image, calories, mealType} = recipe.recipe;

  return (
    <div className="d-flex justify-content-around">
  <Card style={{ width: '18rem' }} className="card">
    <Link to={
      {pathname:'/recipe'}}
      state={recipe}
    >
      <Card.Img  variant="top" src={image} />
    </Link>
    <Card.Body>
      <Card.Title>{label}</Card.Title>
      <Card.Text>
        Servings: {recipe.recipe.yield}<br/>
        Calories/serving= {Math.round(calories/recipe.recipe.yield)} <br />
        Meal: {mealType}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>

  );
};

export default Recipe;
