import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/apiRegister';


export const RegisterPage = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        event.preventDefault();
        const resultado = await registerUser(nombre, correo, password);
        if(resultado === false) return null;
        navigate('/')
    };

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <>
            <Container>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 mt-5">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre Completo"
                                name= "nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <Form.Control.Feedback>Valido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                    Por favor, ingresa un nombre
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="ejemplo@gmail.com"
                                name="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                            <Form.Control.Feedback>Valido!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                    Por favor, ingresa un correo
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, ingresa una contraseña
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>

                        <Button className='submitbutton btn-success' type="submit">Registrarme!</Button>
                    </Row>
                </Form>
            </Container>
        </>
    )
}
