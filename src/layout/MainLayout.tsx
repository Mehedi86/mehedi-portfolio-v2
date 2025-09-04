import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
