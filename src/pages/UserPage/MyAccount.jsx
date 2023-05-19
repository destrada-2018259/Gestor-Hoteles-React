import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getToken } from '../../api/apiLogin'
const URL = `http://localhost:8080/api/`;
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { deleteUser, updateUser } from '../../api/apiUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



export const MyAccount = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    const resultado = await updateUser();
    getUser();
  };

  const [user, setUser] = useState({})
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  const deleteMyAccount = async (event) => {
    event.preventDefault()
    await Swal.fire({
      title: 'Quieres borrar tu cuenta?',
      text: "Perderás tus datos en Todo-Hoteles",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Elimina mi cuenta!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser();
        navigate('/');
        Swal.fire({
          title: 'Borrado!',
          text: 'Tu cuenta ha sido eliminada, vuelve pronto!',
          icon: 'success',
          confirmButton: 'Hecho'
        }
        )
      }
    })
  }

  const getUser = async () => {
    try {

      const token = getToken();
      const id = jwtDecode(token).uid;
      const { data: { usuario } } = await axios.get(`${URL}usuarios/mostrar/${id}`);
      setUser(usuario);
      console.log(usuario);
      return data;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user.nombre);

  return (
    <>
      <Container>
        <h1 className='header-myacc' >Mi Cuenta de Todo-Hoteles</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre Completo"
                name="nombre"
                defaultValue={user.nombre}
              />
              <Form.Control.Feedback>Valido!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Por favor, ingresa un nombre
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Correo:</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="ejemplo@gmail.com"
                name="correo"
                defaultValue={user.correo}
              />
              <Form.Control.Feedback>Valido!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Por favor, ingresa un correo
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Contraseña:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  required
                  name="password"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa una contraseña
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Button className='submitbutton btn-success' type="submit">Actualizar mi perfil!</Button>
          </Row>
          <Row className='mb-3'>
            <Button onClick={deleteMyAccount} className='btn btn-danger btn-delete' >Eliminar mi cuenta</Button>
          </Row>
        </Form>
      </Container>
    </>
  )
}