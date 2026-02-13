import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StudentPage = () => {
  const [skills, setSkills] = useState(['React', 'JavaScript', 'Node.js'])
  const [newSkill, setNewSkill] = useState('')
  const [applications] = useState([
    { id: 1, job: 'Frontend Developer', company: 'Tech Corp', status: 'Pending', date: '2024-01-15' },
    { id: 2, job: 'Backend Intern', company: 'Startup Inc', status: 'Shortlisted', date: '2024-01-10' },
  ])

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  return (
    <div className="student-page">
      <h1>Student Dashboard</h1>
      <p>Welcome back, Ravi! 👋</p>
      
      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Left Column - Profile & Skills */}
        <div>
          <div className="card">
            <h2>Your Profile</h2>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value="Ravi Kumar" readOnly />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value="ravi@example.com" readOnly />
            </div>
            <button className="btn btn-primary">Edit Profile</button>
          </div>

          <div className="card">
            <h2>Your Skills</h2>
            <div style={{ marginBottom: '15px' }}>
              {skills.map(skill => (
                <span key={skill} style={{
                  background: '#3498db',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  margin: '0 5px 5px 0',
                  display: 'inline-block'
                }}>
                  {skill} 
                  <button onClick={() => removeSkill(skill)} style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    marginLeft: '5px',
                    cursor: 'pointer'
                  }}>×</button>
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Add new skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button onClick={addSkill} className="btn">Add</button>
            </div>
          </div>

          <div className="card">
            <h2>Projects</h2>
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
              <h3>E-commerce Website</h3>
              <p>Built with MERN stack - 2024</p>
              <button className="btn btn-primary" style={{ padding: '5px 10px', fontSize: '14px' }}>Edit</button>
            </div>
            <button className="btn">+ Add Project</button>
          </div>
        </div>

        {/* Right Column - Applications */}
        <div>
          <div className="card">
            <h2>Your Applications</h2>
            {applications.map(app => (
              <div key={app.id} style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px'
              }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{app.job}</h3>
                <p style={{ margin: '0 0 5px 0' }}>{app.company}</p>
                <p style={{ margin: '0 0 5px 0' }}>
                  Status: 
                  <span style={{
                    color: app.status === 'Shortlisted' ? 'green' : 'orange',
                    fontWeight: 'bold',
                    marginLeft: '5px'
                  }}>{app.status}</span>
                </p>
                <small>Applied: {app.date}</small>
              </div>
            ))}
            <Link to="/jobs" className="btn" style={{ textAlign: 'center', display: 'block' }}>
              Browse More Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPage