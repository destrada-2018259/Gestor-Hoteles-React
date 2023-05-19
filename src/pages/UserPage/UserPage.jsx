import jwtDecode from 'jwt-decode';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { getToken } from '../../api/apiLogin'
import { NavUserTH } from '../../components/NavUserTH'

export const UserPage = () => {

 
  return (
    <>
      <NavUserTH  />
      <Outlet />
    </>
  )
}
