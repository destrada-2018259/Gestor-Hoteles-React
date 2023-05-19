import React from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import jwtDecode from 'jwt-decode';
const URL = `http://localhost:8080/api/`;

export const apiLogin = async(correo, password) => {

    try {
        const response = await axios.post(`${URL}auth/login`,{
            correo,
            password
        });

        const token = response.data.token;

        token ? localStorage.setItem('token', token) : null;

        const rol = jwtDecode(token).rol
        console.log(rol);
        if (response) {
            Swal.fire({
                icon: "success",
                title: "Inicio de sesión completado",
                text: "Todo Listo",
                confirmButton: "OK"
            })
            
        }

        return token;
    } catch ({response: {data: {msg}}}) {
        Swal.fire({
            icon: "error",
            title: "No se ha podido iniciar sesión",
            text: `${msg}`
        });
        return false;
    }
    
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

