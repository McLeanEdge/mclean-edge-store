import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'
import Toast from './Toast.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toast />
    </>
  )
}
