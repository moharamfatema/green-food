import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";


const Navigaton = () => {
  return (


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
            <Nav.Item >
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item ><Link to='/login'>< i className="fas fa-user-circle"/></Link></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Navigaton;
