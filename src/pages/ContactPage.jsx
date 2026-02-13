import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, send to backend
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact-page">
      <h1 className="text-center" style={{ fontSize: '42px', marginBottom: '10px' }}>Contact Us</h1>
      <p className="text-center" style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Contact Form */}
        <div className="card" style={{ padding: '30px' }}>
          <h2 style={{ marginBottom: '20px' }}>Send Message</h2>
          
          {submitted && (
            <div className="alert alert-success" style={{ marginBottom: '20px' }}>
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject *</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="card" style={{ padding: '30px', marginBottom: '20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Get in Touch</h2>
            
            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>📍</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Address</h4>
                <p style={{ margin: '0', color: '#666' }}>
                  SkillBased Jobs Pvt Ltd<br />
                  Bangalore, Karnataka - 560001<br />
                  India
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>📧</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Email</h4>
                <p style={{ margin: '0', color: '#666' }}>support@skillbasedjobs.com</p>
                <p style={{ margin: '0', color: '#666' }}>careers@skillbasedjobs.com</p>
              </div>
            </div>

            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>📞</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Phone</h4>
                <p style={{ margin: '0', color: '#666' }}>+91 98765 43210</p>
                <p style={{ margin: '0', color: '#666' }}>Mon-Fri, 9am to 6pm</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>⏰</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Business Hours</h4>
                <p style={{ margin: '0', color: '#666' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p style={{ margin: '0', color: '#666' }}>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="card" style={{ padding: '30px' }}>
            <h2 style={{ marginBottom: '20px' }}>Follow Us</h2>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <a href="#" style={{
                width: '50px',
                height: '50px',
                background: '#3b5998',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '20px'
              }}>f</a>
              <a href="#" style={{
                width: '50px',
                height: '50px',
                background: '#1da1f2',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '20px'
              }}>𝕏</a>
              <a href="#" style={{
                width: '50px',
                height: '50px',
                background: '#0077b5',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '20px'
              }}>in</a>
              <a href="#" style={{
                width: '50px',
                height: '50px',
                background: '#e4405f',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '20px'
              }}>ig</a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card" style={{ padding: '20px', marginTop: '20px' }}>
            <div style={{
              background: '#f0f0f0',
              height: '200px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🗺️</div>
                <p>Map will be integrated here</p>
                <small>Bangalore, Karnataka</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage