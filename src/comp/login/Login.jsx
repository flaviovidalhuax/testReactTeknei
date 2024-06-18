import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';


const Login = ({setEdo, edo}) => {

   
    const [administrador, setAdministrador] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica de autenticación
      if (administrador === 'Administrador' 
        && password === 'Admin123') {
        alert('Inicio de sesión exitoso!');
        setEdo(true)
      } else {
        setError('Credenciales inválidas, por favor intenta de nuevo.');
      }
      
    };
  console.log(edo);

    return (
      <>
     
      <Container  className={edo ? 'hidden':'visible'} id="hiddenComponent">
        <Row className="justify-content-md-center mt-5">
          <Col md="12">
            <h2 className="text-center">Iniciar sesión</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Administrador</Form.Label>
                <Form.Control
                  type="texto"
                  placeholder="Ingresa tu administrador"
                  value={administrador}
                  onChange={(e) => setAdministrador(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit" block className='m-4'>
                Iniciar sesión
              </Button>             
              
            </Form>
          </Col>
        </Row>
      </Container>
      </>
    );
}

export default Login