import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import TiempoActual from '../TiempoActual ';

const DataLink = ({ edo,setEdo }) => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const url = "https://randomuser.me/api/";
    axios.get(url)
      .then((inf) => setData(inf.data))
      .catch((err) => console.log(err));
  }, []);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  console.log(data);

  return (
    <> 
    
    <Container className={edo ? 'visible' : 'hidden'} id="hiddenComponent">
        <div >
             <img src={data?.results?.[0]?.picture.large} class="card-img-top img-fluid" alt="..."/>
        <h1>Usario: {data?.results?.[0]?.name.first}</h1>

        <TiempoActual></TiempoActual>
        
        <Button variant="warning" block className='m-4' onClick={()=>{setEdo(false)}}>
                Cerrar sesión
        </Button>   
        
     </div>

      <h2>Componente Visible</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className='card p-3'>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register('name', {
              required: 'Nombre es requerido',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Solo se permiten letras',
              },
            })}
            defaultValue={data?.results?.[0]?.name
              ? `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
              : ''}
          />
          {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
        </Form.Group>
        
        <Form.Group controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            {...register('address', {
              required: 'Dirección es requerida',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Solo se permiten letras',
              },
            })}
            defaultValue={data?.results?.[0]?.location?.city 
              ? `${data.results[0].location.state}, ${data.results[0].location.country}` 
              : ''}
          />

        </Form.Group>
        
        <Form.Group controlId="formPostcode">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su código postal"
            {...register('postcode', {
              required: 'Código postal es requerido',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Solo se permiten números',
              },
            })}
            defaultValue={data?.results?.[0]?.location?.postcode}
          />
          
        </Form.Group>
        
        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            {...register('email', {
              required: 'Correo electrónico es requerido',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Correo electrónico no es válido',
              },
            })}
            defaultValue={data?.results?.[0]?.email}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='m-3'>
          Enviar
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default DataLink;
