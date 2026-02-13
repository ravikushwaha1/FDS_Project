import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('all')
  
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-time', skills: ['React', 'JavaScript', 'CSS'], posted: '2 days ago', logo: '🏢' },
    { id: 2, title: 'Backend Intern', company: 'Startup Inc', location: 'Bangalore', type: 'Internship', skills: ['Node.js', 'MongoDB', 'Express'], posted: '1 day ago', logo: '🚀' },
    { id: 3, title: 'Full Stack Developer', company: 'Global Solutions', location: 'Hybrid', type: 'Full-time', skills: ['MERN', 'Python', 'SQL'], posted: '5 days ago', logo: '🌐' },
    { id: 4, title: 'UI/UX Designer', company: 'Creative Studio', location: 'Mumbai', type: 'Part-time', skills: ['Figma', 'Adobe XD', 'UI Design'], posted: '3 days ago', logo: '🎨' },
    { id: 5, title: 'React Developer', company: 'Tech Solutions', location: 'Remote', type: 'Full-time', skills: ['React', 'Redux', 'TypeScript'], posted: 'Just now', logo: '⚛️' },
  ])

  // Filter jobs based on search
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase())
    const matchesType = jobType === 'all' || job.type === jobType
    
    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="jobs-page">
      <h1>Browse Jobs & Internships</h1>
      <p>Find opportunities matching your skills</p>
      
      {/* Search Section */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr auto', gap: '10px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by title, company, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select 
            className="form-control"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      {/* Results Count */}
      <p style={{ marginBottom: '20px' }}>
        Found <strong>{filteredJobs.length}</strong> opportunities
      </p>
      
      {/* Jobs List */}
      <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
        {filteredJobs.map(job => (
          <div key={job.id} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '40px' }}>{job.logo}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0 0 5px 0' }}>{job.title}</h2>
                <span style={{ 
                  background: job.type === 'Internship' ? '#27ae60' : '#3498db',
                  color: 'white',
                  padding: '3px 10px',
                  borderRadius: '15px',
                  fontSize: '12px'
                }}>
                  {job.type}
                </span>
              </div>
              <p style={{ margin: '0 0 5px 0' }}><strong>{job.company}</strong> • 📍 {job.location}</p>
              <p style={{ margin: '0 0 10px 0', color: '#666' }}>Posted {job.posted}</p>
              
              <div style={{ margin: '10px 0' }}>
                {job.skills.map(skill => (
                  <span key={skill} style={{ 
                    background: '#f0f0f0',
                    color: '#333',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    margin: '0 5px 5px 0',
                    display: 'inline-block',
                    fontSize: '13px'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <Link to={`/job/${job.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button className="btn">Save Job</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="card text-center" style={{ padding: '40px' }}>
          <h3>No jobs found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}

export default JobsPage