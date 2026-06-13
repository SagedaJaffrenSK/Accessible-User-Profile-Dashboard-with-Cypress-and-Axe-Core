import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

const MOCK_USERS = [
  { id: 0, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 1, name: 'Bob Smith',    email: 'bob@example.com',   role: 'Editor' },
  { id: 2, name: 'Carol White',  email: 'carol@example.com', role: 'Viewer' },
  { id: 3, name: 'Dan Brown',    email: 'dan@example.com',   role: 'Editor' },
]

export default function DashboardPage() {
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'User'

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav aria-label="Main navigation" data-testid="main-navigation">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile/edit">Edit Profile</Link>
        <button
  type="button"
  onClick={handleLogout}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLogout();
    }
  }}
  className="danger"
  data-testid="logout-button"
  style={{ marginLeft: 'auto' }}
>
  Logout
</button>
      </nav>

      <main id="main-content" className="page">
        <h1 data-testid="page-heading">Welcome, {username}!</h1>
        <section aria-labelledby="users-heading">
          <h2 id="users-heading">User Directory</h2>
          <table data-testid="user-table" aria-label="User directory table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_USERS.map(user => (
                <tr key={user.id} data-testid={`user-row-${user.id}`}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  )
}