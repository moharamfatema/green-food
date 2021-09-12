import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";


const Navigaton = () => {
  return (
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
        />HEALTHY FOOD</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Saved</Nav.Link>
            <Nav.Link href="#pricing"><i class="fas fa-user-circle"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigaton;
