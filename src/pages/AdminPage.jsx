import React, { useState } from 'react'

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('users')
  
  const [users] = useState([
    { id: 1, name: 'Ravi Kumar', email: 'ravi@example.com', role: 'student', status: 'Active' },
    { id: 2, name: 'Priya Singh', email: 'priya@example.com', role: 'student', status: 'Active' },
    { id: 3, name: 'Tech Corp', email: 'info@techcorp.com', role: 'company', status: 'Pending' },
    { id: 4, name: 'Startup Inc', email: 'hello@startup.com', role: 'company', status: 'Verified' },
  ])

  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', status: 'Pending' },
    { id: 2, title: 'Backend Intern', company: 'Startup Inc', status: 'Approved' },
    { id: 3, title: 'React Developer', company: 'Tech Solutions', status: 'Pending' },
  ])

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '30px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', margin: '0' }}>156</h3>
          <p>Total Students</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', margin: '0' }}>45</h3>
          <p>Total Companies</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', margin: '0' }}>89</h3>
          <p>Active Jobs</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', margin: '0' }}>12</h3>
          <p>Pending Approvals</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          className={`btn ${activeTab === 'users' ? 'btn-primary' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users Management
        </button>
        <button 
          className={`btn ${activeTab === 'companies' ? 'btn-primary' : ''}`}
          onClick={() => setActiveTab('companies')}
        >
          Companies
        </button>
        <button 
          className={`btn ${activeTab === 'jobs' ? 'btn-primary' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          Job Approvals
        </button>
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="card">
          <h2>All Users</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Email</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Role</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{user.name}</td>
                  <td style={{ padding: '10px' }}>{user.email}</td>
                  <td style={{ padding: '10px' }}>{user.role}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{
                      color: user.status === 'Active' ? 'green' : 'orange'
                    }}>{user.status}</span>
                  </td>
                  <td style={{ padding: '10px' }}>
                    <button className="btn" style={{ marginRight: '5px' }}>Edit</button>
                    <button className="btn btn-danger">Block</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Jobs Approval Tab */}
      {activeTab === 'jobs' && (
        <div className="card">
          <h2>Pending Job Approvals</h2>
          {jobs.filter(j => j.status === 'Pending').map(job => (
            <div key={job.id} style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{job.title}</h3>
                <p style={{ margin: '0' }}>{job.company}</p>
              </div>
              <div>
                <button className="btn btn-success" style={{ marginRight: '10px' }}>✓ Approve</button>
                <button className="btn btn-danger">✗ Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminPage