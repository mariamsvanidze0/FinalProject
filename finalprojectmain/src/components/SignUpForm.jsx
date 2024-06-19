import React, { useState } from 'react'
import { handleAuth } from '../api/auth'
import authActions from '../constants/authActions'
import { useNavigate } from 'react-router-dom'
import routes from '../constants/routes'

const SignUpForm = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null) 

    handleAuth(authActions.signUp, user)
      .then(data => {
        console.log('Registration successful:', data)
        navigate(routes.signIn, {state:{success: true}})
        setError('')

      })
      .catch(err => {
        console.error('Registration error:', err)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading && <h1>Loading...</h1>}
      <div>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      <button type="submit" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  )
}

export default SignUpForm
