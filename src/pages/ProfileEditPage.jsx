import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProfileEditPage() {
  const [name, setName]   = useState('Alice Johnson')
  const [email, setEmail] = useState('alice@example.com')
  const [bio, setBio]     = useState('Frontend developer passionate about accessibility.')
  const [color, setColor] = useState('blue')
  const [success, setSuccess] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav aria-label="Main navigation">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile/edit">Edit Profile</Link>
      </nav>

      <main id="main-content" className="page">
        <h1>Edit Profile</h1>

        {success && (
          <div
            role="alert"
            aria-live="polite"
            className="success-msg"
            data-testid="success-message"
          >
            Profile saved successfully!
          </div>
        )}

        <form
          onSubmit={handleSave}
          aria-label="Profile edit form"
          data-testid="profile-form"
          style={{ maxWidth: 500 }}
        >
          <div className="form-group">
            <label htmlFor="name-input">Full Name</label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              data-testid="name-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email-input">Email Address</label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              data-testid="email-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio-textarea">Biography</label>
            <textarea
              id="bio-textarea"
              rows={4}
              value={bio}
              onChange={e => setBio(e.target.value)}
              data-testid="bio-textarea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color-preference-select">Color Preference</label>
            <select
              id="color-preference-select"
              value={color}
              onChange={e => setColor(e.target.value)}
              data-testid="color-preference-select"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
            </select>
          </div>

          <button type="submit" data-testid="save-button">Save Changes</button>
          <Link to="/dashboard">
            <button type="button" className="secondary" data-testid="cancel-button">
              Cancel
            </button>
          </Link>
        </form>
      </main>
    </>
  )
}