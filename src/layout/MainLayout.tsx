import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router'
import Footer from '@/components/layout/Footer'

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-310px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
