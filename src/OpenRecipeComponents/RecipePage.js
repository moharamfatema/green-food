import React from "react";
import PropTypes from 'prop-types';
import {Accordion, Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";

class RecipeParent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.recipe);
        return(
            <RecipePage recipe = {this.props.recipe}/>
        );
    }

}



const RecipePage = ({recipe}) =>
    (
        <Container fluid>

            <Row>
                <Col xs={6}>
                    <Card border="success" bg='light' text='dark'>
                        <Card.Img variant='top' alt={recipe.label} src={recipe.image}/>
                        <Card.Title>
                            {recipe.label}
                        </Card.Title>
                        <Button variant='success' onClick={() => window.open(recipe.url)}>Go to recipe</Button>
                    </Card>
                </Col>
                    <Col xs={6}>
                        <Card>
                            <Accordion variant='success'>
                                <Accordion.Item eventKey={0}>
                                    <Accordion.Header>Cal/serving</Accordion.Header>
                                    <Accordion.Body>
                                        {Math.round(recipe.calories/recipe.yield)} kcal
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={1}>
                                    <Accordion.Header>Total Time</Accordion.Header>
                                    <Accordion.Body>
                                        {recipe.totalTime} minutes
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={2}>
                                    <Accordion.Header>Cuisine</Accordion.Header>
                                    <Accordion.Body>
                                        {recipe.cuisineType}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={3}>
                                    <Accordion.Header>Meal Type</Accordion.Header>
                                    <Accordion.Body>
                                        {recipe.mealType}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={4}>
                                    <Accordion.Header>Dish Type</Accordion.Header>
                                    <Accordion.Body>
                                        {recipe.dishType}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={5}>
                                    <Accordion.Header>Servings</Accordion.Header>
                                    <Accordion.Body>
                                        {recipe.yield} serving(s)
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey={6}>
                                    <Accordion.Header>Health Labels</Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup>
                                            {recipe.healthLabels.map((x)=><ListGroup.Item>{x}</ListGroup.Item>)}
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
            </Row>
        </Container>
    )

export default RecipeParent;