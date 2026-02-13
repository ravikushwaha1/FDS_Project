import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero text-center mt-5 mb-5">
        <h1>Find Jobs Based on Your Skills</h1>
        <p className="mt-2 mb-3">
          Not by degree! Get matched with opportunities that value what you can actually do.
        </p>
        <div className="flex flex-center">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/jobs" className="btn">
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features mt-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="grid">
          <div className="card">
            <h3>For Students</h3>
            <p>Create your skill-based profile and get personalized job recommendations.</p>
          </div>
          <div className="card">
            <h3>For Companies</h3>
            <p>Post opportunities and find candidates based on actual skills.</p>
          </div>
          <div className="card">
            <h3>Skill Matching</h3>
            <p>Our algorithm matches your skills with job requirements, not degrees.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats mt-5 mb-5">
        <div className="grid">
          <div className="card text-center">
            <h2>500+</h2>
            <p>Jobs Posted</p>
          </div>
          <div className="card text-center">
            <h2>1000+</h2>
            <p>Active Students</p>
          </div>
          <div className="card text-center">
            <h2>200+</h2>
            <p>Companies</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage