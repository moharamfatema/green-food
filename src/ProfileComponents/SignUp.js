import {Button, Card, FloatingLabel, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import './style.css'

export default function SignUp(){
    let [newUserName,setNewUserName] = useState('');
    let [newPassword,setNewPassword] = useState('');
    let [existingUserArr ,setExistingUserArr] = useState([])

    /*get the users data from the server and store it in array*/
    useEffect(()=>{
        fetch('http://localhost:5000/users')
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setExistingUserArr(data)
                console.log(existingUserArr)
            })
    },[])

    const onUserNameChange = (e)=>{
        setNewUserName(e.target.value);
        existingUserArr.map((user,i)=>{
            /*check for matching existing username*/
            if(user.username === newUserName){
                //TODO:warning();
            }
        })
    }
    const onPasswordChange = (e)=>{
        setNewPassword(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();

        if (!newUserName.trim() | !newPassword.trim()){
            alert("Please fill required fileds");
            return;
        }

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "username":newUserName,
                    "password":newPassword
                }
            )
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setExistingUserArr([...existingUserArr,data])
            })
        setNewPassword('');
        setNewUserName('');
        console.log(existingUserArr)
    }

    return(
        <Card className='signupCard'>
            <Form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <Form.Group controlId='newusername'>
                    <Form.Label>Enter a username</Form.Label>
                    <Form.Control type='text' placeholder='Enter a username' onChange={onUserNameChange} value={newUserName}/>
                    <Form.Text/>
                </Form.Group>
                <Form.Group controlId='newpassword'>
                    <Form.Label>Enter a password</Form.Label>
                    <Form.Control type="password" placeholder="Enter a password" onChange={onPasswordChange} value={newPassword} />
                    <Form.Text/>
                </Form.Group>
                    <Button type='submit' onClick={onSubmit} variant='success'>Submit</Button>
            </Form>
        </Card>
    )
}