import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetailPage = () => {
  const { id } = useParams()
  
  return (
    <div className="job-detail">
      <h1>Job Details</h1>
      <p>Viewing job ID: {id}</p>
      
      <div className="card" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <h2>Frontend Developer</h2>
        <p><strong>Tech Corp</strong> • Remote</p>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Required Skills:</h3>
          <div>
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
          </div>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Description:</h3>
          <p>We are looking for a skilled frontend developer to join our team...</p>
        </div>
        
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  )
}

export default JobDetailPage