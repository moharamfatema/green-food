import {Button, Card, Container, Form} from "react-bootstrap";
import Weight from "./Weight";
import { useState} from "react";
import {useLocation} from "react-router-dom";
import './style.css'


export default function Profile(){
    const location= useLocation();
    const [currentUser,setCurrentUser] = useState(location.user);
    let [updatedWeight,setUpdatedWeight] = useState(currentUser.weight[(currentUser.weight.length)-1][1]);


    const onWeightUpdate = (e)=>{
        setUpdatedWeight(e.target.value);
    }
    const onSubmit = (e) => {
        currentUser.weight = [...currentUser.weight,[Date(),Number(updatedWeight)]]
        e.preventDefault();
        fetch(`http://localhost:5000/users/${currentUser.id}`,{
            method:'PUT',
            headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(
            {
                "username":currentUser.username,
                "password":currentUser.password,
                "weight":currentUser.weight,
                "id":currentUser.id
            }
        )
        }
        ).then(response => response.json())
            .then(data => {
                setCurrentUser(data);
            })

    }

    return(
        <Container>
            <Card className='profileCard'>
                <Card.Header>Your Profile</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Username: {currentUser.username}
                    </Card.Text>
                    <Form onSubmit={onSubmit}>
                        <Form.Control type='number' placeholder="Enter today's weight" onChange={onWeightUpdate} value={updatedWeight}></Form.Control>
                        <Button type='submit' onClick={onSubmit} variant='primary'>Update Weight</Button>

                    </Form>
                    <Weight props = {currentUser.weight}/>
                </Card.Body>
            </Card>
        </Container>
    )
}
