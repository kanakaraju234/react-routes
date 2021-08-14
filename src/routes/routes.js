import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoute from '../routes/ProtectedRoute'

import HomePage from '../pages/home/HomePage'
import RegisterPage from '../pages/register/RegisterPage'
import LoginPage from '../pages/login/LoginPage'
import ForgotPasswordPage from '../pages/forgot-password/ForgotPasswordPage'
import ResetPasswordPage from '../pages/reset-password/ResetPasswordPage'

import ProtectedPage from '../pages/protected-page/ProtectedPage'
import ProfilePage from '../pages/user/profile/ProfilePage'

import PermissionDeniedPage from '../pages/permission-denied/PermissionDeniedPage'
import PageNotFoundPage from '../pages/page-not-found/PageNotFoundPage'

export const paths = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROTECTED_PAGE: '/protected-page',
  PROFILE: '/user/profile',
  PERMISSION_DENIED: '/permission-denied',
  PAGE_NOT_FOUND: '/page-not-found',
}

const Routes = () => {
  return (
    <main className="container">
      <Switch>
        {/* Public routes */}
        <Route exact path={paths.HOME} component={HomePage} />
        <Route path={paths.REGISTER} component={RegisterPage} />
        <Route path={paths.LOGIN} component={LoginPage} />
        <Route path={paths.FORGOT_PASSWORD} component={ForgotPasswordPage} />
        <Route path={paths.RESET_PASSWORD} component={ResetPasswordPage} />

        {/* Private routes */}
        <ProtectedRoute path={paths.PROTECTED_PAGE} component={ProtectedPage} />
        <ProtectedRoute path={paths.PROFILE} component={ProfilePage} />

        {/* Permission Denied & Page Not Found */}
        <Route
          path={paths.PERMISSION_DENIED}
          component={PermissionDeniedPage}
        />
        <Route path="*" component={PageNotFoundPage} />
      </Switch>
    </main>
  )
}

export default Routes
