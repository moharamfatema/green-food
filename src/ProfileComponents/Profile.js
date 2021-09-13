import {Button, Card, Container, Form} from "react-bootstrap";
import {Chart} from "react-google-charts";
import Weight from "./Weight";
import {useState} from "react";


export default function Profile(props){
    let [updatedWeight,setUpdatedWeight] = useState(0);
    const onWeightUpdate = (e)=>{
        setUpdatedWeight(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }



    return(
        <Container>
            <Card>
                <Card.Header>Your Profile</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Username: {props.username}
                    </Card.Text>
                    <Form onSubmit={onSubmit}>
                        <Form.Control type='number' placeholder="Enter today's weight" onChange={onWeightUpdate} value={updatedWeight}></Form.Control>
                        <Button type='submit' onClick={onSubmit} variant='primary'>Update Weight</Button>

                    </Form>
                    <Weight props/>
                </Card.Body>
            </Card>
        </Container>
    )
}