import React from 'react'
import "../../index.css"

export const Hotel = ({nombre, direccion, ciudad, estrellas, telefono, correo}) => {
  return (
    <>
        <tr  className='table-content'>
            <th className='table-content' >
                {nombre}
            </th>
            <td className='table-content'>
                {direccion}
            </td>
            <td className='table-content'>
                {ciudad}
            </td>
            <td className='table-content'>
                {estrellas}
            </td>
            <td className='table-content'>
                {telefono}
            </td>
            <td className='table-content'>
                {correo}
            </td>
        </tr>
    </>
  )
}
