import{Container,Row,Col,Image} from 'react-bootstrap'

function RecipePage (props) {
    return (
        <Container fluid>
            <Row>
                <Image src={props.image.large} fluid/>
            </Row>
        </Container>
    )
}
export default RecipePage;