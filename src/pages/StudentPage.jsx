import React from 'react'

const StudentPage = () => {
  return (
    <div className="student-page">
      <h1>Student Dashboard</h1>
      <p>Welcome to your student dashboard!</p>
      
      <div className="grid" style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>Your Profile</h3>
          <p>Manage your skills and projects</p>
          <button className="btn">View Profile</button>
        </div>
        
        <div className="card">
          <h3>Recommended Jobs</h3>
          <p>Jobs matching your skills</p>
          <button className="btn">View Jobs</button>
        </div>
        
        <div className="card">
          <h3>Applications</h3>
          <p>Track your job applications</p>
          <button className="btn">Track Status</button>
        </div>
      </div>
    </div>
  )
}

export default StudentPage