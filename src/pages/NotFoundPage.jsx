import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not-found" style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '72px', color: '#e74c3c' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn" style={{ marginTop: '20px' }}>
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFoundPage