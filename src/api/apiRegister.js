import React from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import jwtDecode from 'jwt-decode'
const token = localStorage.getItem('token')
const URL = `http://localhost:8080/api`

export const registerUser = async(nombre, correo, password) => {

    try{
        const response = await axios.post(`${URL}/usuarios/register`,{
            nombre,
            correo,
            password
        });
        if (response) {
            Swal.fire({
                icon: "success",
                title: "Registro Completado",
                text: `Bienvenido a Todo-Hoteles ${nombre}`,
                confirmButtonText: 'Vamos'
            })
        }
        return true;
    } catch ({response: {data: {msg}}}){
        Swal.fire({
            icon: "error",
            title: "No se ha podido registrar",
            text: `${msg}`
        })
        return false
    }
}
