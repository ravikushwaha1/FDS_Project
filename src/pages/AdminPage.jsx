import React from 'react'

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p>Welcome to admin dashboard!</p>
      
      <div className="grid" style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>User Management</h3>
          <p>Manage students and companies</p>
          <button className="btn">Manage</button>
        </div>
        
        <div className="card">
          <h3>Company Verification</h3>
          <p>Verify company registrations</p>
          <button className="btn">Verify</button>
        </div>
        
        <div className="card">
          <h3>Job Approval</h3>
          <p>Approve or reject job postings</p>
          <button className="btn">Review</button>
        </div>
        
        <div className="card">
          <h3>Statistics</h3>
          <p>View platform analytics</p>
          <button className="btn">View</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage