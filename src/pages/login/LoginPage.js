import React from 'react'
import { Redirect } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthContext'
import { paths } from '../../routes/routes'

import './login.css'

const LoginPage = ({ location }) => {
  const { isAuthenticated, login } = useAuth()

  if (isAuthenticated) {
    const { state } = location
    const redirectPath = state?.from || paths.HOME
    return <Redirect to={redirectPath} />
  }

  const handleLogin = (e) => {
    e.preventDefault()

    login({ name: 'Pugazh', email: 'admin@reactroutes.com' })
  }

  return (
    <div className="login">
      <div className="title">Login page</div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
