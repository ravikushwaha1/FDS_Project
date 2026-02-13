import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  
  // Get user from localStorage (will be replaced with context later)
  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          SkillBased Jobs
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/jobs" className="navbar-link">
            Browse Jobs
          </Link>

          {!token ? (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </>
          ) : (
            <>
              {userRole === 'student' && (
                <Link to="/student" className="navbar-link">
                  Dashboard
                </Link>
              )}
              {userRole === 'company' && (
                <Link to="/company" className="navbar-link">
                  Company Dashboard
                </Link>
              )}
              {userRole === 'admin' && (
                <Link to="/admin" className="navbar-link">
                  Admin Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="navbar-link btn-link">
                Logout
              </button>
            </>
          )}
        </div>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </nav>
  )
}

export default Navbar