import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import { paths } from '../../routes/routes'

import './login.css'

const LoginPage = ({ history, location, ...props }) => {
  const { state } = location
  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()

    login({ name: 'Pugazh', email: 'admin@reactroutes.com' })

    history.push(state?.from || paths.HOME)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
