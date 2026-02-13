import React, { useState } from 'react'

const JobsPage = () => {
  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', skills: ['React', 'JavaScript', 'CSS'] },
    { id: 2, title: 'Backend Intern', company: 'Startup Inc', location: 'Bangalore', skills: ['Node.js', 'MongoDB', 'Express'] },
    { id: 3, title: 'Full Stack Developer', company: 'Global Solutions', location: 'Hybrid', skills: ['MERN', 'Python', 'SQL'] },
  ])

  return (
    <div className="jobs-page">
      <h1>Browse Jobs & Internships</h1>
      
      <div className="search-bar" style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Search by skill, title, or location..." 
          className="form-control"
          style={{ maxWidth: '500px' }}
        />
      </div>
      
      <div className="grid">
        {jobs.map(job => (
          <div key={job.id} className="card">
            <h3>{job.title}</h3>
            <p><strong>{job.company}</strong></p>
            <p>📍 {job.location}</p>
            <div style={{ margin: '10px 0' }}>
              {job.skills.map(skill => (
                <span key={skill} style={{ 
                  background: '#3498db', 
                  color: 'white', 
                  padding: '3px 8px', 
                  borderRadius: '3px',
                  margin: '0 5px 5px 0',
                  display: 'inline-block',
                  fontSize: '12px'
                }}>
                  {skill}
                </span>
              ))}
            </div>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobsPage