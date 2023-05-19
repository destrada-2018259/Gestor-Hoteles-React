import React, { useEffect, useState } from 'react'
import { getHoteles } from '../../api/apiHotel';
import Table from 'react-bootstrap/Table';
import { Hotel } from './Hotel';
import { Container } from 'react-bootstrap';
import "../../index.css"
export const HotelTable = () => {

    const [hotels, setHotels] = useState([{}]);

    const reload = async () => {

        const result = await getHoteles();
        setHotels(result);

    }
    useEffect(() => {
        reload();
    }, [])

    return (
        <>
            <Container className='tablaHoteles'>

            <Table striped bordered hover  >
                <thead>
                    <tr  className='table-header'>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                        <th>Estrellas</th>
                        <th>Contacto</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotels.map((hotel, index) =>{
                            return(
                                <Hotel key={index} {...hotel} />
                                )
                            })
                        }
                </tbody>
            </Table>
                        </Container>
        </>
    )
}
