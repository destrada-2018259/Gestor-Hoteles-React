import axios from 'axios'
import jwtDecode from 'jwt-decode';
import React from 'react'
import Swal from 'sweetalert2';
import { getToken } from './apiLogin';
const URL = 'http://localhost:8080/api'

export const deleteUser = async() =>{
    const token = getToken();
    const id = jwtDecode(token).uid;

    try {
        const response = axios.delete(`${URL}/usuarios/eliminar/${id}`);
        return true;
    } catch ({response: {data: {msg}}}) {
        Swal.fire({
            icon:"error",
            title:"No se ha podido actualizar el perfil",
            text:`${msg}`
        })
        return false
    }
}

export const updateUser = async() => {

    let form ={
        nombre: document.getElementById('validationCustom01').value,
        correo: document.getElementById('validationCustom02').value,
        password: document.getElementById('validationCustomUsername').value
    }

    console.log(form)

    const token = getToken();
    const id = jwtDecode(token).uid;
    try {
        const response = await axios.put(`${URL}/usuarios/editar/${id}`,form);

        if(response){
            Swal.fire({
                icon:"success",
                title:"Perfil Actualizado",
                text:"Cambios realizados con exito",
                confirmButtonText: 'OK'
            })
        }
        return true
    } catch ({response: {data: {msg}}}) {
        Swal.fire({
            icon:"error",
            title:"No se ha podido actualizar el perfil",
            text:`${msg}`
        })
        return false
    }
}
