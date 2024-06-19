import React from 'react'
import { Route, Routes } from 'react-router-dom'
import appRoutes from './config/routes'
import './components/Navbar.css';

const AppRoutes = () => {
  return (
  <Routes>
{appRoutes.map((route) =>  (
    <Route  key={route.path} path={route.path} element={route.Guard ? <route.Guard><route.Component/></route.Guard> 
    : <route.Component />} />
))}
  </Routes>
  )
}

export default AppRoutes