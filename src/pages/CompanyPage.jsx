import React, { useState } from 'react'

const CompanyPage = () => {
  const [showPostForm, setShowPostForm] = useState(false)
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [jobSkills, setJobSkills] = useState('')
  
  const [postedJobs, setPostedJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', applicants: 5, status: 'Active' },
    { id: 2, title: 'React Intern', location: 'Bangalore', applicants: 12, status: 'Active' },
  ])

  const handlePostJob = (e) => {
    e.preventDefault()
    const newJob = {
      id: postedJobs.length + 1,
      title: jobTitle,
      location: jobLocation,
      applicants: 0,
      status: 'Active'
    }
    setPostedJobs([...postedJobs, newJob])
    setShowPostForm(false)
    setJobTitle('')
    setJobDescription('')
    setJobLocation('')
    setJobSkills('')
  }

  return (
    <div className="company-page">
      <h1>Company Dashboard</h1>
      <p>Welcome to your company portal</p>

      <div style={{ marginBottom: '20px' }}>
        <button 
          className="btn btn-primary" 
          onClick={() => setShowPostForm(!showPostForm)}
          style={{ fontSize: '16px', padding: '12px 24px' }}
        >
          {showPostForm ? 'Cancel' : '+ Post New Job/Internship'}
        </button>
      </div>

      {showPostForm && (
        <div className="card" style={{ maxWidth: '600px', marginBottom: '30px' }}>
          <h2>Post New Opportunity</h2>
          <form onSubmit={handlePostJob}>
            <div className="form-group">
              <label className="form-label">Job Title *</label>
              <input
                type="text"
                className="form-control"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g., Frontend Developer"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location *</label>
              <input
                type="text"
                className="form-control"
                required
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                placeholder="e.g., Remote, Bangalore, Mumbai"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Required Skills *</label>
              <input
                type="text"
                className="form-control"
                required
                value={jobSkills}
                onChange={(e) => setJobSkills(e.target.value)}
                placeholder="e.g., React, Node.js, MongoDB"
              />
              <small>Separate skills with commas</small>
            </div>

            <div className="form-group">
              <label className="form-label">Job Description *</label>
              <textarea
                className="form-control"
                rows="5"
                required
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Describe the role, responsibilities, requirements..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Job Type</label>
              <select className="form-control">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Post Job</button>
          </form>
        </div>
      )}

      <h2>Your Posted Jobs</h2>
      <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
        {postedJobs.map(job => (
          <div key={job.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0' }}>{job.title}</h3>
              <p style={{ margin: '0 0 5px 0' }}>📍 {job.location}</p>
              <p style={{ margin: '0' }}>
                <span style={{ background: '#e74c3c', color: 'white', padding: '3px 8px', borderRadius: '3px', fontSize: '12px' }}>
                  {job.applicants} Applicants
                </span>
                <span style={{ marginLeft: '10px', color: job.status === 'Active' ? 'green' : 'gray' }}>
                  {job.status}
                </span>
              </p>
            </div>
            <div>
              <button className="btn" style={{ marginRight: '10px' }}>View</button>
              <button className="btn btn-danger">Close</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyPage