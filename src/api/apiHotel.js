import React from 'react'
import axios from 'axios'
const URL = 'http://localhost:8080/api'

export const getHoteles = async() => {
    try {
        const {data} = await axios.get(`${URL}/hotel/mostrar`)
        return data;
    } catch (error) {
        console.log("error en la petición")
    }
}
