import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'


export const NavbarTH = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" className='navbarTh'>
                <Container fluid>
                    <Navbar.Brand href="/" className='header' >Todo-Hoteles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='menuTH' >
                        <Nav className="me-auto">
                            <Nav.Link className='navLink' href="/">Home</Nav.Link>
                            <Nav.Link className='navLink' href="login">Login/Register</Nav.Link>
                            <Nav.Link className='navLink' href="hotels">Hoteles</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
