import{Container,Row,Col,Image} from 'react-bootstrap'
import React from "react";

class RecipeParent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <RecipePage props = {this.props}/>
        );
    }
}

const RecipePage = ({label,image}) =>
    (
        <Container fluid>
            <Row>
                <Image alt={label} src={image} fluid/>
            </Row>
        </Container>
    )

export default RecipeParent;