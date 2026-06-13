import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    if (username === 'testuser' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', username)
      navigate('/dashboard')
    } else {
      setError('Invalid username or password. Try testuser / password.')
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link" data-testid="skip-to-main">
        Skip to main content
      </a>
      <main id="main-content" className="page">
        <h1>Sign In</h1>
        <form
          onSubmit={handleLogin}
          aria-label="Login form"
          data-testid="login-form"
          style={{ maxWidth: 400 }}
        >
          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="error-msg"
              data-testid="login-error"
            >
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              data-testid="username-input"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              data-testid="password-input"
              required
              aria-required="true"
            />
          </div>

          <button type="submit" data-testid="login-button">
            Sign In
          </button>
        </form>
      </main>
    </>
  )
}