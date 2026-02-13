import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page imports - ONLY ONCE!
import HomePage from './pages/HomePage.jsx'
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
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/job/:id" element={<JobDetailPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App