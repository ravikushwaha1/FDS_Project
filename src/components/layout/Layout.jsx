import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout