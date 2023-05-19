import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../../api/apiLogin';
import '../../index.css'

export const LoginPage = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    const resultado = await apiLogin(correo, password);

    if(resultado === false) return null;

    const rol = jwtDecode(resultado).rol;
    console.log(rol);

    switch (rol) {
      case "SUPER_ADMIN":
          navigate('/superadmin')
        break;
      case "USER_ROLE":
          navigate('/user')
        break;
      case "ADMIN_ROLE":
          navigate('/admin')
          break;
      default:
        break;
    }

  };

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("second")

  const navigate = useNavigate();


  return (
    <>

      <Container className='formcontainer'>
        <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}  >
          <Row className="mb-3">
            <Form.Group as={Col} md="" controlId="validationCustom01">
              <Form.Label className='form-label' >Correo</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="ejemplo@gmail.com"
                
                className='inputForm'
                name="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Form.Control.Feedback>Valido!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label className='form-label' >Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Ingresa tu contraseña"
                className='inputForm'
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback>Válido!</Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row>
            <Button className='submitbutton' type="submit">Iniciar sesión</Button>
          </Row>
          <Row>
            <br />
            <p className='registertext' >¿No tienes una cuenta?</p>
            <a href='/register' className='btn btn-success registerbutton' >Registrarse</a>
          </Row>
        </Form>
      </Container>
    </>
  )
}
