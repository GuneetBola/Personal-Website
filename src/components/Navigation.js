import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="/">Guneet Bola</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="d-inline p-2 bg-light text-black" to="/">Home</Link>
                        <Link className="d-inline p-2 bg-light text-black" to="/Projects">Projects</Link>
                        {/* <Link className="d-inline p-2 bg-light text-black" to="/Contact">Contact</Link> */}
                      
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Navigation;

