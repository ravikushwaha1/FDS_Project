import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')

  // Not logged in
  if (!token) {
    return <Navigate to="/login" />
  }

  // Check role if specified
  if (role && role !== userRole) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute