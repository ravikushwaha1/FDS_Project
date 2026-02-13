import React from 'react'

const CompanyPage = () => {
  return (
    <div className="company-page">
      <h1>Company Dashboard</h1>
      <p>Welcome to your company dashboard!</p>
      
      <div className="grid" style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>Company Profile</h3>
          <p>Update your company information</p>
          <button className="btn">Edit Profile</button>
        </div>
        
        <div className="card">
          <h3>Post Job</h3>
          <p>Create new job or internship posting</p>
          <button className="btn">Post Now</button>
        </div>
        
        <div className="card">
          <h3>View Applicants</h3>
          <p>Review applications received</p>
          <button className="btn">View</button>
        </div>
      </div>
    </div>
  )
}

export default CompanyPage