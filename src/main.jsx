import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {HomePage} from './pages/HomePage/HomePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { AdminPage } from './pages/AdminPage'
import { SuperAdminPage } from './pages/SuperAdminPage/SuperAdminPage'
import { UserPage } from './pages/UserPage/UserPage'
import { HotelPage } from './pages/HotelPage/HotelPage'
import { MyAccount } from './pages/UserPage/MyAccount'
import { ReservePage } from './pages/UserPage/ReservePage'
import { HistoryPage } from './pages/UserPage/HistoryPage'
import { LogoutPage } from './pages/UserPage/LogoutPage'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      },
      {
        path:'/superadmin',
        element: <SuperAdminPage />,
      },
      {
        path: '/user',
        element: <UserPage />,
        children:[
          {
            path:'',
            element: <MyAccount />
          },
          {
            path:'reserve',
            element: <ReservePage />
          },
          {
            path:'history',
            element: <HistoryPage />
          },
          {
            path:'logout',
            element: <LogoutPage />
          }
        ]
      },
      {
        path: '/hotels',
        element: <HotelPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
