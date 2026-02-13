import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const JobDetailPage = () => {
  const { id } = useParams()
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const [applied, setApplied] = useState(false)

  // Mock job data (in real app, fetch based on id)
  const job = {
    id: id,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    logo: '🏢',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹12,00,000',
    posted: '2 days ago',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Redux'],
    description: `We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing design systems.`,
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and libraries',
      'Optimize applications for maximum speed',
      'Collaborate with backend developers',
      'Ensure responsive design implementation'
    ],
    requirements: [
      '2+ years of experience with React',
      'Strong JavaScript knowledge',
      'Experience with state management (Redux)',
      'Understanding of responsive design',
      'Good communication skills'
    ],
    perks: ['Remote work', 'Flexible hours', 'Health insurance', 'Learning budget']
  }

  const handleApply = (e) => {
    e.preventDefault()
    // In real app, send to backend
    console.log('Applying with:', { jobId: id, coverLetter })
    setApplied(true)
    setShowApplyForm(false)
  }

  if (applied) {
    return (
      <div className="card text-center" style={{ maxWidth: '500px', margin: '50px auto', padding: '40px' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
        <h2>Application Submitted!</h2>
        <p>Your application for {job.title} at {job.company} has been sent.</p>
        <Link to="/student" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Track Application
        </Link>
      </div>
    )
  }

  return (
    <div className="job-detail-page">
      <Link to="/jobs" style={{ textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Jobs
      </Link>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div style={{ fontSize: '50px' }}>{job.logo}</div>
          <div>
            <h1 style={{ margin: '0 0 5px 0' }}>{job.title}</h1>
            <p style={{ margin: '0', fontSize: '18px' }}>{job.company}</p>
          </div>
          <span style={{ 
            background: '#3498db',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            marginLeft: 'auto'
          }}>
            {job.type}
          </span>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '20px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>📍</div>
            <div><strong>Location</strong></div>
            <div>{job.location}</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>💰</div>
            <div><strong>Salary</strong></div>
            <div>{job.salary}</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>⏰</div>
            <div><strong>Posted</strong></div>
            <div>{job.posted}</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>👥</div>
            <div><strong>Applicants</strong></div>
            <div>24 applied</div>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div>
          <div className="card">
            <h2>Job Description</h2>
            <p>{job.description}</p>

            <h3>Responsibilities</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {job.responsibilities.map((item, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
              ))}
            </ul>

            <h3>Requirements</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {job.requirements.map((item, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="card">
            <h2>Required Skills</h2>
            <div style={{ marginBottom: '20px' }}>
              {job.skills.map(skill => (
                <span key={skill} style={{
                  background: '#e74c3c',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  margin: '0 5px 5px 0',
                  display: 'inline-block'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3>Perks & Benefits</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {job.perks.map((perk, i) => (
                <li key={i} style={{ marginBottom: '5px' }}>✨ {perk}</li>
              ))}
            </ul>

            {!showApplyForm ? (
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '15px', fontSize: '18px' }}
                onClick={() => setShowApplyForm(true)}
              >
                Apply Now
              </button>
            ) : (
              <div className="card" style={{ marginTop: '20px' }}>
                <h3>Apply for this position</h3>
                <form onSubmit={handleApply}>
                  <div className="form-group">
                    <label className="form-label">Cover Letter (Optional)</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      placeholder="Why are you a good fit for this role?"
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                      Submit Application
                    </button>
                    <button 
                      type="button" 
                      className="btn"
                      onClick={() => setShowApplyForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailPage