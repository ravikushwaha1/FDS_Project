import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page imports
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import StudentPage from './pages/StudentPage.jsx'
import CompanyPage from './pages/CompanyPage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobDetailPage from './pages/JobDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// Component imports
import Navbar from './components/common/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container" style={{ minHeight: 'calc(100vh - 200px)', padding: '20px 0' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/job/:id" element={<JobDetailPage />} />
          
          {/* Protected Routes */}
          <Route path="/student" element={<StudentPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App