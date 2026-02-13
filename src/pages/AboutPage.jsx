import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        borderRadius: '10px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>About SkillBased Jobs</h1>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          We're on a mission to revolutionize how students get hired - based on skills, not degrees.
        </p>
      </section>

      {/* Our Story */}
      <section style={{ marginBottom: '60px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              SkillBased Jobs was founded in 2024 by a group of students who realized that the traditional hiring system was broken. Too many talented students were being rejected because they didn't have the "right" degree, while companies struggled to find candidates with actual skills.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              We created this platform to bridge the gap between talented students and forward-thinking companies. Our skill-based matching algorithm ensures that you get noticed for what you can actually do, not just your educational background.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Today, we've helped over 1000+ students find internships and jobs at 200+ companies, and we're just getting started!
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: '#f0f0f0',
              padding: '40px',
              borderRadius: '10px',
              fontSize: '120px'
            }}>
              
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ marginBottom: '60px', background: '#f8f9fa', padding: '40px', borderRadius: '10px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>🎯</div>
            <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Our Mission</h3>
            <p style={{ textAlign: 'center', lineHeight: '1.8' }}>
              To create a world where opportunities are based on skills and potential, not educational background or social connections.
            </p>
          </div>
          <div className="card" style={{ padding: '30px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>👁️</div>
            <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Our Vision</h3>
            <p style={{ textAlign: 'center', lineHeight: '1.8' }}>
              To become the go-to platform for skill-based hiring, connecting millions of talented students with companies that value real abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '40px' }}>Our Core Values</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>💡</div>
            <h3>Skill First</h3>
            <p>We believe skills matter more than degrees. Period.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🤝</div>
            <h3>Transparency</h3>
            <p>Clear communication and honest feedback for everyone.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🌱</div>
            <h3>Growth</h3>
            <p>Continuous learning and improvement for all users.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
            <h3>Innovation</h3>
            <p>Always finding better ways to match talent with opportunities.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🌍</div>
            <h3>Inclusivity</h3>
            <p>Equal opportunities for everyone, everywhere.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎉</div>
            <h3>Success</h3>
            <p>Celebrating every student's career milestone.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: '60px' }}>
        <h2 className="text-center" style={{ fontSize: '32px', marginBottom: '40px' }}>Meet Our Team</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: '#667eea',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '40px'
            }}>RJ</div>
            <h3>Ravi Kumar</h3>
            <p style={{ color: '#667eea', fontWeight: 'bold' }}>Founder & Developer</p>
            <p>CS student passionate about helping others find opportunities.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: '#764ba2',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '40px'
            }}>PS</div>
            <h3>Priya Singh</h3>
            <p style={{ color: '#764ba2', fontWeight: 'bold' }}>UI/UX Designer</p>
            <p>Creating beautiful and intuitive experiences for users.</p>
          </div>
          <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: '#e74c3c',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '40px'
            }}>AK</div>
            <h3>Ankit Kumar</h3>
            <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>Backend Developer</p>
            <p>Building robust systems to power the platform.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#f8f9fa',
        padding: '50px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Join Us in Our Mission</h2>
        <p style={{ marginBottom: '30px' }}>Be part of the skill-based hiring revolution.</p>
        <Link to="/register" className="btn btn-primary" style={{ padding: '12px 30px' }}>
          Get Started Today
        </Link>
      </section>
    </div>
  )
}

export default AboutPage