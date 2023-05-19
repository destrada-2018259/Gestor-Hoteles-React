import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavbarTH } from './components/NavbarTH'
import viteLogo from '/vite.svg'
import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { FooterTH } from './components/FooterTH'

function App() {

  const navigate = useNavigate();

  return(
    <>
      <NavbarTH ></NavbarTH>
      <Outlet />
      <FooterTH></FooterTH>
    </>
  )
}

export default App
