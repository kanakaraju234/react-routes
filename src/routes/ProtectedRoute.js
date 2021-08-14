import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from '../components/AuthContext'
import { paths } from './routes'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: paths.LOGIN, state: { from: props.location } }}
            />
          )
        }
      />
    </>
  )
}

export default ProtectedRoute
