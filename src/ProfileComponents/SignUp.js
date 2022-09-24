import {Alert, Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import './style.css'
import {Link} from "react-router-dom";

export default function SignUp(){
    let [newUserName,setNewUserName] = useState('');
    let [newPassword,setNewPassword] = useState('');
    let [existingUserArr ,setExistingUserArr] = useState([]);
    let [show,setShow] = useState(false);
    let [newWeight,setNewWeight] = useState(0);
    let [showSuccessAlert,setShowsuccessalert] = useState(false);
    let [currentUser,setCurrentUser] = useState({});


    /*get the users data from the server and store it in array*/
    useEffect(()=>{
        fetch('http://localhost:5000/users')
            .then(response=>response.json())
            .then(data=>{
                setExistingUserArr(data)
            })
    },[])

    const onWeightChange = (e)=>{
        setNewWeight(e.target.value);

    }

    const onUserNameChange = (e)=>{
        setNewUserName(e.target.value);

    }
    const onPasswordChange = (e)=>{
        setNewPassword(e.target.value)
    }
    const onAlertClose = ()=>{setShow(false)}
    const onSubmit = (e)=>{
        e.preventDefault();

        if (!newUserName.trim() | !newPassword.trim()){
            alert("Please fill required fileds");
            return;
        }
        let found = false;
        existingUserArr.forEach((user,i)=>{
            /*check for matching existing username*/

            if(user.username === newUserName){
                found = true;
            }
        })
        if (found) {
            setShow(true);
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
                    "password":newPassword,
                    "weight":[
                            ['Date', 'Weight'],
                            [Date(), Number(newWeight)]
                    ]
                }
            )
        })
            .then(response=>response.json())
            .then(data=>{
                setExistingUserArr([...existingUserArr,data])
                setCurrentUser(data);
            })
        setShowsuccessalert(true);
        setNewPassword('');
        setNewUserName('');
    }

    return(
        <Card className='signupCard'>
            <Form onSubmit={onSubmit}>
                <h1>Sign Up</h1>
                <Form.Group controlId='newusername'>
                    <Form.Label>Enter a username</Form.Label>
                    <Form.Control aria-required={true} type='text' placeholder='Enter a username' onChange={onUserNameChange} value={newUserName}/>
                    <Form.Text id='usernamewarning'/>
                </Form.Group>
                <Form.Group controlId='newpassword'>
                    <Form.Label>Enter a password</Form.Label>
                    <Form.Control type="password" placeholder="Enter a password" onChange={onPasswordChange} value={newPassword} />
                    <Form.Text/>
                </Form.Group>
                <Form.Group controlId='newweight'>
                    <Form.Label>Enter your weight</Form.Label>
                    <Form.Control type="number" placeholder="Enter your weight" onChange={onWeightChange} value={newWeight} />
                    <Form.Text/>
                </Form.Group>
                    <Button type='submit' onClick={onSubmit} variant='success'>Sign Up</Button>
            </Form>
            <Alert variant='danger' dismissible show={show} onClose={onAlertClose}>'username unavailable'</Alert>
            <Link to={
                {pathname:'/profile',
                    user:currentUser
                }
            }><Alert variant='success' show={showSuccessAlert}>Success! click to go to profile</Alert></Link>

        </Card>
    )
}
