import React, { useState } from 'react'
import { handleAuth } from '../api/auth'
import authActions from '../constants/authActions'
import { useNavigate } from 'react-router-dom'
import routes from '../constants/routes'
import {useAppContext} from '../context/AppContextProvider'
import { signIn } from '../context/appActionCreators'


const SignInForm = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {dispatch} = useAppContext()
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

    handleAuth(authActions.signIn, user)
      .then(data => {
        console.log(data)
        setError('')
        dispatch(signIn(data.token))
        navigate(routes.recipes)


      })
      .catch(err => {
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
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  )
}

export default SignInForm
