import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { usercontext } from './UserContext';

const Navbars = () => {
  const { user, logout } = useContext(usercontext);
  return (
    
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <div className="col-10 m-auto d-flex">
          <Navbar.Brand as={NavLink} to="/">
            MyWebsite
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" activeClassName="active">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                About
              </Nav.Link>
              {!user && (
                <>
                  <Nav.Link as={NavLink} to="/signup" activeClassName="active">
                    Sign Up
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/login" activeClassName="active">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
            {user && (
  <div className="d-flex align-items-center">
    <span className="text-light me-3">Welcome, {user?.username}</span>
    <Button variant="outline-light" onClick={logout} aria-label="Logout">
      Logout
    </Button>
  </div>
)}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbars;
