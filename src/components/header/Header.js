import React from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'

import { useAuth } from '../AuthContext'
import { paths } from '../../routes/routes'

import './header.css'

const Header = () => {
  const history = useHistory()
  const { user, isAuthenticated, logout } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()

    logout()

    history.push(paths.HOME)
  }

  return (
    <header className="header">
      <div className="logo-container">
        <Link to={paths.HOME} className="logo">
          React Routes
        </Link>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={paths.HOME}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={paths.PROTECTED_PAGE}>Protected Page</NavLink>
          </li>
        </ul>
        <div className="auth">
          {isAuthenticated ? (
            <>
              <Link to={paths.PROFILE} className="profile nav-item">
                Hi, {user.name}
              </Link>
              <Link to="" className="logout nav-item" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to={paths.LOGIN} className="login nav-item">
                Login
              </Link>
              <Link to={paths.REGISTER} className="register nav-item">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
