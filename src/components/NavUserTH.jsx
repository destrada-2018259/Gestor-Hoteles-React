import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getToken } from '../api/apiLogin';
import '../index.css'

export const NavUserTH = () => {
    const token = getToken();
    const [usuario, setUsuario] = useState(jwtDecode(token).nombre)

    //const nombreUser = jwtDecode(token).nombre;

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='headerUser' href="#home">Logueado como: {usuario}  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto "  >
                            <Nav.Link className='navBarUserLink' href="#home">Mi cuenta</Nav.Link>
                            <Nav.Link className='navBarUserLink' href="#link">Reservar</Nav.Link>
                            <Nav.Link className='navBarUserLink' href="#link">Historial</Nav.Link>
                            <Nav.Link className='navBarUserLink' href="#link">Cerrar sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
