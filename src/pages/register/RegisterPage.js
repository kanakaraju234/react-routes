import React from 'react'
import { Redirect } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthContext'
import { paths } from '../../routes/routes'

import './register.css'

const Register = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to={paths.HOME} />
  }

  return (
    <div className="register">
      <div className="title">Register Page</div>
    </div>
  )
}

export default Register
