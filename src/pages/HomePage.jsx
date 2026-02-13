import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        borderRadius: '10px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Skill-Based Job Platform</h1>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto 30px' }}>
          Get hired based on your skills, not just your degree. Connect with companies that value what you can actually do.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to="/register" className="btn" style={{
            background: 'white',
            color: '#667eea',
            padding: '12px 30px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Get Started
          </Link>
          <Link to="/jobs" className="btn" style={{
            background: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '12px 30px',
            fontSize: '18px'
          }}>
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '40px' }}>Why Choose Us</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
            <h3>Skill-Based Matching</h3>
            <p>Our algorithm matches you with jobs based on your actual skills, not just your degree or experience.</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
            <h3>Real Opportunities</h3>
            <p>Connect with companies that are actively looking for talent like you. Thousands of jobs posted monthly.</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>💼</div>
            <h3>Career Growth</h3>
            <p>Find internships to start your career and full-time positions to grow. All in one platform.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ marginBottom: '60px', background: '#f8f9fa', padding: '40px', borderRadius: '10px' }}>
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '40px' }}>How It Works</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#667eea',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 15px'
            }}>1</div>
            <h4>Create Profile</h4>
            <p>Sign up and add your skills and projects</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#667eea',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 15px'
            }}>2</div>
            <h4>Get Matched</h4>
            <p>Our AI finds jobs matching your skills</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#667eea',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 15px'
            }}>3</div>
            <h4>Apply</h4>
            <p>Apply to opportunities with one click</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#667eea',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 15px'
            }}>4</div>
            <h4>Get Hired</h4>
            <p>Track applications and land your dream job</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ marginBottom: '60px' }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '40px', color: '#667eea', margin: '0' }}>500+</h3>
            <p>Jobs Posted</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '40px', color: '#667eea', margin: '0' }}>1000+</h3>
            <p>Active Students</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '40px', color: '#667eea', margin: '0' }}>200+</h3>
            <p>Companies</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '30px' }}>
            <h3 style={{ fontSize: '40px', color: '#667eea', margin: '0' }}>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-center" style={{ fontSize: '36px', marginBottom: '40px' }}>What People Say</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ddd',
                borderRadius: '50%',
                marginRight: '15px',
                backgroundImage: 'url(https://via.placeholder.com/60)'
              }}></div>
              <div>
                <h4 style={{ margin: '0' }}>Rahul Sharma</h4>
                <p style={{ margin: '0', color: '#666' }}>Frontend Developer at Google</p>
              </div>
            </div>
            <p>"I got my dream job through this platform! The skill-based matching really works. Companies reached out to me based on my React and JavaScript skills, not my degree."</p>
          </div>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ddd',
                borderRadius: '50%',
                marginRight: '15px',
                backgroundImage: 'url(https://via.placeholder.com/60)'
              }}></div>
              <div>
                <h4 style={{ margin: '0' }}>Priya Patel</h4>
                <p style={{ margin: '0', color: '#666' }}>HR Manager at Tech Corp</p>
              </div>
            </div>
            <p>"As a company, we found amazing talent here. The platform makes it easy to find candidates with exactly the skills we need. Highly recommended!"</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#667eea',
        color: 'white',
        padding: '60px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Ready to Start Your Journey?</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Join thousands of students and companies already using our platform.
        </p>
        <Link to="/register" className="btn" style={{
          background: 'white',
          color: '#667eea',
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          Create Free Account
        </Link>
      </section>
    </div>
  )
}

export default HomePage