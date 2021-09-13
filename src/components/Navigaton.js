import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import {BrowserRouter, Switch,Link,Route} from 'react-router-dom'

const Navigaton = () => {
  return (
<<<<<<< HEAD
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="https://www.logolynx.com/images/logolynx/s_6c/6c27ee419bb5f34aff0e0744900e8c71.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            HEALTHY FOOD
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Saved</Nav.Link>
            <Nav.Link href="#pricing">
              <i class="fas fa-user-circle"></i>
            </Nav.Link>
=======


      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand >
            <Link to='/'><img
                alt="logo"
                src="https://www.logolynx.com/images/logolynx/s_6c/6c27ee419bb5f34aff0e0744900e8c71.jpeg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />HEALTHY FOOD</Link></Navbar.Brand>
          <Nav>
            <Nav.Link eventKey='home' >
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link eventKey='saved' ><Link to="/saved">Saved</Link></Nav.Link>
            <Nav.Link eventKey='profile' ><Link to='/profile'>< i className="fas fa-user-circle"/></Link></Nav.Link>
>>>>>>> main
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Navigaton;
