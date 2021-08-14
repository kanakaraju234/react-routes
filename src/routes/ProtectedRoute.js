import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
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

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
}

export default ProtectedRoute
