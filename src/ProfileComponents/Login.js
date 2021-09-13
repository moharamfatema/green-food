import {Alert, Button, Card, Form} from "react-bootstrap";
import {useEffect, useState} from "react";


export default function Login(){
    let [showusernamealert,setShowusernamealert] = useState(false);
    let [showpasswordalert,setShowpasswordalert] = useState(false);
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let [existingUserArr ,setExistingUserArr] = useState([]);
    let [showSuccessAlert,setShowsuccessalert] = useState(false);

    /*get the users data from the server and store it in array*/
    useEffect(()=>{
        fetch('http://localhost:5000/users')
            .then(response=>response.json())
            .then(data=>{
                //console.log(data)
                setExistingUserArr(data)
                //console.log(existingUserArr)
            })
    },[])

    const onUserNameChange =(e)=>{
        setUsername(e.target.value);
    }

    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onUsernameAlertClose = ()=>{
        setShowusernamealert(false);
    }
    const onPasswordAlertClose = ()=>{
        setShowpasswordalert(false);
    }

    const onSubmit = (e)=>{
        e.preventDefault();

        setShowpasswordalert(false);
        setShowusernamealert(false);
        setShowsuccessalert(false);

        if (!username.trim() | !password.trim()){
            alert("Please fill required fields");
            return;
        }

        let found = false;
        let currentUser,userIndex;
        existingUserArr.map((user,i)=>{
            /*check for matching existing username*/

            if(user.username === username){
                found = true;
                userIndex = i;
            }
        })
        if (found) {
            currentUser = existingUserArr[userIndex];
            //console.log(currentUser.password)
            if(password === currentUser.password){
                //successalert
                setShowsuccessalert(true);
            }else {
                setShowpasswordalert(true)
            }
        }else {
            setShowusernamealert(true);
        }
    }

    return(
        <Card className='logincard'>
            <Form onSubmit={onSubmit}>
                <h1>Login</h1>
                <Form.Group controlId='username'>
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control aria-required={true} type='text' placeholder='Enter your username' onChange={onUserNameChange} value={username}/>
                    <Form.Text id='usernamewarning'/>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" onChange={onPasswordChange} value={password} />
                    <Form.Text/>
                </Form.Group>
                <Button type='submit' onClick={onSubmit} variant='primary'>Login</Button>
            </Form>
            <Alert variant='danger' dismissible show={showusernamealert} onClose={onUsernameAlertClose}>'wrong username'</Alert>
            <Alert variant='danger' dismissible show={showpasswordalert} onClose={onPasswordAlertClose}>'wrong password'</Alert>
            <Alert variant='success'  show={showSuccessAlert} >Success</Alert>

        </Card>
    )
}